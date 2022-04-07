<template>
  <div class="form-wrapper">
    <div class="form-container">
      <title-text class="title" :text="formTitle" />
      <AttentionBox v-if="errorFlag" />
      <Name @onInput="inputName" :errorMessage="error.nameError" />
      <Furigana @onInput="inputFurigana" :errorMessage="error.furiganaError" />
      <Email @onInput="inputEmail" :errorMessage="error.emailError" />
      <Phone @onInput="inputPhone" :errorMessage="error.phoneError" />
      <SelectPrefecture
        @onSelect="inputPrefecture"
        :errorMessage="error.prefectureError"
      />
      <City @onInput="inputCity" :errorMessage="error.cityError" />
      <Building @onInput="inputBuilding" />
      <SelectContact
        @onSelect="inputContact"
        :errorMessage="error.contactError"
      />
      <Guest @onInput="inputGuest" :errorMessage="error.guestError" />
      <ConcentForm @check="inputConcent" :errorMessage="error.concentError" />
      <div class="form-caption">
        <TitleText :text="text" />
      </div>
      <Textarea :rows="7" @onInput="inputCaption" />
      <div class="form-button">
        <DefaultButton :primary="false" :label="back" @emitClick="backPage" />
        <DefaultButton :primary="true" :label="next" @emitClick="submit" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Name from "@/components/Organisms/Form/Name.vue";
import Furigana from "@/components/Organisms/Form/Furigana.vue";
import Email from "@/components/Organisms/Form/Email.vue";
import Phone from "@/components/Organisms/Form/Phone.vue";
import SelectPrefecture from "@/components/Organisms/Form/SelectPrefecture.vue";
import City from "@/components/Organisms/Form/City.vue";
import Building from "@/components/Organisms/Form/Building.vue";
import SelectContact from "@/components/Organisms/Form/SelectContact.vue";
import Guest from "@/components/Organisms/Form/Guest.vue";
import ConcentForm from "@/components/Organisms/Form/ConcentForm.vue";

import TitleText from "@/components/Atoms/Form/TitleText.vue";
import Textarea from "@/components/Atoms/Form/Textarea.vue";
import DefaultButton from "@/components/Atoms/Form/DefaultButton.vue";
import AttentionBox from "@/components/Atoms/Form/AttentionBox.vue";
import { defineComponent, ref } from "vue";
import router from "@/router";
import { useStore } from "vuex";
import Reserve from "@/models/reserve";

