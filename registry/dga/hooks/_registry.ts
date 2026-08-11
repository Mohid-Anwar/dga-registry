import { type Registry } from "shadcn/schema"

export const hooks: Registry["items"] = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-media",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-media.ts",
        type: "registry:hook",
      },
    ],
  },
]
