<template>
  <div class="radio-wrapper">
    <input
      type="radio"
      id="radio"
      name="radio"
      @change="check"
      value="確認しました"
    />
    <label for="radio" class="radio">
      <span class="radio-text">{{ text }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "RadioButton",
  props: {
    text: {
      type: String,
      default: "I confirmed that",
    },
  },
  setup(props, context) {
    props = reactive(props);
    const check = () => {
      context.emit("checked", { checked: true });
    };
    return {
      check,
    };
  },
});
</script>

<style scoped>
.radio-wrapper {
  align-items: center;
  display: flex;
  margin: 8px 0;
}
input[type="radio"] {
  display: none;
}
.radio {
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  padding: 6px 30px 0 30px;
  position: relative;
  width: auto;
}
.radio::before {
  background: #fff;
  border: 2px solid #bbbb;
  border-radius: 50%;
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  left: 5px;
  margin-top: -8px;
  position: absolute;
  top: 50%;
}
.radio::after {
  background: #1a2c88;
  border-radius: 50%;
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  left: 11px;
  margin-top: -2px;
  opacity: 0;
  position: absolute;
  top: 50%;
}
input[type="radio"]:checked + .radio::after {
  opacity: 1;
}
.radio-text {
  margin-left: 6px;
  font-size: 13px;
  float: left;
}
</style>
