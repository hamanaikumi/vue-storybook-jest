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
  bottom: 2px;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 0 4px;
}
</style>
