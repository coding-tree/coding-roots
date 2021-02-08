module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-storysource/register",
    "@storybook/addon-backgrounds",
  ],
};
