import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// 名前付きエクスポートでgettersをエクスポートする(単体テスト用)
export const getters = {
  getReserveDate: (state: any) => state.reserveDate,
};

export default createStore({
  state: {
    // 予約カレンダー
    calender: [
      {
        date: "4/5",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/6",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/7",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/8",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/9",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/10",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/11",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/12",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/13",
        early: true,
        middle: true,
        late: false,
      },
      {
        date: "4/14",
        early: true,
        middle: true,
        late: false,
      },
    ],
    // エリアテーブル
    areaTable: {
      data1: [
        { id: 1, value: "東京エリア", isActive: true },
        { id: 2, value: "中部・関西エリア", isActive: false },
      ],
    },
    // 店舗テーブル
    shopTable: {
      data1: [
        { id: 1, value: "青山一丁目モデルハウス", isActive: true },
        { id: 2, value: "渋谷モデルハウス", isActive: false },
        { id: 3, value: "赤坂モデルハウス", isActive: false },
      ],
      data2: [
        { id: 1, value: "浜松モデルハウス", isActive: true },
        { id: 2, value: "梅田モデルハウス", isActive: false },
      ],
    },
    // 予約者情報
    reserveInfo: {
      name: "",
      furigana: "",
      email: "",
      phone: "",
      prefecture: "",
      city: "",
      building: "",
      contact: "",
      guest: "",
      caption: "",
    },
    // 予約内容
    reserveDate: {
      date: "4/1",
      time: "early",
      area: "東京エリア",
      shop: "青山一丁目モデルハウス",
    },
    reserveAreaId: 1,
  },
  mutations: {
    /**
     * 予約者情報を保存する.
     * @param state ステート
     * @param payload 予約者情報
     */
    setReserveInfo(state, payload) {
      state.reserveInfo = payload;
    },
    /**
     * 予約日を保存する.
     * @param state ステート
     * @param payload 予約日
     */
    setReserveDate(state, payload) {
      state.reserveDate.date = payload;
    },
    /**
     * 予約時間を保存する.
     * @param state ステート
     * @param payload 予約者時間
     */
    setReserveTime(state, payload) {
      state.reserveDate.time = payload;
    },
    /**
     * 予約エリアを保存する.
     * @param state ステート
     * @param payload エリア
     */
    setReserveArea(state, payload) {
      state.reserveDate.area = payload;
    },
    /**
     * 予約店舗を保存する.
     * @param state ステート
     * @param payload 予約店舗
     */
    setReserveShop(state, payload) {
      state.reserveDate.shop = payload;
    },
    /**
     * 予約エリアIDを保存する.
     * @param state ステート
     * @param payload 予約エリアID
     */
    setReserveAreaId(state, payload) {
      state.reserveAreaId = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    /**
     * 予約カレンダーを返す.
     * @param state ステート
     * @returns 予約カレンダー
     */
    getReservation(state) {
      return state.calender;
    },
    /**
     * 予約者情報を返す.
     * @param state ステート
     * @returns 予約者情報
     */
    getReserveInfo(state) {
      return state.reserveInfo;
    },
    /**
     * 予約内容を返す.
     * @param state ステート
     * @returns 予約内容
     */
    getReserveDate(state) {
      return state.reserveDate;
    },
    /**
     * ショップテーブルを返す.
     * @param state ステート
     * @returns ショップテーブル
     */
    getShopTable(state) {
      return state.shopTable;
    },
    /**
     * エリアテーブルを返す.
     * @param state ステート
     * @returns エリアテーブル
     */
    getAreaTable(state) {
      return state.areaTable;
    },
    /**
     * エリアIDを返す.
     * @param state ステート
     * @returns エリアID
     */
    getReserveAreaId(state) {
      return state.reserveAreaId;
    },
  },
  plugins: [createPersistedState()],
});
