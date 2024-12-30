<template>
  <div></div>
</template>

<script>
import { useHead } from "@vueuse/head";
import appleTouchIcon from "../assets/favicon/apple-touch-icon.png";
import favicon32 from "../assets/favicon/favicon-32x32.png";
import favicon16 from "../assets/favicon/favicon-16x16.png";
import siteManifest from "../assets/favicon/site.webmanifest";
import ogImage from "../assets/favicon/favicon-16x16.png";

export default {
  name: "MetaInfo",
  setup() {
    useHead({
      title:
        "Paul Reekers - Teacher, Media Developer & Agile Coach | paulreekers.nl",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "author", content: "Paul Reekers" },
        {
          name: "description",
          content:
            "Explore the world of Paul Reekers, a dedicated teacher and expert in design and web development. As a certified Agile coach, Scrum Master, and Product Owner, he brings a unique blend of skills to the digital realm. Learn more about his work and insights at paulreekers.nl.",
        },
        { name: "robots", content: "index, follow" },
        {
          property: "og:title",
          content:
            "Paul Reekers - Teacher, Web Developer, Agile Expert & Certified Scrum Professional.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.paulreekers.nl/" },
        {
          property: "og:description",
          content:
            "Paul Reekers, a multifaceted professional specializing in teaching, design, web development, and Agile coaching. Certified as both a Scrum Master and Product Owner, he brings a wealth of expertise to the field. Discover more at paulreekers.nl",
        },
        { property: "og:image", content: ogImage },
      ],
      link: [
        { rel: "canonical", href: "https://www.paulreekers.nl" },
        { rel: "apple-touch-icon", sizes: "180x180", href: appleTouchIcon },
        { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
        { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
        { rel: "manifest", href: siteManifest },
        { rel: "shortcut icon", href: favicon32 },
      ],
    });
  },
};
</script>
