import "../../global.css";

import { Stack } from "expo-router";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://0da95e4847783c8dcaf147740f7eb964@o4511735495458816.ingest.us.sentry.io/4511735498014720",
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
});

function RootLayout() {
  return <Stack />;
}

export default Sentry.wrap(RootLayout);
