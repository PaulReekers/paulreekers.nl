<template>
  <section class="inspiration full" id="inspiration">
    <h2>Inspiration</h2>
    <ul class="stuffs xx-large">
      <li
        class="stuff website"
        ref="websites"
        v-for="(item, index) in items"
        :key="index"
      >
        <h3>{{ item.title }}</h3>
        <div>
          <p v-html="item.description"></p>
          <p>
            <a :href="item.url" target="_blank">{{ item.url }}</a>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Inspiration",
  data() {
    return {
      items: [
        {
          title: "Add of the world",
          description:
            "Highlighted Campaigns <br><br> Ads of the World Ads of the World (AOTW for short) is part of the Clio Network of sites that celebrates creativity, inspires a competitive marketplace of ideas, and fosters meaningful connections within the creative community. <br>On AOTW we feature an ever-growing advertising campaign database, a customizable watchlist, bookmarks, and personal profiles so you can find the work that inspires you.",
          url: "https://www.adsoftheworld.com/",
        },
        {
          title: "Fonts In Use",
          description:
            "An independent archive of typography <br><br>Fonts In Use is a public archive of typography indexed by typeface, format, industry, and period. Supported by examples contributed by the public, we document and examine graphic design with the goal of improving typographic literacy and appreciation. Designers use our site for project research, type selection and pairing, and discovering new ways to choose and use fonts.",
          url: "https://fontsinuse.com/",
        },
      ],
    };
  },
  mounted() {
    this.$refs.websites.forEach((website, index) => {
      website.addEventListener("click", () => {
        const url = this.items[index].url;
        window.open(url, "_blank");
      });
    });
  },
};
</script>
