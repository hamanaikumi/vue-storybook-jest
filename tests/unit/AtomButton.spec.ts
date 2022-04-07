import { shallowMount } from "@vue/test-utils";
import DefaultButton from "@/components/Atoms/Form/DefaultButton.vue";

describe("DefaultButton.vue", () => {
  it("ボタンクリックでemitされるか", async () => {
    const wrapper = shallowMount(DefaultButton, {
      props: {
        // requiredがtrueなので必ず聞かれる（？）
        label: "button",
        primary: true,
      },
    });

    expect(wrapper.emitted("click")).toEqual(undefined);

    // コンポーネントのmethodを呼び出す（？）
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("emitClick")).toBeTruthy();
  });
});
