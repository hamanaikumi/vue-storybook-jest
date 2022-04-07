<template>
  <Table :datas="areaTable.data1" @giveData="getData" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Table from "@/components/Atoms/Top/Table.vue";
import { useStore } from "vuex";
import TableType from "@/models/table";

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    const store = useStore();
    const areaTable = store.getters.getAreaTable;

    /**
     * 選択した値をstoreに保存する.
     * @param selectValue エリア
     */
    const getData = (selectValue: TableType) => {
      store.commit("setReserveArea", selectValue.value);
      store.commit("setReserveAreaId", selectValue.id);
    };

    return {
      areaTable,
      getData,
    };
  },
});
</script>
<style scoped>
.form-caption {
  background-color: #eeee;
  padding: 4px;
  margin-bottom: 8px;
}
.form-button {
  display: flex;
  justify-content: space-around;
}
</style>
