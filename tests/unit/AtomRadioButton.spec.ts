import { shallowMount } from "@vue/test-utils";
import RadioButton from "@/components/Atoms/Form/RadioButton.vue";

describe("RadioButton.vue", () => {
  it("ボタンクリックでemitされるか", async () => {
    const wrapper = shallowMount(RadioButton);
    expect(wrapper.emitted("change")).toEqual(undefined);
    // コンポーネントのmethodを呼び出す（？）
    wrapper.find("input").trigger("change");
    expect(wrapper.emitted("checked")).toBeTruthy();
  });

  it("propsで渡した値が反映されているか", () => {
    const wrapper = shallowMount(RadioButton, {
      props: {
        text: "テスト",
      },
    });
    expect(wrapper.find("span").text()).toBe("テスト");
  });
});
