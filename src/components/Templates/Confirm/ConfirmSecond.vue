<template>
  <div class="confirm-title">
    <title-text :text="reservePerson" />
  </div>
  <ConfirmContent :title="nameTitle" :content="propsInfo.name" />
  <ConfirmContent :title="furiganaTitle" :content="propsInfo.furigana" />
  <ConfirmContent :title="emailTitle" :content="propsInfo.email" />
  <ConfirmContent :title="phoneTitle" :content="propsInfo.phone" />
  <ConfirmContent :title="prefectureTitle" :content="propsInfo.prefecture" />
  <ConfirmContent :title="cityTitle" :content="propsInfo.city" />
  <ConfirmContent :title="buildingTitle" :content="propsInfo.building" />
  <ConfirmContent :title="contactTitle" :content="propsInfo.contact" />
  <ConfirmContent :title="guestTitle" :content="propsInfo.guest" />
  <ConfirmContent :title="concentTitle" :content="concentText" />
  <div class="confirm-title">
    <TitleText :text="text" />
  </div>
  <Textarea :rows="7" :text="propsInfo.caption" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import ConfirmContent from "@/components/Organisms/Confirm/ConfirmContent.vue";
import TitleText from "@/components/Atoms/Form/TitleText.vue";
import { useStore } from "vuex";
import Textarea from "@/components/Atoms/Form/Textarea.vue";

export default defineComponent({
  name: "Confirm",
  components: {
    ConfirmContent,
    TitleText,
    Textarea,
  },

  setup() {
    const store = useStore();
    const reservePerson = "予約者情報";

    const nameTitle = "お名前";
    const furiganaTitle = "お名前（フリガナ）";
    const emailTitle = "メールアドレス";
    const phoneTitle = "電話番号";
    const prefectureTitle = "都道府県";
    const cityTitle = "市区町村・番地";
    const buildingTitle = "建物名など";
    const contactTitle = "希望連絡方法";
    const guestTitle = "ご来場人数";
    const text = "ご要望・ご質問";

    const concentTitle = "「お客さまの個人情報の利用目的」をご確認ください。";
    const concentText = "「お客さまの個人情報の利用目的」を確認し同意します。";

    /**
     * 予約者情報を返す.
     * @returns 予約者情報
     */
    const propsInfo = computed(() => {
      return store.getters.getReserveInfo;
    });

    return {
      reservePerson,
      propsInfo,
      nameTitle,
      furiganaTitle,
      emailTitle,
      phoneTitle,
      prefectureTitle,
      cityTitle,
      buildingTitle,
      contactTitle,
      guestTitle,
      concentTitle,
      concentText,
      text,
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
