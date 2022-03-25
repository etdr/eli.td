<script>
export let p

const { name, tagline, skills, description, url, git, img } = p

</script>

<section>
  <header>
    <h2>{name}</h2>
    <!-- <h2>{#if url || git}🞂{/if}</h2> -->
    {#if url}<a href={url}><img src="/icons/globe2.svg" alt="globe"></a>{/if}
    {#if git}<a href={git}> <img src="/icons/github.svg" alt="github"></a>{/if}
  </header>
  <h3>{tagline}</h3>
  <ul>
    {#each skills as s}
      <li>{s}</li>
    {/each}
  </ul>
  <p>{description}</p>
</section>


<style lang="postcss">
section {
  margin: 0 0 3rem;
  padding-left: 1rem;
  border-left: solid 4px black;

  header{
    display: flex;
  
    h2 {
      margin: 0 2rem 0 0;
      line-height: 2.2rem;
      font-size: 2rem;

    }
    a {
      display: inline-block;
      margin-right: 1rem;
      img {
        display: inline-block;
        height: 2rem;
        filter: invert(19%) sepia(65%) saturate(5993%) hue-rotate(233deg) brightness(95%) contrast(96%);
      }
    }
  }

  h3 {
    margin: 0;
    font-weight: normal;
    font-style: italic;
  }


}

</style>