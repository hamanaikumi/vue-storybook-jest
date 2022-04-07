<template>
  <div class="concent-wrapper">
    <div class="title">
      <Condition />
      <Title :text="titleText" />
    </div>
    <RadioButton :text="radioButtonText" @checked="emitChecked" />
    <SampleText :text="sampleText" />
    <AttentionText :text="errorMessage" v-show="errorMessage" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Condition from "@/components/Atoms/Form/Condition.vue";
import Title from "@/components/Atoms/Form/TitleText.vue";
import RadioButton from "@/components/Atoms/Form/RadioButton.vue";
import SampleText from "@/components/Atoms/Form/SampleText.vue";
import { defineComponent } from "vue";
import AttentionText from "@/components/Atoms/Form/AttentionText.vue";

export default defineComponent({
  name: "ConcentForm",
  components: {
    Condition,
    Title,
    RadioButton,
    SampleText,
    AttentionText,
  },
  props: {
    errorMessage: { type: String },
  },
  setup(_, context) {
    const titleText = "「お客さまの個人情報の利用目的」をご確認ください。";
    const type = "text";
    const size = "large";

    const radioButtonText =
      "「お客さまの個人情報の利用目的」を確認し同意します";
    const sampleText = "※個人情報の取扱いについてはこちら";

    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue チェックしたかどうかの判定
     */
    const emitChecked = (status: any) => {
      context.emit("check", status);
    };
    return {
      type,
      titleText,
      size,
      radioButtonText,
      sampleText,
      emitChecked,
    };
  },
});
</script>
<style scoped>
.title {
  display: flex;
  margin-bottom: 4px;
}

.concent-wrapper {
  padding-bottom: 16px;
}
</style>
