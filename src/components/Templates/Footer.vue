<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-left">
        <router-link to="/">
          <img
            src="https://s-2337.resv.jp/accounts/s_2337/pict/1_156999777531721900_1_nqkft.png"
            alt="ホーム"
          />
        </router-link>
      </div>
      <div class="footer-right">
        <span
          >このサイトはプライバシー保護のためSSL暗号化通信を使用しています。</span
        >
      </div>
    </div>
    <div class="copyright">
      <span>Copyright 2000-2022 xxx Co.,Ltd. All Rights Reserved. </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style scoped>
.footer-wrapper {
  background-color: #666;
}
.footer-container {
  height: 65px;
  display: flex;
  margin: 0 auto;
  padding: 8px;
}
.footer-left {
  align-items: center;
  flex-basis: 50%;
  padding: 8px;
}
.footer-right {
  flex-basis: 50%;
  padding: 8px;
  align-items: flex-end;
  color: #ffffff;
  display: flex;
  font-size: 10px;
  justify-content: flex-end;
  padding-right: 24px;
}
img {
  max-height: 29px;
  max-width: 150px;
}

.copyright {
  background: #000000;
  color: #ffffff;
  font-size: 10px;
  padding: 4px 0;
  text-align: center;
}
</style>
