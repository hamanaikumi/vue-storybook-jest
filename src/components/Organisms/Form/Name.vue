<template>
  <div class="name-wrapper">
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
import AttentionText from "@/components/Atoms/Form/AttentionText.vue";
import Title from "@/components/Atoms/Form/TitleText.vue";
import { reactive, defineComponent } from "vue";

export default defineComponent({
  name: "Name",
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
    const titleText = "お名前";
    const sampleText = "例 予約太郎";
    const type = "text";

    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue 名前
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
.name-wrapper {
  padding-bottom: 16px;
}
</style>
