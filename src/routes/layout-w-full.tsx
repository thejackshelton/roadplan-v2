import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@qwik.dev/core";
import { type RequestHandler } from "@qwik.dev/router";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { components } from "~/components/MdxComponents/MdxComponents";
import { MDXProvider } from "~/state/MDXProvider";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

type Store = {
  theme: "light" | "dark";
};

export const StoreContext = createContextId<Store>("Store");

export default component$(() => {
  const store = useStore<Store>({ theme: "light" });
  useContextProvider(StoreContext, store);
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const theme = localStorage.getItem("theme") as Store["theme"];
    store.theme = theme;
  });
  const links = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docs/" },
    { name: "Demo", href: "/demo/" },
  ];

  return (
    <MDXProvider components={components}>
      <div class="h-screen bg-white dark:bg-slate-900">
        <Header links={links} showMenu={false} />
        <main class="flex min-h-[100%] bg-white dark:bg-slate-900">
          <article class="docs w-full pb-10 pt-28">
            <Slot />
          </article>
        </main>
        <Footer />
      </div>
    </MDXProvider>
  );
});
