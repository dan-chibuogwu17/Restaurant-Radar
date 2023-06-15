import { StatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [oswaldIsLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });
  const [latoIsLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!oswaldIsLoaded || !latoIsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>

      <StatusBar style="auto" />
    </>
  );
}
