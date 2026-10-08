"use client";

import { useRef, useState, type HTMLAttributes } from "react";

export function CodeBlock(props: HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    const text = ref.current?.innerText ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="docs-code-block">
      <button type="button" onClick={copyCode} className="docs-copy-button">
        {copied ? "Copied" : "Copy"}
      </button>
      <pre ref={ref} tabIndex={0} {...props} />
    </div>
  );
}
