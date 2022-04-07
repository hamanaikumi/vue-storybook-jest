<template>
  <p class="title-text">{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Title",
  props: {
    text: {
      type: String,
      default: "これは例文です",
    },
  },
  setup(props) {
    props = reactive(props);
  },
});
</script>

<style scoped>
.title-text {
  color: #ff0000;
  font-weight: bold;
  font-size: 14px;
  margin: 0;
}
</style>
