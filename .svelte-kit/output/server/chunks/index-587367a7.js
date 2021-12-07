import { c as create_ssr_component } from "./app-283435c6.js";
import "@sveltejs/kit/ssr";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-14r3kfr{background-color:red}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-14r3kfr"}">About page</h1>
<div>Ciao!</div>`;
});
export { Routes as default };
