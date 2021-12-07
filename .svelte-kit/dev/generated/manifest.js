const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/downloads.svelte"),
	() => import("../../../src/routes/resources.svelte"),
	() => import("../../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/downloads.svelte
	[/^\/downloads\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/resources.svelte
	[/^\/resources\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[5]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];