import Input from "../components/Input";

/* コンポーネントの設定 */
export default {
  title: "Input", // ナビゲーションパネルでの表示名となる
  component: { Input }, // 対象となるコンポーネントを定義する
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

/* story記述 */
// default
const Template = (args) => ({
  // 変数名がナビゲーションパネルでの表示名となる
  components: { Input }, // 対象となるコンポーネントを指定する
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />', // レンダリングするhtmlを記述する
});

export const Primary = Template.bind({});
Primary.args = {
  placeHolder: "I am placeholder.",
};

export const withBoth = Template.bind({});
withBoth.args = {
  placeHolder: "I am placeholder.",
  defaultValue: "I am default value.",
};
