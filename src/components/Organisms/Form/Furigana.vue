<template>
  <div class="furigana-wrapper">
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
import AttentionText from "@/components/Atoms/Form/AttentionText.vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Furigana",
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
    props = reactive(props);
    //  property
    const titleText = "お名前（フリガナ）";
    const sampleText = "例 ヨヤクタロウ";
    const type = "text";

    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue 名前（ふりがな）
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
.furigana-wrapper {
  padding-bottom: 16px;
}
</style>
