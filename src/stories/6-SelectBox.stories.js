import SelectBox from "../components/Atoms/Form/SelectBox";

/* コンポーネントの設定 */
export default {
  title: "Sample/Atoms/SelectBox", // ナビゲーションパネルでの表示名となる
  component: { SelectBox }, // 対象となるコンポーネントを定義する
};

/* story記述 */
// default
const Template = (args) => ({
  // 変数名がナビゲーションパネルでの表示名となる
  components: { SelectBox }, // 対象となるコンポーネントを指定する
  setup() {
    return { args };
  },
  template: '<SelectBox v-bind="args" />', // レンダリングするhtmlを記述する
});

export const Default = Template.bind({});

export const Options = Template.bind({});
Options.args = {
  options: [{ name: "orange" }, { name: "apple" }, { name: "grape" }],
};
