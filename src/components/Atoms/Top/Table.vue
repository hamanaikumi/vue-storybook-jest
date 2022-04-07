<template>
  <table>
    <tr v-for="(data, index) of showData" :key="index">
      <td
        :class="['td-area', { 'td-area-active': data.isActive }]"
        @click="setData(index)"
      >
        <span>{{ data.value }}</span>
      </td>
    </tr>
  </table>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, ref, watch } from "vue";
import Table from "@/models/table";

export default defineComponent({
  name: "Table",
  props: {
    datas: {
      type: Array as PropType<Table[]>,
      default: () => [
        { id: 1, value: "data1", isActive: true },
        { id: 2, value: "data2", isActive: false },
        { id: 3, value: "data3", isActive: false },
      ],
    },
  },

  setup(props, context) {
    props = reactive(props);

    let showData = ref(props.datas);
    let isActive = ref(false);

    /**
     * クリックしたテーブルをactive状態にする。
     */
    const setData = (index: number) => {
      for (let data of showData.value) {
        data.isActive = false;
        showData.value[index].isActive = true;
      }
      context.emit("giveData", showData.value[index]);
    };

    // props変更時に発火
    watch(
      () => props.datas,
      () => {
        showData.value = props.datas;
      }
    );

    return {
      isActive,
      setData,
      showData,
    };
  },
});
</script>
<style scoped>
table {
  /* テーブルの隙間を無くす */
  border-collapse: collapse;
  border-spacing: 0;

  border-color: grey;
  width: 100%;
  font-size: 13px;
}
.td-area {
  cursor: pointer;
  border-bottom: 1px solid #eeeeee;
  clear: both;
  overflow: hidden;
  padding: 5px 10px 5px 24px;
}
.td-area:hover {
  background: #e6f2ff;
}

.td-area-active {
  background: #e6f2ff;
  /* font-weight: bold; */
}
</style>
