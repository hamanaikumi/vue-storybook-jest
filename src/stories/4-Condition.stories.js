import Condition from "../components/Atoms/Form/Condition";

/* コンポーネントの設定 */
export default {
  title: "Sample/Atoms/Condition", // ナビゲーションパネルでの表示名となる
  component: { Condition }, // 対象となるコンポーネントを定義する
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

/* story記述 */
// default
const Template = (args) => ({
  // 変数名がナビゲーションパネルでの表示名となる
  components: { Condition }, // 対象となるコンポーネントを指定する
  setup() {
    return { args };
  },
  template: '<Condition v-bind="args" />', // レンダリングするhtmlを記述する
});

export const Required = Template.bind({});
export const Optional = Template.bind({});
Optional.args = {
  condition: "optional",
  text: "任意",
};
