<template>
  <Table :datas="filtered" @giveData="getData" />
</template>

<script lang="ts">
import { reactive, ref, watch } from "vue";
import Table from "@/components/Atoms/Top/Table.vue";
import { computed, defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";
import TableType from "@/models/table";

export default defineComponent({
  components: {
    Table,
  },

  setup(props, context) {
    props = reactive(props);
    const store = useStore();

    const shopTable = store.getters.getShopTable;

    // 初期表示
    let filtered = ref<TableType[]>([]);
    if (store.getters.getReserveAreaId === 1) {
      filtered.value = shopTable.data1;
    } else if (store.getters.getReserveAreaId === 2) {
      filtered.value = shopTable.data2;
    }

    // props変更時に発火
    watch(
      () => store.getters.getReserveAreaId,
      () => {
        if (store.getters.getReserveAreaId === 1) {
          filtered.value = shopTable.data1;
        } else if (store.getters.getReserveAreaId === 2) {
          filtered.value = shopTable.data2;
        }
      }
    );

    /**
     * 選択した値をstoreに保存する.
     * @param selectValue 店舗
     */
    const getData = (selectValue: TableType) => {
      store.commit("setReserveShop", selectValue.value);
    };
    return {
      filtered,
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
