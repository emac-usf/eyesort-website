import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/docs",
  "/docs/start-here/first-run",
  "/tutorials/quickstart",
  "/resources",
  "/about",
];

for (const route of routes) {
  test(`${route} has one page title and no automated accessibility violations`, async ({ page }) => {
    await page.goto(route);

    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveCount(1);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}

test("mobile primary navigation exposes all primary destinations and download", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile-only navigation check");

  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle navigation" });
  await expect(toggle).toBeVisible();
  await toggle.click();

  const navigation = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(navigation.getByRole("link", { name: "Documentation" })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Tutorials" })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Resources" })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "About" })).toBeVisible();
  await expect(navigation.getByRole("link", { name: /Download EyeSort/ })).toBeVisible();
});
