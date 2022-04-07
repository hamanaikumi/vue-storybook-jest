<template>
  <div class="building-wrapper">
    <div class="title">
      <Condition :condition="condition" :text="conditionalText" />
      <Title :text="titleText" />
    </div>
    <DefaultInput :type="type" :size="size" @onInput="emitInput" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import DefaultInput from "@/components/Atoms/Form/DefaultInput.vue";
import Condition from "@/components/Atoms/Form/Condition.vue";
import Title from "@/components/Atoms/Form/TitleText.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Email",
  components: {
    Condition,
    DefaultInput,
    Title,
  },
  setup(_, context) {
    const titleText = "建物名など";
    const type = "text";
    const size = "large";
    const condition = "optional";
    const conditionalText = "任意";

    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue 建物名など
     */
    const emitInput = (inputValue: string) => {
      context.emit("onInput", inputValue);
    };

    return {
      type,
      titleText,
      size,
      condition,
      conditionalText,
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
.building-wrapper {
  padding-bottom: 16px;
  max-width: 100%;
}
</style>
