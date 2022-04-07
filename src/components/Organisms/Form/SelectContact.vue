<template>
  <div class="contact-wrapper">
    <div class="title"><Condition /> <Title :text="titleText" /></div>
    <SelectBox :options="options" @onChange="emitChange" :value="contact" />
    <AttentionText :text="errorMessage" v-show="errorMessage" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Condition from "@/components/Atoms/Form/Condition.vue";
import Title from "@/components/Atoms/Form/TitleText.vue";
import SelectBox from "@/components/Atoms/Form/SelectBox.vue";
import AttentionText from "@/components/Atoms/Form/AttentionText.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectContact",
  components: {
    Condition,
    Title,
    SelectBox,
    AttentionText,
  },
  props: {
    errorMessage: { type: String },
  },
  setup(_, context) {
    const titleText = "希望連絡方法";
    // selectboxのoption
    const options = [
      {
        code: 1,
        name: "メール",
      },
      {
        code: 2,
        name: "電話",
      },
      {
        code: 3,
        name: "どちらでも",
      },
    ];

    const contact = "連絡方法を選択";
    /**
     * 入力した値を取得しemitに渡す
     * @param inputValue 連絡方法
     */
    const emitChange = (name: string) => {
      context.emit("onSelect", name);
    };

    return {
      titleText,
      options,
      emitChange,
      contact,
    };
  },
});
</script>
<style scoped>
.title {
  display: flex;
  margin-bottom: 4px;
}
.contact-wrapper {
  padding-bottom: 16px;
}
</style>
