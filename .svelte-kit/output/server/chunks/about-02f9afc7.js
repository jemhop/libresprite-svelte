import { c as create_ssr_component, e as escape, v as validate_component } from "./app-18a6c52c.js";
import "@sveltejs/kit/ssr";
var subheader_svelte_svelte_type_style_lang = "";
const css = {
  code: "@font-face{font-display:swap;font-family:VCR;src:url(/VCR-OSD-Mono.tff)}h1.svelte-1wfid7b{font-family:VCR}",
  map: null
};
const Subheader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css);
  return `<h1 class="${"mx-auto text-white text-6xl p-10 drop-shadow-md svelte-1wfid7b"}">${escape(content)}</h1>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"mx-auto text-center"}">${validate_component(Subheader, "Subheader").$$render($$result, { content: "History" }, {}, {})}
    <p class="${"text-left text-2xl w-2/4 mx-auto "}">LibreSprite originated as a fork of Aseprite, developed by David
        Capello. Aseprite used to be distributed under the GNU General Public
        License version 2, but was moved to a proprietary license on August
        26th, 2016.
    </p>
    ${validate_component(Subheader, "Subheader").$$render($$result, { content: "Credits" }, {}, {})}
    <p></p></div>`;
});
export { About as default };
