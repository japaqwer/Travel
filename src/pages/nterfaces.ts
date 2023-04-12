// interfaces.ts

// export interface Theme {
//   config: {
//     initialColorMode: "light" | "dark";
//   };
//   // add any other properties you need for your theme here
// }
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
  // и так далее
}
