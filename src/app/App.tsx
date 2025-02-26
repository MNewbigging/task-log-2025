import "./app.scss";

import { AppState } from "./app-state";

interface AppProps {
  appState: AppState;
}

export function App({ appState }: AppProps) {
  return <div>hi </div>;
}
