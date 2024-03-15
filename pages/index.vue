<script setup lang="ts"></script>

<template>
  <main class="welcome-container">
    <section>
      <h1>Welcome to KeleMC &lt;3</h1>
      <p><b>满足探索欲与创造性，只为快乐</b> </p>
      <p>网站建设中...</p>
      <p>© 2024 KeleMC. All Rights Reserved.</p>
      <p>
        Not an official Minecraft product. Not approved by or associated with
        Mojang.
      </p>
      <span>
        <a
          class="beian-text"
          target="_blank"
          href="https://beian.miit.gov.cn"
          rel="noreferrer"
        >
          粤ICP备2024192097号-1
        </a>
        <a
          class="beian-text"
          href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002002681"
          rel="noreferrer"
          target="_blank"
        >
          <img class="beian-logo" src="/beianLogo.png" alt="beian" />
          粤公网安备44030002002681
        </a>
      </span>
    </section>
  </main>
</template>

<style lang="scss">
@import '~/assets/css/normalize.css';
@import '~/assets/scss/index.scss';

.beian-text {
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  color: #b2b2b2;
  margin-bottom: 10px;
}

.beian-logo {
  display: inline;
  margin: 0 5px;
  width: 16px;
}
</style>
