import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { Login } from "./pages/Login/index.jsx";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
