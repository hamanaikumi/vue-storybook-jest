import { shallowMount } from "@vue/test-utils";
import SelectBox from "@/components/Atoms/Form/SelectBox.vue";

describe("SelectBox.vue", () => {
  it("入力した値が親に返されるか", async () => {
    const wrapper = shallowMount(SelectBox, {
      props: {
        options: [{ name: "value1" }, { name: "value2" }, { name: "value3" }],
      },
    });
    // emitされていないことを確認
    expect(wrapper.emitted("onChange")).toEqual(undefined);
    // propsが渡っているか
    expect(wrapper.props().options).toEqual([
      { name: "value1" },
      { name: "value2" },
      { name: "value3" },
    ]);
    // methodを呼び出す（？）
    const select = wrapper.find<HTMLSelectElement>("select");
    await select.setValue(wrapper.props().options[0].name);
    // 画面に表示されるか
    expect(wrapper.text()).toContain("value1");
    // emitされるか
    expect((wrapper.emitted("onChange") as unknown[])[0]).toEqual(["value1"]);
  });

  it("デフォルトの値が表示されるか", () => {
    const wrapper = shallowMount(SelectBox, {
      props: {
        value: "ここから選択",
      },
    });
    // propsが渡っているか
    expect(wrapper.props().value).toEqual("ここから選択");
    // 画面に初期表示されるか
    expect(wrapper.text()).toContain("ここから選択");
  });
});
