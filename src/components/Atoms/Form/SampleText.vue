<template>
  <p class="sample-text">{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "SampleText",
  props: {
    text: {
      type: String,
      default: "例 これは例文です",
    },
  },
  setup(props) {
    props = reactive(props);
  },
});
</script>

<style scoped>
.sample-text {
  color: #666666;
  font-size: 12px;
  margin: 0 0 0 5px;
}
</style>
