<template>
  <div class="attention-wrapper">
    <p>入力内容に不足または誤りがあります。</p>
    <p>入力項目の赤字部分の内容を再度入力してください。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AttentionBox",
});
</script>

<style scoped>
.attention-wrapper {
  background-color: #f9dada;
  border: 1px solid #f3b8b8;
  border-radius: 5px;
  color: #cc2c29;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  line-height: 180%;
}
</style>
