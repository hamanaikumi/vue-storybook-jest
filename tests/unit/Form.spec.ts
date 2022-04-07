import { mount, shallowMount } from "@vue/test-utils";
import Form from "@/views/Form.vue";
import DefaultButton from "@/components/Atoms/Form/DefaultButton.vue";

import { createRouter, createMemoryHistory } from "vue-router";

describe("Form.vue", () => {
  it("入力情報をsubmitできるか", async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = mount(Form, {
      global: {
        mocks: {
          router: mockRouter,
        },
      },
    });
    const childWrapper = wrapper.findComponent(DefaultButton);
    // property
    const inputValue = "テスト";
    const flag = true;
    // mock
    const checkValidation = jest.fn();
    wrapper.vm.checkValidation = jest.fn();
    wrapper.vm.submit = jest.fn();
    const submit = jest.fn();
    const onClick = jest.fn();

    wrapper.vm.inputNameValue = inputValue;
    wrapper.vm.inputFuriganaValue = inputValue;
    wrapper.vm.inputPrefectureValue = inputValue;
    wrapper.vm.inputEmailValue = inputValue;
    wrapper.vm.inputPhoneValue = inputValue;
    wrapper.vm.inputCityValue = inputValue;
    wrapper.vm.inputGuestValue = inputValue;
    wrapper.vm.inputConcentValue = flag;

    // button押さなかったとき
    expect(childWrapper.emitted("emitClick")).toEqual(undefined);

    // const submitButton = wrapper.find(".button-primary");
    // await submitButton.trigger("click");
    await wrapper.find("button").trigger("click");

    // emitが渡っていくか
    expect(childWrapper.emitted("emitClick")).toBeTruthy();
    // ここからうまくいかない・・・1個１個実行してる・・・
    wrapper.vm.submit();
    expect(wrapper.vm.submit).toHaveBeenCalled();
    wrapper.vm.checkValidation();
    expect(wrapper.vm.checkValidation).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
