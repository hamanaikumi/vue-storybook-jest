<template>
  <div class="confirm-title">
    <title-text :text="reserveContents" />
  </div>
  <ConfirmContent :title="dateTitle" :content="propsDate" />
  <ConfirmContent :title="timeTitle" :content="propsTime" />
  <ConfirmContent :title="areaTitle" :content="propsArea" />
  <ConfirmContent :title="shopTitle" :content="propsShop" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import ConfirmContent from "@/components/Organisms/Confirm/ConfirmContent.vue";
import TitleText from "@/components/Atoms/Form/TitleText.vue";
import { useStore } from "vuex";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";

export default defineComponent({
  name: "ConfirmSecond",
  components: {
    ConfirmContent,
    TitleText,
  },

  setup() {
    const store = useStore();
    let reserveDate: PropsInfo = store.getters.getReserveDate;

    type PropsInfo = {
      date: string;
      time: string;
      area: string;
      shop: string;
    };

    let propsDate = ref("");
    let propsTime = ref("");
    let propsArea = ref("");
    let propsShop = ref("");

    const reserveContents = "予約内容";
    const dateTitle = "予約日";
    const timeTitle = "時間";
    const areaTitle = "エリア";
    const shopTitle = "モデルハウス";

    /**
     * dateのフォーマットを変更する.
     */
    const createPropsDate = () => {
      const year = new Date().getFullYear();
      const dateArray = reserveDate.date.split("/");
      const month = Number(dateArray[0]) - 1;
      const day = Number(dateArray[1]);
      const formatDate = new Date(year, month, day);

      propsDate.value = format(formatDate, "yyyy/M/d(E)", {
        locale: ja,
      });
    };

    /**
     * timeのフォーマットを変更する.
     */
    const createPropsTime = () => {
      if (reserveDate.time === "early") {
        propsTime.value = "10:00";
      } else if (reserveDate.time === "middle") {
        propsTime.value = "13:00";
      } else if (reserveDate.time === "late") {
        propsTime.value = "15:00";
      }
    };

    /**
     * 予約エリアを格納する.
     */
    const createPropsArea = () => {
      propsArea.value = reserveDate.area;
    };

    /**
     * 予約店舗を格納する.
     */
    const createPropsShop = () => {
      propsShop.value = reserveDate.shop;
    };

    onBeforeMount(() => {
      createPropsDate();
      createPropsTime();
      createPropsArea();
      createPropsShop();
    });

    return {
      reserveContents,
      propsDate,
      propsTime,
      propsArea,
      propsShop,
      dateTitle,
      timeTitle,
      areaTitle,
      shopTitle,
    };
  },
});
</script>
<style scoped>
.confirm-title {
  background-color: #eeee;
  padding: 4px;
  margin: 25px 0 8px 0;
}
</style>
