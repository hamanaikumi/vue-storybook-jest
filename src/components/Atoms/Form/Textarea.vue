<template>
  <textarea :rows="rows" @input="emitInput" v-model="textArea"></textarea>
</template>

<script lang="ts">
import { reactive, defineComponent, ref } from "vue";
export default defineComponent({
  name: "Textarea",
  props: {
    // size
    rows: {
      type: Number,
    },
    text: {
      type: String,
    },
  },
  setup(props, context) {
    props = reactive(props);
    const textArea = ref(props.text);
    // 入力した値を取得しemitに渡す
    const emitInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      context.emit("onInput", target.value);
    };
    return { emitInput, textArea };
  },
});
</script>

<style scoped>
textarea {
  width: 100%;
  border: 1px solid #a9a9a9;
  padding: 8px;
  box-sizing: border-box;
}

textarea:focus {
  outline: none;
}
</style>
