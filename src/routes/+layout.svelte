<script>
import { slide } from 'svelte/transition'
import { page } from '$app/state'
import { onNavigate } from '$app/navigation'

import '../app.css'

import Colorbar from '../components/ColorbarD3.svelte'

let { children } = $props()

onNavigate((navigation) => {
  if (!document.startViewTransition) return
  return new Promise((resolve) => {
    document.startViewTransition(async () => {
      resolve()
      await navigation.complete
    })
  })
})
</script>

<Colorbar />

<div id="leftside"></div>

<ul>
  <li><a href="/">etd</a></li>
  <li>
    <a href="/about">about</a>
    {#if page.url.pathname.includes('about')}
      <ul transition:slide|global>
        <li><a href="/about/activities">activities</a></li>
        <!-- <li><a href="/about/beliefs">beliefs</a></li> -->
      </ul>
    {/if}
  </li>
  <li>
    <a href="/out">outputs</a>
    {#if page.url.pathname.includes('/out')}
      <ul transition:slide|global>
        <!-- <li><a href="/out/sites">sites</a></li> -->
        <li><a href="/out/data">data</a></li>
        <li><a href="/out/thesis">thesis</a></li>
      </ul>
    {/if}
  </li>
  <!-- <li><a href="/resume">résumé</a></li> -->
  <li><a href="/profiles">profiles</a></li>
  <li><a href="/contact">contact</a></li>
</ul>

<main>
  {@render children()}
</main>


<footer>
  ©2026 Eli T. Drumm&emsp;<svg class="star" viewBox="0 0 520 530" width="1em" height="1em" style="transform: translateY(3px)"><path d="m207.3 65.7 240.3 94.5-383.6 248.1zm-15.8-38.4c-.4 0-.8.2-.9.6l-190.5 455.4c-.2.5 0 1.1.5 1.3.1.1.3.1.4.1.2 0 .4-.1.5-.2l510-329.8c.5-.3.6-.9.3-1.4-.1-.2-.3-.3-.5-.4l-319.4-125.6c-.1 0-.3 0-.4 0z" fill="black"/></svg>&emsp;<a href="/colophon">about this site</a>
</footer>



<style>

div#leftside {
  grid-column-start: sideleft;
  grid-column-end: sideright;
  grid-row-start: pagetop;
  grid-row-end: pagebottom;
  width: 100%;
  height: 100%;

  background-color: var(--text-color);
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
      color: var(--background-color);
      &:hover {
        &::before {
          font-family: 'Noto Sans Symbols 2', monospace;
          content: "🢩 ";
          line-height: 1rem;
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
      color: var(--background-color);

      li {
        font-size: 1.2rem;
        font-style: italic;
        line-height: 1.4rem;
        margin: 0;

        &::after {
          font-family: 'Noto Sans Mono', monospace;
          font-style: normal;
          content: " ┤";
        }

        &:last-child::after {
          font-family: 'Noto Sans Mono', monospace;
          font-style: normal;
          content: " ┘";
        }
      }
    }
  }
}

main {
  max-width: 40rem;
}

footer {
  grid-area: footer;
  align-self: center;
  padding-left: 2rem;

  a {
    color: var(--link-color);
    text-decoration: none;
  }
}

@media (max-width: 780px) {
  div#leftside {
    display: none;
  }

  ul {
    grid-column: cbright / -1;
    background-color: var(--text-color);
    padding: 1rem;
    text-align: right;
    margin: 0;
  }

  footer {
    grid-column: cbright / -1;
    background-color: var(--text-color);
    color: var(--background-color);
    padding: 0 1rem 2rem;
    text-align: right;
    align-self: end;

    a {
      color: var(--link-color);
    }
  }
}

</style>