export default defineComponent({
  components: {
    Name,
    Furigana,
    Email,
    Phone,
    SelectPrefecture,
    City,
    Building,
    SelectContact,
    Guest,
    ConcentForm,
    TitleText,
    Textarea,
    DefaultButton,
    AttentionBox,
  },
  setup() {
    const store = useStore();
    // property
    const text = "ご要望・ご質問";
    const back = "前の画面に戻る";
    const next = "次へ進む";
    const formTitle = "予約者情報入力";
    const error = ref({
      nameError: "",
      furiganaError: "",
      contactError: "",
      prefectureError: "",
      emailError: "",
      phoneError: "",
      cityError: "",
      guestError: "",
      concentError: "",
    });
    // emitで取得した入力値
    let inputNameValue = ref("");
    let inputFuriganaValue = ref("");
    let inputContactValue = ref("");
    let inputPrefectureValue = ref("");
    let inputEmailValue = ref("");
    let inputPhoneValue = ref("");
    let inputCityValue = ref("");
    let inputBuildingValue = ref("");
    let inputGuestValue = ref("");
    let inputConcentValue = ref(false);
    let inputCaptionValue = ref("");
    let errorFlag = ref(false);

    // 入力した値を変数に格納するメソッド
    const inputName = (inputValue: string) => {
      inputNameValue.value = inputValue;
    };

    const inputFurigana = (inputValue: string) => {
      inputFuriganaValue.value = inputValue;
    };

    const inputContact = (inputValue: string) => {
      inputContactValue.value = inputValue;
    };

    const inputPrefecture = (inputValue: string) => {
      inputPrefectureValue.value = inputValue;
    };
    const inputEmail = (inputValue: string) => {
      inputEmailValue.value = inputValue;
    };
    const inputPhone = (inputValue: string) => {
      inputPhoneValue.value = inputValue;
    };
    const inputCity = (inputValue: string) => {
      inputCityValue.value = inputValue;
    };
    const inputBuilding = (inputValue: string) => {
      inputBuildingValue.value = inputValue;
    };
    const inputGuest = (inputValue: string) => {
      inputGuestValue.value = inputValue;
    };
    const inputConcent = (inputValue: any) => {
      if (inputValue.checked) {
        inputConcentValue.value = true;
      } else {
        inputConcentValue.value = false;
      }
    };
    const inputCaption = (inputValue: string) => {
      inputCaptionValue.value = inputValue;
    };
    /**
     * バリデーションチェックをする.
     */
    const checkValidation = () => {
      // エラー文/判定を初期化
      error.value.nameError = "";
      error.value.furiganaError = "";
      error.value.contactError = "";
      error.value.prefectureError = "";
      error.value.emailError = "";
      error.value.phoneError = "";
      error.value.cityError = "";
      error.value.guestError = "";
      error.value.concentError = "";
      errorFlag.value = false;

      if (inputNameValue.value.length === 0) {
        error.value.nameError = "お名前を入力してください。";
        errorFlag.value = true;
      }
      if (inputFuriganaValue.value.length === 0) {
        error.value.furiganaError = "お名前（フリガナ）を入力してください。";
        errorFlag.value = true;
      }
      if (/[^ァ-ヶー]+$/.test(inputFuriganaValue.value)) {
        error.value.furiganaError =
          "お名前（フリガナ）を正しい形式で入力してください。";
        errorFlag.value = true;
      }
      if (inputContactValue.value.length === 0) {
        error.value.contactError = "希望連絡方法を選択してください。";
        errorFlag.value = true;
      }
      if (inputPrefectureValue.value.length === 0) {
        error.value.prefectureError = "都道府県を選択してください。";
        errorFlag.value = true;
      }
      if (inputEmailValue.value.length === 0) {
        error.value.emailError = "メールアドレスを入力してください。";
        errorFlag.value = true;
      }
      if (inputPhoneValue.value.length === 0) {
        error.value.phoneError = "電話番号を入力してください。";
        errorFlag.value = true;
      }
      if (/[^0-9]+/.test(inputPhoneValue.value)) {
        error.value.phoneError = "電話番号を正しい形式で入力してください。";
        errorFlag.value = true;
      }
      if (inputCityValue.value.length === 0) {
        error.value.cityError = "市区町村・番地を入力してください。";
        errorFlag.value = true;
      }
      if (inputGuestValue.value.length === 0) {
        error.value.guestError = "ご来場人数を入力してください。";
        errorFlag.value = true;
      }
      if (!inputConcentValue.value) {
        error.value.concentError =
          "「お客さまの個人情報の利用目的」をご確認ください。";
        errorFlag.value = true;
      }
    };
    /**
     * エラーがなければデータstoreに保管してページ遷移する.
     */
    const submit = () => {
      checkValidation();
      if (!errorFlag.value) {
        const reserveInfo: Reserve = {
          name: inputNameValue.value,
          furigana: inputFuriganaValue.value,
          email: inputEmailValue.value,
          phone: inputPhoneValue.value,
          prefecture: inputPrefectureValue.value,
          city: inputCityValue.value,
          building: inputBuildingValue.value,
          contact: inputContactValue.value,
          guest: inputGuestValue.value,
          caption: inputCaptionValue.value,
        };
        store.commit("setReserveInfo", reserveInfo);
        router.push("/Confirm");
      }
    };
    /**
     * 前の画面に戻る.
     */
    const backPage = () => {
      router.back();
    };

    return {
      text,
      back,
      next,
      formTitle,

      // emitで取得した値を代入
      inputName,
      inputFurigana,
      inputContact,
      inputPrefecture,
      inputEmail,
      inputPhone,
      inputCity,
      inputBuilding,
      inputGuest,
      inputConcent,
      inputCaption,
      // 送信用
      inputNameValue,
      inputFuriganaValue,
      inputContactValue,
      inputPrefectureValue,
      inputEmailValue,
      inputPhoneValue,
      inputCityValue,
      inputGuestValue,
      inputConcentValue,
      inputBuildingValue,
      inputCaptionValue,

      checkValidation,
      error,
      errorFlag,
      submit,
      backPage,
    };
  },
});
</script>
<style scoped>
.title {
  border-bottom: 2px solid #1a2c88;
  margin: 24px 0;
}
.form-wrapper {
  margin: 24px auto;
  max-width: 960px;
  padding: 0;
  position: relative;
}

.form-container {
  background-color: #ffff;
  padding: 16px;
}

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
