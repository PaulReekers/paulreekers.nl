<template>
  <div>
    <main id="home">
      <div class="intro-wrapper">
        <div id="intro" class="full">
          <h1 class="shadow-letters">Paul Reekers</h1>
          <div id="about" class="large">
            <p>I'm an experienced teacher, media developer, coach <br> and Product Owner.</p>
            <p><a href="#aboutMe" class="link">About me</a> / <a href="#playground" class="link">Playground</a></p>
          </div>
        </div>
        <aside class="summary x-large">
          <div class="tldr">
            <h2>TL;DR</h2>
            <p>I'm a teacher, media designer, coach and on an endeavor to become a <a href="https://codepen.io/collection/kNZpyB" target="_blank" class="link">CSS artist</a>.</p>
            <p>Here you can find projects I have created or other stuff that, I think, are worthy putting on the internet (so basically everything ;) ).</p>
          </div>
        </aside>
        <AboutMe />
      </div>
      <Playground />
      <Inspiration />
      <Contact />
    </main>
  </div>
</template>

<script>
import MetaInfo from "./MetaInfo.vue";
import NavBar from "./NavBar.vue";
import AboutMe from "./AboutMe.vue";
import Playground from "./Playground.vue";
import Inspiration from "./Inspiration.vue";
import Contact from "./Contact.vue";
import Footer from "./Footer.vue";

export default {
  name: 'Home',
  components: {AboutMe, Playground, Inspiration, Contact}
}
</script>
