<template>
  <button :class="classes" @click="onClick" :style="style" type="button">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { reactive, computed, defineComponent } from "vue";
export default defineComponent({
  name: "DefaultButton",
  props: {
    label: { type: String, default: "Button", required: true },
    primary: {
      type: Boolean,
      default: true,
      required: true,
    },
    backgroundColor: { type: String },
  },
  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        button: true,
        "button-primary": props.primary,
        "button-secondary": !props.primary,
      })),
      // storyで変更できるようにstyle設定
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("emitClick");
      },
    };
  },
});
</script>

<style scoped>
.button {
  padding: 16px 40px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 3px;
  max-width: 300px;
  width: 100%;
  margin: 10px 0;
}
.button-primary {
  background: #2035b3;
  border: 1px solid #1b2b88;
  color: #ffffff;
}

.button-secondary {
  background: #e2e4e5;
  border: none;
  border: solid 1px #c2c7cb;
  color: #333333;
}
</style>
