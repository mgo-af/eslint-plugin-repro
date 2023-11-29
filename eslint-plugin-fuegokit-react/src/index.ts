import { noSystemPropsRule } from "./rules/no-system-props";
import { enforceFooBarRule } from "./rules/enforce-foo-bar";

export const rules = {
  "no-system-props": noSystemPropsRule,
  "enforce-foo-bar": enforceFooBarRule,
};

export const configs = {
  recommended: require("./configs/recommended"),
};
