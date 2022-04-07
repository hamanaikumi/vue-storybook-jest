import DefaultButton from "../components/Atoms/Form/DefaultButton";

/* コンポーネントの設定 */
export default {
  title: "Sample/Atoms/DefaultButton", // ナビゲーションパネルでの表示名となる
  component: { DefaultButton }, // 対象となるコンポーネントを定義する
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    // size: {
    //   options: ["small", "medium", "large"],
    //   control: "select",
    // },
  },
};

/* story記述 */
// default
export const Default = (args) => ({
  // 変数名がナビゲーションパネルでの表示名となる
  components: { DefaultButton }, // 対象となるコンポーネントを指定する
  setup() {
    return { args };
  },
  template: '<default-button  v-bind="args" />', // レンダリングするhtmlを記述する
});

// type: Primary
export const Primary = Default.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

// type: Secondary
export const Secondary = Default.bind({});
Secondary.args = {
  primary: false,
  label: "Button",
};
