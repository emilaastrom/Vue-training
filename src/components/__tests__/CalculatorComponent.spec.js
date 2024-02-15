import  CalculatorComponent  from '@/components/CalculatorComponent.vue'
import { mount } from '@vue/test-utils'
import { assert, it, vi, expect, beforeEach, describe } from 'vitest'

describe("Buttons and functions", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CalculatorComponent);
  })

  const successfulFunctionCall = (methodName, buttonId) => {
    return async () => {
      const spy = vi.spyOn(wrapper.vm, methodName);
      await wrapper.find(buttonId).trigger("click");
      expect(spy).toHaveBeenCalled();
    };
  };

  it("test if handleInput is activated by clicking enter", successfulFunctionCall("handleInput","#equalsButton"))
  it("test if delete runs ", successfulFunctionCall("handleInput", "#deleteButton"))
  it("test if handleInput is activated by clicking 1", successfulFunctionCall("handleInput","#button1"));
  it("test if handleInput is activated by clicking 2", successfulFunctionCall("handleInput","#button2"));


  it.fails("ensure fake methods do not run", successfulFunctionCall("fakeMethod", "#deleteButton"))
  it.fails("ensure fake methods do not run", successfulFunctionCall("fakeMethod2", "#equalsButton"))
  it.fails("ensure fake methods do not run", successfulFunctionCall("fakeMethod3", "#button1"))
  it.fails("ensure fake methods do not run", successfulFunctionCall("fakeMethod4", "#button2"))
});

describe("Calculator inputs and results", () => {
  let wrapper;
  let calculator;
  beforeEach(() => {
    wrapper = mount(CalculatorComponent);
    calculator = wrapper.vm;
  });

  it("expression button click 1", async () => {
    await wrapper.find("#button1").trigger("click");
    assert.equal(calculator.expression, "1");
  });

  it("expression button click 2", async () => {
    await wrapper.find("#button2").trigger("click");
    assert.equal(calculator.expression, "2");
  });

  it("expression 1+2", async () => {
    await wrapper.find("#button1").trigger("click");
    await wrapper.find("#plusOperator").trigger("click");
    await wrapper.find("#button2").trigger("click");
    assert.equal(calculator.expression, "1+2");
  });

  it("expression 1+2=", async () => {
    await wrapper.find("#button1").trigger("click");
    await wrapper.find("#plusOperator").trigger("click");
    await wrapper.find("#button2").trigger("click");
    await wrapper.find("#equalsButton").trigger("click");
    assert.equal(calculator.expression, "3");
  });

  it("expression 1+2-3=", async () => {
    await wrapper.find("#button1").trigger("click");
    await wrapper.find("#plusOperator").trigger("click");
    await wrapper.find("#button2").trigger("click");
    await wrapper.find("#minusOperator").trigger("click");
    await wrapper.find("#button3").trigger("click");
    await wrapper.find("#equalsButton").trigger("click");
    assert.equal(calculator.expression, "0");
  });

  it("wrong expression 1+2-3=", async () => {
    await wrapper.find("#button1").trigger("click");
    await wrapper.find("#plusOperator").trigger("click");
    await wrapper.find("#button2").trigger("click");
    await wrapper.find("#minusOperator").trigger("click");
    await wrapper.find("#button3").trigger("click");
    await wrapper.find("#equalsButton").trigger("click");
    assert.notEqual(calculator.expression, "99999");
  });

  it("wrong expression 2+2=", async () => {
    await wrapper.find("#button2").trigger("click");
    await wrapper.find("#plusOperator").trigger("click");
    await wrapper.find("#button2").trigger("click");
    await wrapper.find("#equalsButton").trigger("click");
    assert.notEqual(calculator.expression, "2");
  });


});