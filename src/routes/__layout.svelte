<script>
import { slide } from 'svelte/transition'
import { page } from '$app/stores'

import '../app.css'

import Colorbar from '../components/Colorbar.svelte'
</script>

<Colorbar />

<div id="leftside"></div>

<ul>
  <li><a href="/">etd</a></li>
  <li>
    <a href="/about">about</a>
    {#if $page.url.pathname.includes('about')}
      <ul transition:slide>
        <li><a href="/about/activities">activities</a></li>
        <li><a href="/about/beliefs">beliefs</a></li>
      </ul>
    {/if}
  </li>
  <li><a href="/portfolio">portfolio</a></li>
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

:global(:root) {
  /* breakpoint variables */
  $x: (max-width: 1240px);
  $l: (max-width: 1024px);
  $m: (max-width: 780px);
  $s: (max-width: 660px);
}

div#leftside {
  grid-column-start: sideleft;
  grid-column-end: sideright;
  grid-row-start: pagetop;
  grid-row-end: pagebottom;
  width: 100%;
  height: 100%;

  background-color: var(--background-color);
}

ul {
  grid-area: sidestuff;
  padding-inline-start: 0;
  text-align: right;
  margin: 0 1rem 0 0;
  display: flex;
  flex-direction: column;
  color: #f2f2f2;

  li {
    list-style: none;
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 0.6rem;

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
      color: var(--text-color);

      li {
        font-size: 1.2rem;
        font-style: italic;
        line-height: 1.4rem;
        margin: 0;

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