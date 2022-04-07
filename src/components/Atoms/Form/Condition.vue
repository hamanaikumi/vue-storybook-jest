<template>
  <div :class="classes">
    <p class="text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent } from "vue";
export default defineComponent({
  name: "Condition",
  props: {
    condition: {
      type: String,
      default: "required",
    },
    text: {
      type: String,
      default: "必須",
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`condition-${props.condition}`]: true,
      })),
    };
  },
});
</script>
<style scoped>
.condition-required {
  padding: 0 4px;
  background-color: #d17665;
  color: white;
  font-size: 11px;
  border-radius: 3px;
  /* 文字中央揃え */
  display: table;
  font-weight: bold;
}
.condition-optional {
  padding: 0 4px;
  background-color: #ecb666;
  color: white;
  font-size: 11px;
  border-radius: 3px;
  /* 文字中央揃え */
  display: table;
  font-weight: bold;
}
.text {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
</style>
