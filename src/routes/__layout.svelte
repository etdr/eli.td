<script>
import { page } from '$app/stores'

import '../app.css'
</script>

<ul>
  <li><a href="/">etd</a></li>
  <li>
    <a href="/about">about</a>
    {#if $page.url.pathname.includes('about')}
      <ul>
        <li><a href="/about/activities">activities</a></li>
        <li><a href="/about/beliefs">beliefs</a></li>
      </ul>
    {/if}
  </li>
  <li><a href="/resume">résumé</a></li>
  <li><a href="/profiles">profiles</a></li>
  <li><a href="/contact">contact</a></li>
</ul>

<main>
  <slot />
</main>

<footer>
  ©2022 Eli T. Drumm
</footer>



<style lang="postcss">
ul {
  grid-area: sidestuff;
  padding-inline-start: 0;
  text-align: right;
  margin: 0 1rem 0 0;
  display: flex;
  flex-direction: column;

  li {
    list-style: none;
    font-size: 1.6rem;
    line-height: 2rem;

    /* span {
      color: var(--background-color);
    }

    &:hover {
      span {
        display: inline;
        color: var(--link-color);
      }
    } */
    
    a {
      color: var(--text-color);
      &:hover {
        &::before {
          content: "🢩 ";
          color: var(--link-color);

        }
      }
    }

    /* &::after {
      content: " ┤";
    } */

    /* &:first-child::after {
      content: " ┓"; or ╗
    }

    &:last-child::after {
      content: " ┛"; or ╝
    } */
    
    ul {
      margin-top: 0.2rem;
      margin-bottom: 0.8rem;

      li {
        font-size: 1.2rem;
        font-style: italic;
        line-height: 1.4rem;

        &::after {
          font-style: normal;
          content: " ┤";
        }

        &:last-child::after {
          font-style: normal;
          content: " ┘";
        }
      }
    }
  }
}

footer {
  grid-area: footer;
  align-self: center;
}


</style>