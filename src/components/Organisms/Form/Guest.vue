<template>
  <div class="guest-wrapper">
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
  name: "Guest",
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
  setup(_, context) {
    const titleText = "ご来場人数";
    const sampleText = "例 大人2名 子供2名";
    const type = "text";

    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue 来場人数
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

.guest-wrapper {
  padding-bottom: 16px;
}
</style>
