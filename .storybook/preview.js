import GlobalStyles from "./GlobalStyles";
import { setConsoleOptions } from "@storybook/addon-console";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator((s) => (
  <>
    <GlobalStyles /> {s()}
  </>
));

setConsoleOptions({
  panelExclude: [],
});
