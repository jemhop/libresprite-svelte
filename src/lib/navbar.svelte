<script>
    import Navbutton from "./navbutton.svelte";

    let mobileMenu = false;

    function onMobileMenuClick() {
        console.log(mobileMenu);
        mobileMenu = !mobileMenu;
    }
</script>

<div class="filter drop-shadow-2xl rounded-br-lg rounded-bl-lg">
    <nav class="shadow dark:bg-gray-800 ">
        <div
            class="
        container
        px-6
        py-3
        mx-auto
        md:flex md:justify-between md:items-center
      "
        >
            <div class="flex items-center justify-between">
                <div>
                    <a
                        class="
              text-xl
              font-bold
              text-gray-800
              dark:text-white
              md:text-2xl
              hover:text-gray-700
              dark:hover:text-gray-300
            "
                        href="/">Brand</a
                    >
                </div>

                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button
                        on:click={onMobileMenuClick}
                        type="button"
                        class="
              text-gray-500
              dark:text-gray-200
              hover:text-gray-600
              dark:hover:text-gray-400
              focus:outline-none focus:text-gray-600
              dark:focus:text-gray-400
            "
                        aria-label="toggle menu"
                    >
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class="items-center md:flex {mobileMenu ? 'block' : 'hidden'}">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <Navbutton name="Home" href="/" />
                    <Navbutton name="Downloads" href="/downloads" />
                    <Navbutton
                        name="Wiki"
                        href="https://github.com/LibreSprite/libresprite.github.io/wiki"
                        newtab="true"
                    />
                    <Navbutton name="Resources" href="/resources" />
                    <Navbutton name="About" href="/about" />
                </div>
            </div>
        </div>
    </nav>
</div>
