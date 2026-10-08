import { RELEASE } from "./site";

/** Stable release displayed across the site. Updated with each verified release. */
export async function getLatestVersion(): Promise<string> {
  return RELEASE.version;
}
