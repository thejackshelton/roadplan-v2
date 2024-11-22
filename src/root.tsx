import { component$, useVisibleTask$ } from "@qwik.dev/core";
import {
  QwikRouterProvider,
  RouterOutlet,
} from "@qwik.dev/router";
import { RouterHead } from "./components/RouterHead/RouterHead";
import { ModulePreload } from "./components/module-preload/module-preload";

import "./global.scss";

export default component$(() => {
  useVisibleTask$(async () => {
    // Get all route modules (both tsx and mdx)
    const routes = {
      ...import.meta.glob('/src/routes/**/*.tsx'),
      ...import.meta.glob('/src/routes/**/*.mdx'),
      ...import.meta.glob('/src/routes/**/*.md')
    };
    
    // Rest of the code remains the same
    const preloadRoutes = (entries: [string, () => Promise<unknown>][]) => {
      if (entries.length === 0) return;
      
      const [_, loader] = entries[0];
      _;
      const remaining = entries.slice(1);
      
      loader().then(() => {
        if (remaining.length > 0) {
          if (window.requestIdleCallback) {
            window.requestIdleCallback(() => preloadRoutes(remaining));
          } else {
            setTimeout(() => preloadRoutes(remaining), 1);
          }
        }
      });
    };

    preloadRoutes(Object.entries(routes));
  }, { strategy: 'document-ready' });
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikRouterProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <ModulePreload />
        <RouterOutlet />
        <script dangerouslySetInnerHTML={
        `const version = localStorage.getItem("version") || "latest";
        localStorage.setItem("version", version);
		    const versionSelectEl = document.querySelector('[data-version-selector]');

		console.log('version', version);
		console.log('version select', versionSelectEl);

		versionSelectEl.value = version;`
      } />
      </body>
    </QwikRouterProvider>
  );
});
