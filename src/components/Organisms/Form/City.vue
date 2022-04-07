<template>
  <div class="city-wrapper">
    <div class="title"><Condition /> <Title :text="titleText" /></div>
    <DefaultInput :type="type" :size="size" @onInput="emitInput" />
    <AttentionText :text="errorMessage" v-show="errorMessage" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import DefaultInput from "@/components/Atoms/Form/DefaultInput.vue";
import Condition from "@/components/Atoms/Form/Condition.vue";
import Title from "@/components/Atoms/Form/TitleText.vue";
import { defineComponent } from "vue";
import AttentionText from "@/components/Atoms/Form/AttentionText.vue";

export default defineComponent({
  name: "Email",
  components: {
    Condition,
    DefaultInput,
    Title,
    AttentionText,
  },
  props: {
    errorMessage: { type: String },
  },
  setup(_, context) {
    const titleText = "市区町村・番地";
    const type = "text";
    const size = "large";

    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue 市区町村・番地
     */
    const emitInput = (inputValue: string) => {
      context.emit("onInput", inputValue);
    };

    return {
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
.city-wrapper {
  padding-bottom: 16px;
}
</style>
