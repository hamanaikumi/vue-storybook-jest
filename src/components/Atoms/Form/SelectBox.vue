<template>
  <div class="select-wrapper">
    <div class="select-icon"></div>
    <select :disabled="disabled" @change="handleChange">
      <option disabled value="" selected>{{ value }}</option>
      <option v-for="option of options" :key="option.name" :value="option.name">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, PropType, ref } from "vue";
export default defineComponent({
  name: "SelectBox",
  props: {
    value: {
      type: String,
      default: "都道府県を選択",
    },
    options: {
      type: Array as PropType<any[]>,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const handleChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      context.emit("onChange", target.selectedOptions[0].value);
    };
    props = reactive(props);
    return {
      handleChange,
    };
  },
});
</script>
<style scoped>
select {
  appearance: none;
  padding: 8px;
  border: 1px solid #a9a9a9;
  width: 200px;
  z-index: 1;
}
select:focus {
  outline: none;
}
.select-wrapper {
  position: relative;
}
.select-icon {
  border-color: #666666 transparent transparent;
  border-style: solid;
  border-width: 0.45em 0.3em;
  content: "";
  display: block;
  height: 0;
  margin-top: -0.2em;
  position: absolute;
  left: 11em;
  top: 50%;
  width: 0;
}
</style>
