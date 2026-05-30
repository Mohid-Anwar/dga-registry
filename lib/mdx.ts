import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

export async function parseMDX(source: string, components: any) {
  const { content, frontmatter } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  return { content, frontmatter }
}
