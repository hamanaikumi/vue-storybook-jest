<template>
  <div class="main-wrapper">
    <Header />
    <router-view />
    <Footer />
    <transition>
      <ScrollButton v-if="visible" />
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/Templates/Header.vue";
import Footer from "@/components/Templates/Footer.vue";
import ScrollButton from "@/components/Templates/ScrollButton.vue";
export default defineComponent({
  components: { Header, Footer, ScrollButton },

  setup() {
    let scrollY = ref(0);
    let visible = ref(false);
    /**
     * スクロールに合わせて、ボタンの表示非表示を切り替える.
     */
    const handleScroll = () => {
      scrollY.value = window.scrollY;
      if (!visible.value) {
        visible.value = window.scrollY > 100;
      } else if (window.scrollY < 90) {
        visible.value = !visible.value;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return {
      handleScroll,
      scrollY,
      visible,
    };
  },
});
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  background-color: #f5f5f5;
  margin: 0px;
}
/* アクティブ時 */
.v-leave-active,
.v-enter-active {
  transition: opacity 1s;
}
/* Enterの設定 */
.v-enter {
  opacity: 0;
}
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
/* Leaveの設定 */
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
</style>
