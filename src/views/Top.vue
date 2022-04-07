<template>
  <div class="top-wrapper">
    <div class="top-container">
      <img
        src="https://s-2337.resv.jp/accounts/s_2337/pict/1_156999909472216100_1_rkwsm.jpeg"
        alt="TOPイメージ"
      />
      <title-text class="title" :text="areaTitle" />
      <area-table />
      <title-text class="title" :text="shopTitle" />
      <shop-table />
      <title-text class="title" :text="dateTitle" />
      <calender />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AreaTable from "@/components/Organisms/Top/AreaTable.vue";
import ShopTable from "@/components/Organisms/Top/ShopTable.vue";
import Calender from "@/components/Organisms/Top/Calender.vue";
import TitleText from "@/components/Atoms/Form/TitleText.vue";

export default defineComponent({
  name: "Top",
  components: {
    AreaTable,
    ShopTable,
    TitleText,
    Calender,
  },

  setup() {
    const areaTitle = "エリアを選択";
    const shopTitle = "モデルハウスを選択";
    const dateTitle = "ご来場日時を選択";

    return {
      areaTitle,
      shopTitle,
      dateTitle,
    };
  },
});
</script>
<style scoped>
.top-wrapper {
  margin: 24px auto;
  max-width: 960px;
  padding: 0;
  position: relative;
}
.top-container {
  background-color: #ffff;
  padding: 16px;
}
img {
  height: auto;
  max-width: 100%;
}
.title {
  border-bottom: 2px solid #1a2c88;
  margin-top: 24px;
}
</style>
