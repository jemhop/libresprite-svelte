import { c as create_ssr_component } from "./app-f430440f.js";
import "@sveltejs/kit/ssr";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"text-center w-full h-screen bg-gradient-to-r from-yellow-200 via-red-300 to-pink-300"}"><h1 class="${"pt-10 text-7xl"}">About page</h1>
    <div class="${"font-serif pt-12 text-2xl"}">Ciao!</div></section>`;
});
export { Routes as default };
