import { mount, shallowMount } from "@vue/test-utils";
import DefaultInput from "@/components/Atoms/Form/DefaultInput.vue";

// const emitInput = jest.fn();
describe("DefaultInput.vue", () => {
  it("入力した値が親に返されるか", async () => {
    const wrapper = shallowMount(DefaultInput, {});

    expect(wrapper.emitted("onInput")).toEqual(undefined);

    // コンポーネントのmethodを呼び出す（？）
    const textInput = wrapper.find("input");
    await textInput.setValue("ばりゅー");

    // wrapper.trigger("input");

    expect(wrapper.emitted("onInput")).toBeTruthy();
    expect((wrapper.emitted("onInput") as unknown[])[0]).toEqual(["ばりゅー"]);
    // expect(wrapper.emitted().onInput[0]).toEqual(["ばりゅー"]);
  });
});
