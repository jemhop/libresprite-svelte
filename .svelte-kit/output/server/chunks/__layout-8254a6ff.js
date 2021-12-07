import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./app-18a6c52c.js";
import "@sveltejs/kit/ssr";
var app = "";
const Navbutton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { href } = $$props;
  let { newtab = false } = $$props;
  let target = newtab ? "_blank" : void 0;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.newtab === void 0 && $$bindings.newtab && newtab !== void 0)
    $$bindings.newtab(newtab);
  return `<a${add_attribute("target", target, 0)} class="${"rounded-lg p-3 my-1 hover:bg-lib-light text-gray-700 dark:text-gray-200 hover:text-white dark:hover:text-white md:my-0 mx-1"}"${add_attribute("href", href, 0)}>${escape(name)}</a>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"filter drop-shadow-2xl rounded-br-lg rounded-bl-lg"}"><nav class="${"shadow dark:bg-gray-800 "}"><div class="${"container px-6 py-3 mx-auto md:flex md:justify-between md:items-center "}"><div class="${"flex items-center justify-between"}"><div><a class="${"text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 "}" href="${"/"}">Brand</a></div>

                
                <div class="${"flex md:hidden"}"><button type="${"button"}" class="${"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 "}" aria-label="${"toggle menu"}"><svg viewBox="${"0 0 24 24"}" class="${"w-6 h-6 fill-current"}"><path fill-rule="${"evenodd"}" d="${"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}"></path></svg></button></div></div>

            
            <div class="${"items-center md:flex " + escape("hidden")}"><div class="${"flex flex-col md:flex-row md:mx-6"}">${validate_component(Navbutton, "Navbutton").$$render($$result, { name: "Home", href: "/" }, {}, {})}
                    ${validate_component(Navbutton, "Navbutton").$$render($$result, { name: "Downloads", href: "/downloads" }, {}, {})}
                    ${validate_component(Navbutton, "Navbutton").$$render($$result, {
    name: "Wiki",
    href: "https://github.com/LibreSprite/libresprite.github.io/wiki",
    newtab: "true"
  }, {}, {})}
                    ${validate_component(Navbutton, "Navbutton").$$render($$result, { name: "Resources", href: "/resources" }, {}, {})}
                    ${validate_component(Navbutton, "Navbutton").$$render($$result, { name: "About", href: "/about" }, {}, {})}</div></div></div></nav></div>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link href="${"https://fonts.googleapis.com/css?family=Gelasio"}" rel="${"stylesheet"}" data-svelte="svelte-63zpr7">`, ""}

<div class="${"max-h-screen overflow-hidden"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  <div class="${"min-h-screen bg-lib"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export { _layout as default };
