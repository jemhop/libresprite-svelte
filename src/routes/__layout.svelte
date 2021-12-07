<script>
  import "../app.css";
  import Navbar from "$lib/navbar.svelte";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Gelasio"
    rel="stylesheet"
  />
</svelte:head>

<div class="max-h-screen overflow-hidden">
  <Navbar />
  <div class="min-h-screen bg-lib">
    <slot />
  </div>
</div>
