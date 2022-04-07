<template>
  <div class="confirm-wrapper">
    <div class="confirm-container">
      <title-text class="title" :text="confirmTitle" />
      <ConfirmFirst />
      <ConfirmSecond />
      <div class="confirm-button">
        <DefaultButton :primary="false" :label="back" @emitClick="backPage" />
        <DefaultButton :primary="true" :label="next" @emitClick="submit" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TitleText from "@/components/Atoms/Form/TitleText.vue";
import ConfirmFirst from "@/components/Templates/Confirm/ConfirmFirst.vue";
import router from "@/router";
import { defineComponent } from "vue";
import ConfirmSecond from "../components/Templates/Confirm/ConfirmSecond.vue";
import DefaultButton from "@/components/Atoms/Form/DefaultButton.vue";
export default defineComponent({
  components: { ConfirmSecond, ConfirmFirst, TitleText, DefaultButton },
  setup() {
    const confirmTitle = "最終内容確認";
    const back = "前の画面に戻る";
    const next = "完了する";
    /**
     * storeのデータを初期化する.
     */
    const submit = () => {
      window.localStorage.removeItem("vuex");
      console.log("完了");
    };
    /**
     * 前のページに戻る.
     */
    const backPage = () => {
      router.back();
    };
    return {
      confirmTitle,
      back,
      next,
      submit,
      backPage,
    };
  },
});
</script>
<style scoped>
.title {
  border-bottom: 2px solid #1a2c88;

  margin: 25px 0 8px 0;
}
.confirm-wrapper {
  margin: 24px auto;
  max-width: 960px;
  padding: 0;
  position: relative;
}

.confirm-container {
  background-color: #ffff;
  padding: 16px;
}

.confirm-caption {
  background-color: #eeee;
  padding: 4px;
  margin-bottom: 8px;
}
.confirm-button {
  display: flex;
  justify-content: space-around;
}
</style>
