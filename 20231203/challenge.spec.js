import findNaughtyStep from "./challenge.js";

const tests = [
  function should_return_e() {
    const original = "abcd";
    const modified = "abcde";
    const actual = findNaughtyStep(original, modified);
    console.assert("e" == actual);
  },
  function should_return_f() {
    const original = "stepfor";
    const modified = "stepor";
    const actual = findNaughtyStep(original, modified);
    console.assert("f" == actual);
  },
  function should_return_empty() {
    const original = "abcde";
    const modified = "abcde";
    const actual = findNaughtyStep(original, modified);
    console.assert("" == actual);
  },
  function should_return_first_modified_when_original_null() {
    const original = null;
    const modified = "rtryyty";
    const actual = findNaughtyStep(original, modified);
    console.assert("r" == actual);
  },
  function should_return_first_original_when_modified_null() {
    const original = "iotyiotpyoit";
    const modified = null;
    const actual = findNaughtyStep(original, modified);
    console.assert("i" == actual);
  },
];

tests.forEach((test) => {
  test();
});
