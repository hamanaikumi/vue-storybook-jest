<template>
  <div class="email-wrapper">
    <div class="title"><Condition /> <Title :text="titleText" /></div>
    <DefaultInput :type="type" @onInput="emitInput" />
    <SampleText :text="sampleText" />
    <AttentionText :text="errorMessage" v-show="errorMessage" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import DefaultInput from "@/components/Atoms/Form/DefaultInput.vue";
import Condition from "@/components/Atoms/Form/Condition.vue";
import SampleText from "@/components/Atoms/Form/SampleText.vue";
import Title from "@/components/Atoms/Form/TitleText.vue";
import { defineComponent } from "vue";
import AttentionText from "@/components/Atoms/Form/AttentionText.vue";

export default defineComponent({
  name: "Email",
  components: {
    Condition,
    DefaultInput,
    SampleText,
    Title,
    AttentionText,
  },
  props: {
    errorMessage: { type: String },
  },
  setup(props, context) {
    const titleText = "メールアドレス";
    const sampleText = "例 sweden@swedenhouse.co.jp";
    const type = "email";

    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue メールアドレス
     */
    const emitInput = (inputValue: string) => {
      context.emit("onInput", inputValue);
    };

    return {
      sampleText,
      type,
      titleText,
      emitInput,
    };
  },
});
</script>
<style scoped>
.title {
  display: flex;
  margin-bottom: 4px;
}
.email-wrapper {
  padding-bottom: 16px;
}
</style>
