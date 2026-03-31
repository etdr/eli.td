<script>
import WhatIAm from "/src/components/WhatIAm.svelte";

const shirts = ["orange", "bluecord", "greencord", "palm"];

const shirt = shirts[Math.floor(Math.random() * shirts.length)];
</script>

<h1>Eli T. Drumm</h1>

<h2>Hi! <span class="regular">I am a<WhatIAm /></span></h2>

<!-- ![Eli and Shannon](/img/me/fernshirt.jpg) -->
<img src="/img/me/{shirt}shirt.jpg" alt="Eli and Shannon" />

<h3><span class="regular">I'm glad you're here.</span></h3>

<style>
.regular {
  font-weight: normal;
}

img {
  height: 40rem;
  max-width: 100%;
  object-fit: contain;
  margin: 0 2rem;
}

@media (max-width: 780px) {
  img {
    margin: 0;
  }
}
</style>
