<template>
  <section class="work full" id="playground">
    <h2>Playground</h2>
    <ul class="stuffs xx-large">
      <li
        v-for="(project, index) in projects"
        :key="project.name"
        class="stuff project"
        ref="projects"
      >
        <h3>{{ project.title }}</h3>
        <div>
          <p>{{ project.description }}</p>
          <p>
            <a :href="project.link" target="_blank">Show me</a>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Playground",
  data() {
    return {
      projects: [
        {
          name: "hovereffect",
          title: "Hover Effect with svg image",
          description: "A recreation of an insane hover effect.",
          link: "/playground/hovereffect/",
        },
        {
          name: "snake",
          title: "Old Snake Game",
          description: "A recreation of an old snake game.",
          link: "/playground/snake/",
        },
      ],
    };
  },
  mounted() {
    this.addClickListeners();
  },
  methods: {
    addClickListeners() {
      this.$refs.projects.forEach((project, index) => {
        project.addEventListener("click", () => {
          this.openUrl(index);
        });
      });
    },
    openUrl(index) {
      const url = this.projects[index].link;
      window.open(url, "_blank");
    },
  },
};
</script>
