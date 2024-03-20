<script setup lang="ts"></script>

<template>
  <main id="root" class="container">
    <div class="intro">
      <section>
        <h1>Welcome to KeleMC &lt;3</h1>
        <p><b>满足探索欲与创造性，只为快乐</b></p>
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
    </div>
    <div class="show">
      <section>
        <h1>Welcome to KeleMC &lt;3</h1>
        <p><b>满足探索欲与创造性，只为快乐</b></p>
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
    </div>
  </main>
</template>

<style lang="scss">
@import '~/assets/css/normalize.css';
@import '~/assets/scss/index.scss';

.container {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;

  // section {
  //   padding: 20px;
  //   margin: 10px;
  //   background: var(--bg-content);
  //   border-radius: 10px;
  // }

  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-width: 540px;

  .intro {
    box-sizing: border-box;
    max-width: 100%;
    width: 50%;
    padding: 0px 24px 0px 36px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .show {
    background: rgb(249, 249, 249);
    width: 50%;
    display: flex;
    padding: 0px 24px 0px 36px;
    margin: 0px auto;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
}

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
