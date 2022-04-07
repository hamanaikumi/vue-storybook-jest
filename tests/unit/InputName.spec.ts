import { mount } from "@vue/test-utils";
import Name from "@/components/Organisms/Form/Name.vue";
import DefaultInput from "@/components/Atoms/Form/DefaultInput.vue";
import Form from "@/views/Form.vue";

// const emitInput = jest.fn();
describe("Name.vue", () => {
  it("入力した値が親に返されてくるか", async () => {
    const wrapper = mount(Form, {});
    const parentWrapper = wrapper.findComponent(Name);
    const childWrapper = wrapper.findComponent(DefaultInput);
    const inputValue = "テスト";

    // emitが実行されていないか
    parentWrapper.findComponent(DefaultInput);
    expect(wrapper.emitted("onInput")).toEqual(undefined);
    expect(parentWrapper.emitted("onInput")).toEqual(undefined);
    expect(childWrapper.emitted("onInput")).toEqual(undefined);

    // コンポーネントのmethodを呼び出す（？）
    const textInput = wrapper.find("input");
    await textInput.setValue(inputValue);

    // emitが実行されるか
    expect(childWrapper.emitted("onInput")).toBeTruthy();
    expect((childWrapper.emitted("onInput") as unknown[])[0]).toEqual([
      inputValue,
    ]);
    expect((parentWrapper.emitted("onInput") as unknown[])[0]).toEqual([
      inputValue,
    ]);
    expect(wrapper.vm.inputNameValue).toBe(inputValue);
  });
});
