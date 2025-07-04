import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  // ...other configs
  reactHooks.configs["recommended-latest"],
  prettier,
];
