<script>
    export let name;
    export let href;
    export let newtab = false;

    let target = newtab ? "_blank" : undefined;
</script>

<a
    {target}
    class="
        rounded-lg
        p-3
        my-1
        hover:bg-lib-light
        text-gray-700
        dark:text-gray-200
        hover:text-white
        dark:hover:text-white
        md:my-0
        mx-1"
    {href}>{name}</a
>
