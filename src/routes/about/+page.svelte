<script>
import katexify from '$lib/katexify'
import approxFrac from '$lib/approxFrac'

function getKatexifiedAge () {
  const age = (((new Date().getTime() / 1000) - 614944800.0) / 31557600).toFixed(7)
  const ageWhole = Math.floor(parseFloat(age))
  const ageFrac = approxFrac(parseFloat(age) - Math.floor(parseFloat(age)))

  const kAge = `${ageWhole}\\frac{${ageFrac.n}}{${ageFrac.d}}`  

  return katexify(kAge)
}

let kAgeHTML = $state(getKatexifiedAge())

setInterval(() => { kAgeHTML = getKatexifiedAge() }, 500)


</script>


<h1>about me</h1>

<p>Hi, I'm Eli.</p>

<p>I am {@html kAgeHTML} years old.</p>

<p>I was born in New Orleans, Louisiana, United States, and moved around the country until I settled in central Indiana, just north of Indianapolis.</p>

<p>As an undergraduate I studied cognitive science and philosophy of science at Indiana University (Bloomington) from '07 through '011. Following this, from mid-2013 to early '016 I lived in the Netherlands earning a <a href="https://msclogic.illc.uva.nl/" target="_blank">MSc in Logic</a> from the University of Amsterdam.</p>

<p>Since graduating from my master's program (a decade ago, wow) I've more or less spent the time around Indianapolis. I currently work at a public library.</p>

<p>I also have a dog named Shannon (after <a href="https://en.wikipedia.org/wiki/Claude_Shannon" target="_blank">Claude</a>).</p>

<!-- <img src="@/assets/img/shannon0.gif"/> -->
<video autoplay loop class="w-100">
  <source src="/img/shannon0.mp4" type="video/mp4">
  <track default src="/img/shannon0.vtt" kind="captions">
</video>