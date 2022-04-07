<template>
  <div class="scroll">
    <a href="#app"
      ><img
        src="https://s-2337.resv.jp/image/common/pagetop.gif"
        alt="ページ上部に戻る"
    /></a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScrollButton",
});
</script>
<style scoped>
.scroll {
  bottom: 0;
  position: fixed;
  right: 10px;
  z-index: 10;
  padding: 0;
}
</style>
