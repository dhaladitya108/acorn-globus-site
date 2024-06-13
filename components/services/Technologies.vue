<template>
  <section id="expertize" class="wrapper">
    <div class="container mx-auto px-4 md:px-12 text-center">
      <h2 class="subheading mb-4">
        Technologies Used for Website Application Development
      </h2>
      <div class="tech-stacks">
        <div v-for="tech in technologies" class="technology">
          <div class="technology__image">
            <img :src="tech.icon" :alt="tech.name" />
          </div>
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import vueIcon from "~/assets/images/tech-stack/vue.svg";
import reactIcon from "~/assets/images/tech-stack/react.svg";
import railsIcon from "~/assets/images/tech-stack/rails.svg";
import pythonIcon from "~/assets/images/tech-stack/python.svg";
import nodeIcon from "~/assets/images/tech-stack/node.svg";
import dockerIcon from "~/assets/images/tech-stack/docker.svg";
import figmaIcon from "~/assets/images/tech-stack/figma.svg";
import postgresqlIcon from "~/assets/images/tech-stack/postgresql.svg";
import githubIcon from "~/assets/images/tech-stack/github.svg";
import androidIcon from "~/assets/images/tech-stack/android.svg";
import flutterIcon from "~/assets/images/tech-stack/flutter.svg";
import mongoIcon from "~/assets/images/tech-stack/mongodb.svg";
import htmlIcon from "~/assets/images/tech-stack/html.svg";
import cssIcon from "~/assets/images/tech-stack/css.svg";

const technologies = [
  { name: "Vue", icon: vueIcon },
  { name: "React", icon: reactIcon },
  { name: "Rails", icon: railsIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Node", icon: nodeIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Github", icon: githubIcon },
  { name: "Android", icon: androidIcon },
  { name: "Flutter", icon: flutterIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
];
</script>

<style>
.tech-stacks {
  width: 100%;
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}
.technology {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
}
.technology__image {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}
.technology span {
  font-size: 14px;
  font-weight: 500;
  color: var(--Black, #000);
  margin-bottom: 8px;
}

.technology:hover {
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.07);
}
@media screen and (max-width: 540px) {
  .tech-stacks {
    gap: 32px;
  }
  .technology {
    margin: 2px 30px;
  }
  .technology__image {
    width: 80px;
    height: 80px;
  }
}
</style>
