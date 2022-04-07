import RadioButton from "../components/Atoms/Form/RadioButton";

/* コンポーネントの設定 */
export default {
  title: "Sample/Atoms/RadioButton", // ナビゲーションパネルでの表示名となる
  component: { RadioButton }, // 対象となるコンポーネントを定義する
};

/* story記述 */
// default
const Template = (args) => ({
  // 変数名がナビゲーションパネルでの表示名となる
  components: { RadioButton }, // 対象となるコンポーネントを指定する
  setup() {
    return { args };
  },
  template: '<RadioButton v-bind="args" />', // レンダリングするhtmlを記述する
});

export const Default = Template.bind({});
