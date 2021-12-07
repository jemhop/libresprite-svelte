import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-08ddeec1.js",
			css: [assets + "/_app/assets/start-464e9d0a.css"],
			js: [assets + "/_app/start-08ddeec1.js",assets + "/_app/chunks/vendor-c23136b9.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"VCR-OSD-Mono.ttf","size":75864,"type":"font/ttf"},{"file":"favicon.png","size":1571,"type":"image/png"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/downloads\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/downloads.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/resources\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/resources.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/downloads.svelte": () => import("../../src/routes/downloads.svelte"),"src/routes/resources.svelte": () => import("../../src/routes/resources.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-8b5a1f7e.js","css":["assets/pages/__layout.svelte-11e2530d.css"],"js":["pages/__layout.svelte-8b5a1f7e.js","chunks/vendor-c23136b9.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-61b796f3.js","css":[],"js":["error.svelte-61b796f3.js","chunks/vendor-c23136b9.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-933ccce0.js","css":[],"js":["pages/index.svelte-933ccce0.js","chunks/vendor-c23136b9.js"],"styles":[]},"src/routes/downloads.svelte":{"entry":"pages/downloads.svelte-96fe03f3.js","css":[],"js":["pages/downloads.svelte-96fe03f3.js","chunks/vendor-c23136b9.js"],"styles":[]},"src/routes/resources.svelte":{"entry":"pages/resources.svelte-bac0ed22.js","css":[],"js":["pages/resources.svelte-bac0ed22.js","chunks/vendor-c23136b9.js"],"styles":[]},"src/routes/about.svelte":{"entry":"pages/about.svelte-b994b5a2.js","css":["assets/pages/about.svelte-d5bdb6c4.css"],"js":["pages/about.svelte-b994b5a2.js","chunks/vendor-c23136b9.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}