import { component$ } from "@qwik.dev/core";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@qwik.dev/router";
import { RouterHead } from "./components/RouterHead/RouterHead";

import "./global.scss";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <script dangerouslySetInnerHTML={
        `const version = localStorage.getItem("version");
		    const versionSelectEl = document.querySelector('[data-version-selector]');

		console.log('version', version);
		console.log('version select', versionSelectEl);

		versionSelectEl.value = version || "";`
      } />
      </body>
    </QwikCityProvider>
  );
});
