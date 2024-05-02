<template>
  <section id="expertize" class="wrapper">
    <div class="container text-center">
      <span class="subtext text-uppercase">Our Expertize</span>
      <h2 class="subheading mb-4">Our Technology Stack</h2>
      <div class="tech-stacks">
        <div
            v-for="tech in technologies"
            class="technology"
        >
          <div class="technology__image">
            <img :src="tech.icon" :alt="tech.name" />
          </div>
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import vueIcon from '~/assets/images/tech-stack/vue.png'
import reactIcon from '~/assets/images/tech-stack/react.png'
import railsIcon from '~/assets/images/tech-stack/rails.png'
import pythonIcon from '~/assets/images/tech-stack/python.png'
import nodeIcon from '~/assets/images/tech-stack/node.png'
import dockerIcon from '~/assets/images/tech-stack/docker.png'
import figmaIcon from '~/assets/images/tech-stack/figma.png'
import postgresqlIcon from '~/assets/images/tech-stack/postgresql.png'
import githubIcon from '~/assets/images/tech-stack/github.png'
import golangIcon from '~/assets/images/tech-stack/golang.png'
import androidIcon from '~/assets/images/tech-stack/android.png'
import flutterIcon from '~/assets/images/tech-stack/flutter.png'
import mongoIcon from '~/assets/images/tech-stack/mongo.png'
import htmlIcon from '~/assets/images/tech-stack/html.png'
import cssIcon from '~/assets/images/tech-stack/css.png'

const technologies = [
  { name: 'Vue', icon: vueIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Rails', icon: railsIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Node', icon: nodeIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
  { name: 'Github', icon: githubIcon },
  { name: 'Golang', icon: golangIcon },
  { name: 'Android', icon: androidIcon },
  { name: 'Flutter', icon: flutterIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
]
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
  gap: 8px;
  //padding: 16px;
  height: 140px;
  width: 140px;
}
.technology__image {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}
.technology__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.technology span {
  font-size: 14px;
  font-weight: 500;
  color: var(--Black, #000);
  margin-bottom: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.technology:hover {
  border-radius: 8px;
  background: var(--White, #FFF);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.07);
}
@media screen and (max-width: 540px) {
  .tech-stacks {
    gap: 24px;
  }
  .technology {
    margin: 2px 30px;
    height: 100px;
    width: 100px;
    padding: 16px;
  }
  .technology__image {
    margin: 0 10px;
    width: 60px;
    height: 60px;
  }
}
</style>