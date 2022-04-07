import { mount } from "@vue/test-utils";
import ConfirmFirst from "@/components/Templates/Confirm/ConfirmFirst.vue";
import { nextTick } from "vue";
import { getters } from "../../src/store";

// const emitInput = jest.fn();
describe("ConfirmFirst.vue", () => {
  it("gettersが返されるか", async () => {
    // mock state
    const state = {
      reserveDate: {
        date: "4/1",
        time: "early",
        area: "東京エリア",
        shop: "青山一丁目モデルハウス",
      },
    };
    // get the result from the getter
    const result = getters.getReserveDate(state);
    console.log(result);

    expect(result).toEqual({
      date: "4/1",
      time: "early",
      area: "東京エリア",
      shop: "青山一丁目モデルハウス",
    });
    //  うまくいかない・・・
    const createPropsDate = jest.fn();
    const createPropsTime = jest.fn();
    const createPropsArea = jest.fn();
    const createPropsShop = jest.fn();
    await nextTick();
    expect(createPropsDate).toHaveBeenCalled();
    expect(createPropsTime).toHaveBeenCalled();
    expect(createPropsArea).toHaveBeenCalled();
    expect(createPropsShop).toHaveBeenCalled();
  });
});
