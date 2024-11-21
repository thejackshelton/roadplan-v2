import { component$, useSignal, useTask$ } from "@qwik.dev/core";
import { useLocation, useNavigate } from "@qwik.dev/router";
import { isServer } from "@qwik.dev/core/build";
import { fetchVersionMetadata } from "~/utils/version";

export const VersionSelector = component$(() => {
	const versions = useSignal<any[]>([]);
	const currentVersion = useSignal("");
	const nav = useNavigate();
	const loc = useLocation();
	const isHome = loc.url.pathname === "/";

	/**
	 *
	 * 	Docusaurus has:
	 *
	 * /docs/intro <--- current version
	 *
	 * /docs/v1/intro <--- v1 version
	 * /docs/v2/intro <--- v2 version
	 *
	 * We have:
	 *
	 * /docs/<current version>/intro <--- current version
	 * /docs/v1/intro <--- v1 version
	 *
	 * What we need to do is have it exactly like Docusaurus
	 *
	 *
	 */

	if (isHome) {
		return null;
	}

	useTask$(async ({ track }) => {
		track(() => currentVersion.value);

		if (isServer) {
			const metadata = await fetchVersionMetadata();
			versions.value = metadata.versions;
		}

		if (isServer) return;

		localStorage.setItem("version", currentVersion.value);

		const currentPath = loc.url.pathname.replace(/^\/docs\/[^/]+/, "") || "/";
		const isLatestVersion = currentVersion.value === "latest";
		const basePath = isLatestVersion
			? "/docs"
			: `/docs/legacy/v${currentVersion.value}`;
		nav(`${basePath}${currentPath}`);
	});

	return (
		<select
			data-version-selector
			class="p-2 border rounded"
			onChange$={(e) => {
				const select = e.target as HTMLSelectElement;
				const selectedVersion = select.value;

				console.log('current version', selectedVersion);

				currentVersion.value = selectedVersion;

				const maxAge = 30 * 24 * 60 * 60;
				document.cookie = `version=${selectedVersion};path=/;max-age=${maxAge}`;
			}}
		>
			{versions.value.map((version) => (
				<option selected={version.id === currentVersion.value} key={version.id} value={version.id}>
					{version}
				</option>
			))}
		</select>
	);
});

// export const VersionSelector = component$(() => {
//   const location = useLocation();
//   const versionSig = useComputed$(
//     () => location.url.pathname.replace("/versions/", "").split("/")[0],
//   );
//   const navigate = useNavigate();
//   const showSig = useSignal(false);
//   return (
//     <div class="relative inline-block text-left text-black dark:text-white">
//       <button
//         type="button"
//         class="flex- inline-flex justify-end rounded-md bg-white px-3 py-2 text-sm dark:bg-slate-900"
//         id="menu-button"
//         aria-expanded="true"
//         aria-haspopup="true"
//         onClick$={() => {
//           showSig.value = !showSig.value;
//         }}
//       >
//         {versionSig.value || versions[0]}
//         <ChevronIcon />
//       </button>
//       {showSig.value && (
//         <div
//           class="absolute right-0 z-10 mt-2 max-h-[400px] w-44 overflow-scroll rounded-md border-2 border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="menu-button"
//           tabIndex={-1}
//         >
//           <div class="max-h-[400px] py-1">
//             {versions.map((version, key) => (
//               <button
//                 key={key}
//                 class={{
//                   "block w-full px-4 py-2 text-sm": true,
//                   "bg-gray-300 dark:bg-slate-600":
//                     location.params.version === version,
//                 }}
//                 role="menuitem"
//                 tabIndex={-1}
//                 onClick$={() => {
//                   showSig.value = !showSig.value;
//                   if (version.indexOf("latest") > 0) {
//                     navigate(`/versions/latest/Guide/Benchmarking`);
//                   } else {
//                     navigate(`/versions/${version}/Guides/Benchmarking/`);
//                   }
//                 }}
//               >
//                 {version}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });
