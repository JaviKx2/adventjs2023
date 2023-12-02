import manufacture from "./challenge.js";

const cmpArrays = (array1, array2) => array1.length === array2.length && array1.every((value, index) => value === array2[index])

const tests = [
  function should_return_tren_oso_when_materials_tronesa() {
    const gifts = ["tren", "oso", "pelota"];
    const materials = "tronesa";
    const actual = manufacture(gifts, materials)
    console.assert(cmpArrays(["tren", "oso"], actual));
  },
  function should_return_puzzle_when_materials_jlepuz() {
    const gifts = ["juego", "puzzle"];
    const materials = "jlepuz";
    const actual = manufacture(gifts, materials)
    console.assert(cmpArrays(["puzzle"], actual));
  },
  function should_return_empty_when_materials_psli() {
    const gifts = ["libro", "ps5"];
    const materials = "psli";
    const actual = manufacture(gifts, materials)
    console.assert(cmpArrays([], actual));
  },
  function should_return_empty_when_no_gifts_nor_materials() {
    const gifts = [];
    const materials = "";
    const actual = manufacture(gifts, materials)
    console.assert(cmpArrays([], actual));
  },
  function should_return_empty_when_null_gifts() {
    const gifts = null;
    const materials = "dsfdsf";
    const actual = manufacture(gifts, materials)
    console.assert(cmpArrays([], actual));
  },
  function should_return_empty_when_null_materials() {
    const gifts = ["gift"];
    const materials = null;
    const actual = manufacture(gifts, materials)
    console.assert(cmpArrays([], actual));
  }
];

tests.forEach((test) => {
  test();
});
