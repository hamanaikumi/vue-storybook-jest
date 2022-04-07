<template>
  <div class="name-wrapper">
    <div class="title-head"><Title :text="title" /></div>
    <div class="confirm-content">{{ content }}</div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Title from "@/components/Atoms/Form/TitleText.vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "ConfirmContent",
  components: {
    Title,
  },
  props: {
    content: {
      type: String,
    },
    title: {
      type: String,
    },
  },

  setup(props) {
    props = reactive(props);
  },
});
</script>
<style scoped>
.title-head {
  border-left: 3px solid #2035b3;
  margin-bottom: 5px;
  margin-top: 8px;
}
.confirm-content {
  font-size: 14px;
  padding-bottom: 8px;
}
</style>
