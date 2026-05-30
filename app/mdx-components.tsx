import { Children, type ReactNode } from "react"
import type { MDXComponents } from "mdx/types"

// The Rust MDX compiler (mdxRs) inserts whitespace text nodes ("\n") between
// table elements. These are invalid as direct children of <table>, <thead>,
// <tbody>, and <tr> in HTML, causing hydration errors. Strip them out.
function stripWhitespace(children: ReactNode): ReactNode[] {
  return Children.toArray(children).filter(
    (child) => !(typeof child === "string" && child.trim() === "")
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 scroll-m-20 text-lg font-semibold tracking-tight">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc [&>li]:mt-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
    ),
    code: ({ children }) => (
      <code className="relative rounded bg-black/10 px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg border bg-zinc-950 p-4 text-sm text-zinc-50 dark:bg-zinc-900">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-border my-8" />,
    table: ({ children }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full text-sm">{stripWhitespace(children)}</table>
      </div>
    ),
    thead: ({ children }) => <thead>{stripWhitespace(children)}</thead>,
    tbody: ({ children }) => <tbody>{stripWhitespace(children)}</tbody>,
    tr: ({ children }) => <tr>{stripWhitespace(children)}</tr>,
    th: ({ children }) => (
      <th className="border-border bg-muted/50 border px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-border border px-4 py-2">{children}</td>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-border my-4 border-l-4 pl-4 italic">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="text-foreground font-semibold">{children}</strong>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-primary font-medium underline underline-offset-4"
      >
        {children}
      </a>
    ),
    ...components,
  }
}
