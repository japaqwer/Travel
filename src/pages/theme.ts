import { extendTheme } from "@chakra-ui/react";
import { Theme } from "./nterfaces";

const theme = extendTheme<Theme>({
  config: {
    initialColorMode: "light",
  },
  // add your theme config here
});

export default theme;
