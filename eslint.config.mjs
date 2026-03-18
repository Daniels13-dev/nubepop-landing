import { FlatCompat } from "@eslint/eslintrc"
import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import reactPlugin from "eslint-plugin-react"
import jsxA11y from "eslint-plugin-jsx-a11y"

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
})

export default [
    {
        // basic ignores
        ignores: [".next/**", "node_modules/**", "out/**", "dist/**", "build/**"],
        // ensure TSX/TS parsed correctly
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                ecmaFeatures: { jsx: true },
                project: ["./tsconfig.json"],
            },
        },
        // plugins will be resolved by name via the extended configs; avoid passing plugin objects
        settings: { react: { version: "detect" } },
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/no-unescaped-entities": "error",
            "jsx-a11y/anchor-is-valid": "off",
            "no-console": ["warn", { allow: ["warn", "error"] }],
        },
    },

    // extend next recommended rules via compat
    ...compat.extends("next/core-web-vitals"),
]
