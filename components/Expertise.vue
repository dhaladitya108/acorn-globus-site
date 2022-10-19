<template>
  <section id="expertize" class="wrapper expertize">
    <div class="container text-center">
      <span class="subtext">our technology spectrum</span>
      <h2 class="subheading mb-4">Tech Expertise</h2>
      <div class="tech-stacks">
        <div class="technology">
          <img src="@/assets/images/expertize/rails.png" alt="rails logo" />
        </div>
        <div class="technology">
          <img src="@/assets/images/expertize/vue.png" alt="vue logo" />
        </div>
        <div class="technology">
          <img src="@/assets/images/expertize/react.png" alt="react logo" />
        </div>
        <div class="technology">
          <img src="@/assets/images/expertize/python.png" alt="python logo" />
        </div>
        <div class="technology">
          <img src="@/assets/images/expertize/node.png" alt="nodejs logo" />
        </div>
        <div class="technology">
          <img
            src="@/assets/images/expertize/docker.png"
            alt="kubernetes logo"
          />
        </div>
        <div class="technology">
          <img src="@/assets/images/expertize/figma.png" alt="figma logo" />
        </div>
        <div class="technology">
          <img
            src="@/assets/images/expertize/postgresql.png"
            alt="postgresql logo"
          />
        </div>
        <div class="technology">
          <img
            src="@/assets/images/expertize/github.png"
            alt="version control logo"
          />
        </div>
        <div class="technology">
          <img src="@/assets/images/expertize/golang.png" alt="golang logo" />
        </div>
        <div class="technology">
          <img src="@/assets/images/expertize/android.png" alt="android logo" />
        </div>
        <div class="technology">
          <img src="@/assets/images/expertize/flutter.png" alt="flutter logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.expertize {
  background-color: hsla(222, 58%, 90%, 1);
}

.tech-stacks {
  max-width: 900px;
  margin: 0px auto 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.technology {
  width: 280px;
  margin: 30px auto;
}

@media screen and (max-width: 540px) {
  .technology {
    width: 250px;
    margin: 10px auto;
  }

  .tech-stacks {
    margin-top: 2em;
    gap: 2em;
  }
}
</style>
