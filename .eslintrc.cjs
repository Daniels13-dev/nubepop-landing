module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: ["./tsconfig.json"],
    },
    ignorePatterns: [".next", "node_modules", "dist", ".vercel", "public"],
    plugins: ["@typescript-eslint", "jsx-a11y", "react"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "error",
        "jsx-a11y/anchor-is-valid": "off",
        "no-console": ["warn", { allow: ["warn", "error"] }],
    },
}
module.exports = {
    root: true,
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: ["./tsconfig.json"],
    },
    ignorePatterns: [".next", "node_modules", "dist", ".vercel", "public"],
    rules: {
        // TypeScript
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",

        // React
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "error",

        // Accessibility
        "jsx-a11y/anchor-is-valid": "off",

        // General
        "no-console": ["warn", { allow: ["warn", "error"] }],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}
