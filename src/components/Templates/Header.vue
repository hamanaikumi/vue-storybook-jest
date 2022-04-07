<template>
  <div class="header-wrapper">
    <div class="header-container">
      <router-link to="/">
        <img
          src="https://s-2337.resv.jp/accounts/s_2337/pict/1_156999777486987800_1_9k9oq.png"
          alt="TOPロゴ"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style scoped>
.header-wrapper {
  background-color: #ffff;
}
.header-container {
  height: 65px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
}

img {
  max-height: 35px;
}
</style>
