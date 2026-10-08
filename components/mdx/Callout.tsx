import type { ReactNode } from "react";

const LABELS = {
  prerequisite: "Prerequisite",
  warning: "Important",
  output: "Expected output",
  validation: "Verify",
  note: "Note",
} as const;

export function Callout({
  children,
  title,
  variant = "note",
}: {
  children: ReactNode;
  title?: string;
  variant?: keyof typeof LABELS;
}) {
  return (
    <aside className={`docs-callout docs-callout-${variant}`}>
      <p className="docs-callout-title">{title ?? LABELS[variant]}</p>
      <div>{children}</div>
    </aside>
  );
}
