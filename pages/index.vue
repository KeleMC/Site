<script setup lang="tsx">
import { ref } from 'vue'
import Swiper from '~/components/Swiper.vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { useClipboard } from '@vueuse/core'

interface LogList {
  title: string
  url: string
  date: string
}

const qqNumber = ref('1067977130')
const serveraddress = ref('play.kelemc.fun')

const { copy, isSupported } = useClipboard()

function copyToClipboard(copyText: string) {
  try {
    if (!isSupported) {
      MessagePlugin.error('浏览器剪贴板不支持')
      return
    }
    copy(copyText)
      .then(() => {
        MessagePlugin.success(copyText + ' 已复制到剪切板')
      })
      .catch(() => {
        MessagePlugin.error('复制失败,请重试')
      })
  } catch (err) {
    alert('未知错误' + err)
    console.log(err)
  }
}
</script>

<template>
  <div id="root" class="container">
    <div class="intro">
      <div class="content">
        <t-space size="0" direction="vertical" class="title">
          <img src="/banner.png" alt="KeleMC Logo" />
          <h1>欢迎来到👏KeleMC &lt;3</h1>
          <p>「可勒世界」满足<b>探索欲</b>与<b>创造性</b>，只为<b>快乐</b>~</p>
        </t-space>

        <t-space size="0" direction="vertical" class="feature">
          <p>➡️原汁原味，保持 Minecraft 的原生玩法</p>
          <p>➡️养老生存，在安全的地方舒适种田</p>
          <p>➡️红石科技，最大限度包容自动化</p>
          <p>➡️来点刺激，增设精英精英怪物和地牢满足探险</p>
          <p>➡️mcMMo，一键砍树&狂暴挖坑&手刃凋零</p>
          <p>➡️领地保护，安全的居所与财产</p>
          <p>➡️训练宠物，会飞的狼&小鸡骑士</p>
          <p>➡️多币种经济，宽松的货币政策&自由♂♀交易</p>
          <p>➡️核心保护，任何违反规则的行为将会被严惩</p>
          <p>➡️更多特殊能力，飞行&远离危险...</p>
          <p>➡️更多物品，死亡保护&捕获生物...</p>
          <p>
            <a target="_blank" href="http://wiki.kelemc.fun"
              >更多内容<t-icon class="icon" name="chevron-right"
            /></a>
          </p>
          <t-divider></t-divider>
          <p>
            <b>进入游戏[1.20.4]👉{{ serveraddress }}</b>
            <t-icon
              class="icon icon-click"
              name="copy"
              @click="copyToClipboard(serveraddress)"
            />
          </p>
          <p>
            <a target="_blank" href="https://qm.qq.com/q/Y1Dg8fsFUY"
              >QQ群🐧{{ qqNumber }}</a
            >
            <t-icon
              class="icon icon-click"
              name="copy"
              @click="copyToClipboard(qqNumber)"
            />
          </p>
        </t-space>

        <t-divider />
        <div class="log"></div>
        <t-space class="menu">
          <a class="menu-item" target="_blank" href="https://wiki.kelemc.fun"
            >Wiki 文档
            <t-icon class="icon" name="chevron-right" />
          </a>
          <a
            class="menu-item"
            target="_blank"
            href="https://www.kookapp.cn/app/invite/m8dAVg"
            >KOOK 频道
            <t-icon class="icon" name="chevron-right" />
          </a>
        </t-space>
      </div>
      <footer class="footer">
        <p>© 2024 KeleMC. All Rights Reserved.</p>
        <p>
          Not an official Minecraft product. Not approved by or associated with
          Mojang.
        </p>
        <span>
          <a target="_blank" href="https://beian.miit.gov.cn" rel="noreferrer">
            粤ICP备2024192097号-1
          </a>
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002002681"
            rel="noreferrer"
            target="_blank"
          >
            <img class="beian-logo" src="/beianLogo.png" alt="beian" />
            粤公网安备44030002002681
          </a>
        </span>
      </footer>
    </div>
    <div class="show">
      <!-- <Swiper /> -->
      <p>建设中...</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/css/normalize.css';
@import '~/assets/scss/index.scss';

.container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-width: 540px;

  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 6px;
  }
}

.intro {
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0px 24px 0px 36px;
  margin: 0px auto;
  max-width: 100%;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;

  @media screen and (min-width: 800px) {
    width: 50%;
  }
  @media screen and (min-width: 1600px) {
    width: 25%;
  }
}

.show {
  background: rgb(249, 249, 249);
  width: 0%;
  display: none;
  margin: 0px auto;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  @media screen and (min-width: 800px) {
    width: 50%;
    display: flex;
  }

  @media screen and (min-width: 1600px) {
    width: 75%;
    display: flex;
  }
}

.content {
  display: block;
  margin: auto 0px;
  padding: 96px 0px auto;

  .title {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: flex-start;

    img {
      max-width: 800px;
      display: block;
      height: 80px;
    }
  }

  .feature,
  .log {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: flex-start;

    p {
      margin-bottom: 5px;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: flex-start;

    .menu-item {
      color: rgba(0, 0, 0, 0.6);
      font-weight: 500;
      font-size: 19px;
      line-height: 27px;
      padding: 12px 6px;
      display: flex;
      justify-content: left;
      align-items: center;

      &:hover {
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
}

.icon {
  width: 1em;
  height: 1em;
  color: rgba(0, 0, 0, 0.3);
  margin-left: 5px;
}

.icon-click {
  cursor: pointer;
}

.footer {
  display: block;
  font-weight: 400;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.3);
  margin: 0px 0px 20px;
  text-align: left;
  line-height: 10px;

  a {
    color: rgba(0, 0, 0, 0.25);
    display: inline-block;
    text-decoration: none;
    font-size: 11px;
  }

  .beian-logo {
    display: inline;
    margin: 0 5px;
    width: 15px;
  }
}
</style>
