<template>
  <div class="phone-wrapper">
    <div class="title"><Condition /> <Title :text="titleText" /></div>
    <DefaultInput :type="type" :size="size" @onInput="emitInput" />
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
  name: "Phone",
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
    const titleText = "電話番号";
    const sampleText = "※- （ハイフン）なしで記入　11桁以内";
    const type = "tel";
    const size = "small";

    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue 電話番号
     */
    const emitInput = (inputValue: string) => {
      context.emit("onInput", inputValue);
    };

    return {
      sampleText,
      type,
      titleText,
      size,
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

.phone-wrapper {
  padding-bottom: 16px;
}
</style>
