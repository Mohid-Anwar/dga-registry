import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Generated registry output (see registry:build).
    "public/r/**",
    // Local editor scratch space — git-ignored, so it isn't ours to keep clean.
    ".vscode/**",
  ]),
])

export default eslintConfig
