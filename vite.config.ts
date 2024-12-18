import { qwikRouter } from "@qwik.dev/router/vite";
import { qwikVite } from "@qwik.dev/core/optimizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(async () => {
  const { default: rehypePrettyCode } = await import("rehype-pretty-code");
  const { visit } = await import("unist-util-visit");

  return {
    plugins: [
      qwikRouter({
        mdxPlugins: {
          rehypeSyntaxHighlight: false,
          remarkGfm: true,
          rehypeAutolinkHeadings: true,
        },
        mdx: {
          providerImportSource: "~/state/MDXProvider",
          rehypePlugins: [
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.type === "element" && node?.tagName === "pre") {
                  const [codeEl] = node.children;
                  if (codeEl.tagName !== "code") {
                    return;
                  }

                  node.__rawString__ = codeEl.children?.[0].value;
                }
              });
            },
            [
              rehypePrettyCode,
              {
                onVisitLine(node: any) {
                  // Prevent lines from collapsing in `display: grid` mode, and allow empty
                  // lines to be copy/pasted
                  if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }];
                  }
                },
                onVisitHighlightedLine(node: any) {
                  // Each line node by default has `class="line"`.
                  if (node.properties.className) {
                    node.properties.className.push("line--highlighted");
                  }
                },
                onVisitHighlightedWord(node: any) {
                  if (node.properties.className) {
                    node.properties.className = ["word--highlighted"];
                  }
                },
              },
            ],
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.type === "element" && node?.tagName === "div") {
                  if (
                    !("data-rehype-pretty-code-fragment" in node.properties)
                  ) {
                    return;
                  }

                  const preElement = node.children.at(-1);
                  if (preElement.tagName !== "pre") {
                    return;
                  }

                  preElement.properties["__rawString__"] = node.__rawString__;
                }
              });
            },
          ],
        },
      }),
      qwikVite(),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
