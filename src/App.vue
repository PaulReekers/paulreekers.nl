<template>
  <div>
    <MetaInfo />
    <NavBar v-if="showNavBarAndFooter" />
    <main id="home">
      <router-view></router-view>
    </main>
    <Footer v-if="showNavBarAndFooter" />
  </div>
</template>

<script>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import MetaInfo from "./components/MetaInfo.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    MetaInfo,
    NavBar,
    Footer,
  },
  setup() {
    const route = useRoute();
    const showNavBarAndFooter = computed(() => route.path !== '/wedstock');
    return {showNavBarAndFooter};
  }
};
</script>

<style>
/* Add your styles here */
</style>
