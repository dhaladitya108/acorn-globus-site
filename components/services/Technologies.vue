<template>
  <section id="technologies">
    <div class="technologies__header">
      <p>Technologies Used for Website Application Development</p>
    </div>
    <div class="technologies__cards">
      <TechnologiesCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :icon="card.icon"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TechnologiesCard from "~/components/services/TechnologiesCard.vue";
import cssIcon from "~/assets/images/services/css.png";
import htmlIcon from "~/assets/images/services/html.png";
import mongoIcon from "~/assets/images/services/mongo.png";
import nodeIcon from "~/assets/images/services/node.png";
import postgresIcon from "~/assets/images/services/postgres.png";
import railsIcon from "~/assets/images/services/rails.png";
import reactIcon from "~/assets/images/services/react.png";
import vueIcon from "~/assets/images/services/vue.png";

const cards = [
  {
    title: "HTML",
    icon: htmlIcon,
  },
  {
    title: "CSS",
    icon: cssIcon,
  },
  {
    title: "React",
    icon: reactIcon,
  },
  {
    title: "Vue",
    icon: vueIcon,
  },
  {
    title: "Node",
    icon: nodeIcon,
  },
  {
    title: "Postgres",
    icon: postgresIcon,
  },
  {
    title: "Mongo",
    icon: mongoIcon,
  },
  {
    title: "Rails",
    icon: railsIcon,
  },
]
</script>

<style scoped>
#technologies {
  display: flex;
  padding: 96px 0;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
}
.technologies__header {
  display: flex;
  max-width: 640px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.technologies__header > p {
  color: var(--Black, #12141D);
  text-align: center;
  font-family: Aileron,sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 116.667% */
}

.technologies__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

@media screen and (max-width: 600px) {
  #technologies {
    padding: 64px 0;
  }
  .technologies__header > p {
    font-size: 32px;
    line-height: 40px; /* 116.667% */
  }
}
</style>