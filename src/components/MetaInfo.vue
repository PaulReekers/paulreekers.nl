<template>
  <div></div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  name: 'MetaInfo',
  setup() {
    useHead({
      title: 'Paul Reekers - Teacher, Media Developer & Agile Coach | paulreekers.nl',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Paul Reekers is an experienced teacher, media developer, coach, and Product Owner.' }
      ]
    });
  }
}
</script>
