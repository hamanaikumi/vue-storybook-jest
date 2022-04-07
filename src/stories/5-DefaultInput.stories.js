import DefaultInput from "../components/Atoms/Form/DefaultInput";

/* コンポーネントの設定 */
export default {
  title: "Sample/Atoms/DefaultInput", // ナビゲーションパネルでの表示名となる
  component: { DefaultInput }, // 対象となるコンポーネントを定義する
};

/* story記述 */
// default
const Template = (args) => ({
  // 変数名がナビゲーションパネルでの表示名となる
  components: { DefaultInput }, // 対象となるコンポーネントを指定する
  setup() {
    return { args };
  },
  template: '<DefaultInput v-bind="args" />', // レンダリングするhtmlを記述する
});

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "I am placeholder.",
};

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: "I am placeholder.",
  value: "I am default value.",
};
