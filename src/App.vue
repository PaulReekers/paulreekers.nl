<template>
  <div>
    <MetaInfo />
    <NavBar />
    <main id="home">
      <Home />
    </main>
    <Footer />
  </div>
</template>

<script>
import MetaInfo from './components/MetaInfo.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    MetaInfo,
    NavBar,
    Home,
    Footer,
  }
}
</script>

<style scoped>
@import './assets/css/style.css';
</style>
