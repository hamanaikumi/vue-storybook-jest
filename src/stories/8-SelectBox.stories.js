import Table from "../components/Atoms/Top/Table";

/* コンポーネントの設定 */
export default {
  title: "Sample/Atoms/Table", // ナビゲーションパネルでの表示名となる
  component: { Table }, // 対象となるコンポーネントを定義する
};

/* story記述 */
// default
const Template = (args) => ({
  // 変数名がナビゲーションパネルでの表示名となる
  components: { Table }, // 対象となるコンポーネントを指定する
  setup() {
    return { args };
  },
  template: '<Table v-bind="args" />', // レンダリングするhtmlを記述する
});

export const Default = Template.bind({});
export const Selected = Template.bind({});
Selected.args = {
  datas: [
    { id: 1, value: "data1", isActive: false },
    { id: 2, value: "data2", isActive: true },
    { id: 3, value: "data3", isActive: false },
  ],
};
