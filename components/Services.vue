<template>
  <section id="services" class="wrapper">
    <div class="container">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <span class="subtext">our services</span>
        <h2 class="subheading mb-4">What we offer</h2>
        <div class="row services">
          <div
              v-for="card in cards"
              class="service__card col-lg-4 mt-4 mt-lg-0 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start"
          >
            <div class="icon">
              <img
                  :src="card.icon"
                  :alt="card.title"
              />
            </div>
            <h3 class="service__title">{{ card.title }}</h3>
            <p class="service__description">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import webDevIcon from "~/assets/images/services/web-dev.png";
import appDevIcon from "~/assets/images/services/app-dev.png";
import enterpriseIcon from "~/assets/images/services/enterprise.png";
import apiDevIcon from "~/assets/images/services/api-dev.png";
import cloudIcon from "~/assets/images/services/cloud.png";
import devopsIcon from "~/assets/images/services/devops.png";
import maintainanceIcon from "~/assets/images/services/maintainance.png";
import uiUxIcon from "~/assets/images/services/ui-ux.png";

const cards = [
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: webDevIcon,
  },
  {
    title: "Mobile Application Development",
    description:
        "Develop feature-rich and engaging mobile applications for iOS and Android that bring your ideas to life and connect you with your audience on the go.",
    icon: appDevIcon,
  },
  {
    title: "Enterprise Software Development",
    description:
        "Development: Design and develop custom enterprise software solutions to automate workflows, manage data efficiently, and empower your organization for growth.",
    icon: enterpriseIcon,
  },
  {
    title: "API Development",
    description:
        "Integrate with existing systems and data sources through secure and efficient API development, channeling new functionalities and fostering collaboration.",
    icon: apiDevIcon,
  },
  {
    title: "UI/UX Design",
    description:
        "Design intuitive and user-friendly interfaces (UI) and user experiences (UX) that not only look great but also provide a smooth and engaging interaction for your users.",
    icon: uiUxIcon,
  },
  {
    title: "Cloud Integration",
    description:
        "Leverage the scalability and security of cloud-based solutions by seamlessly integrating your applications with leading cloud platforms.",
    icon: cloudIcon,
  },
  {
    title: "DevOps",
    description:
        "Implement DevOps practices to automate software delivery and maintenance processes, ensuring faster development cycles and improved efficiency.",
    icon: devopsIcon,
  },
  {
    title: "Software Maintenance and Support",
    description:
        "Our comprehensive software maintenance and support plans ensure your applications stay up-to-date, secure, and functioning optimally. ",
    icon: maintainanceIcon,
  },
]
</script>

<style scoped>
.services {
  margin-top: 36px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
.service__card {
  max-width: 264px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
.service__card:hover {
  border-radius: 8px;
  border: 0.25px solid var(--Stroke, #E2E2E2);
  background: var(--White, #FFF);
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.03);
}
.service__title {
  color: var(--primary, #192A52);
  font-family: Aileron,sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
  text-transform: capitalize;
}
.service__description {
  color: var(--Secondary-Black, #363636);
  font-family: Aileron,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.icon {
  background-color: #f0f4ff;
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1.5em;
}

@media screen and (max-width: 768px) {

}
</style>