import js from '@eslint/js'
import globals from 'globals'
import react from "eslint-plugin-react"
import importPLG from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      import: importPLG,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    "rules": {
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "no-useless-escape": "off",
      "react/react-in-jsx-scope": "off",
      "no-empty": "warn",
      "dot-notation": "off",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "semi": "off",
      "curly": 0,
      "nonblock-statement-body-position": ["error", "any"],
      "linebreak-style": 0,
      "no-trailing-spaces": ["error", { "skipBlankLines": true }],
      "comma-dangle": ["error", "only-multiline"],
      "operator-linebreak": 0,
      "prefer-const": 0,
      "import/no-extraneous-dependencies": "off",
      "max-len": 0,
      "indent": 0,
      "no-unsafe-optional-chaining": 0,
      "object-curly-newline": ["error", { "consistent": true }],
      "import/order": "off",
      "no-restricted-syntax": 0,
      "react/self-closing-comp": [
        "error",
        {
          "component": false,
          "html": false
        }
      ],
      "no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "args": "after-used",
          "ignoreRestSiblings": false,
          "argsIgnorePattern": "^_"
        }
      ],
      "react/function-component-definition": [
        2,
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ],
      "react/no-array-index-key": "off",
      "react/prop-types": [
        "error",
        {
          "skipUndeclared": true
        }
      ],
      "import/prefer-default-export": "off",
      "import/no-unresolved": [
        "error",
        {
          "ignore": ["^@/", "^./", "^../"]
        }
      ],
      "import/extensions": "off"
    }
  },
)
