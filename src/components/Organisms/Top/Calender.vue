<template>
  <table class="table-wrapper">
    <tr>
      <th></th>
      <th v-for="(date, index) of dates" :key="index">
        <span>{{ date }}</span>
      </th>
    </tr>
    <tr></tr>
    <tr>
      <td>10:00~</td>
      <td
        class="table-link"
        v-for="(reserveDate, index) of reserveDateArray"
        :key="index"
      >
        <div @click="setReserveDate([reserveDate.date, 'early'])">
          <span v-if="!reserveDate.early">○</span>
        </div>

        <span v-if="reserveDate.early">✖️</span>
      </td>
    </tr>
    <tr>
      <td>13:00~</td>
      <td
        class="table-link"
        v-for="(reserveDate, index) of reserveDateArray"
        :key="index"
      >
        <div @click="setReserveDate([reserveDate.date, 'middle'])">
          <span v-if="!reserveDate.middle">○</span>
        </div>

        <span v-if="reserveDate.middle">✖️</span>
      </td>
    </tr>
    <tr>
      <td>15:00~</td>
      <td
        class="table-link"
        v-for="(reserveDate, index) of reserveDateArray"
        :key="index"
      >
        <div @click="setReserveDate([reserveDate.date, 'late'])">
          <span v-if="!reserveDate.late">○</span>
        </div>

        <span v-if="reserveDate.late">✖️</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, onBeforeMount, ref } from "vue";
import { format, addDays } from "date-fns";
import ja from "date-fns/locale/ja";
import router from "@/router";
import ReserveDate from "@/models/reserveDate";
export default defineComponent({
  name: "Calender",
  setup() {
    const store = useStore();
    let dates = ref<string[]>([]);
    let reserveDateArray = ref<ReserveDate[]>([]);
    /**
     * storeから予約状況カレンダーを取得後、パースして画面表示する.
     */
    const createCalender = () => {
      let calender: Array<ReserveDate[]> = store.getters.getReservation;
      // proxy をパース
      const parseCalender = JSON.parse(JSON.stringify(calender));
      let now = new Date();
      // 明日から一週間後までのカレンダーを作成
      for (let i = 1; i < 8; i++) {
        let reserveDateDay = addDays(now, i);
        let formatReserveDateDay = format(reserveDateDay, "M/d(E)", {
          locale: ja,
        });

        dates.value.push(formatReserveDateDay);

        for (let data of parseCalender) {
          if (formatReserveDateDay.includes(data.date)) {
            reserveDateArray.value.push(data);
          }
        }
      }
    };

    /**
     * テーブルをクリックしたら対応する日付、時間をstoreに格納する.
     * @param array 日付、時間が格納された配列
     */
    const setReserveDate = (array: Array<string>) => {
      store.commit("setReserveDate", array[0]);
      store.commit("setReserveTime", array[1]);
      router.push("/Form");
    };

    onBeforeMount(() => {
      createCalender();
    });
    return {
      dates,
      reserveDateArray,
      setReserveDate,
      createCalender,
    };
  },
});
</script>
<style scoped>
.table-wrapper {
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
  border: 1px solid #dddddd;
  width: 100%;
  margin-top: 24px;
}

th {
  font-size: 0.5rem;
  border: 1px solid #dddddd;
  padding: 4px;
}

td {
  font-size: 0.5rem;
  border: 1px solid #dddddd;
  padding: 6px;
}
.routerLink {
  text-decoration: none;
}

.table-link:hover {
  cursor: pointer;
  background: #e6f2ff;
}
</style>
