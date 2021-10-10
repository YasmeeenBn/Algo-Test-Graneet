const maxZeros = require("./moyen");
test("Returns 6 for 123456", () => {
  expect(maxZeros(123456)).toBe(6);
  expect(maxZeros(65535)).toBe(0);
  expect(maxZeros(749)).toBe(1);
  expect(maxZeros(9236)).toBe(5);
  expect(maxZeros(532)).toBe(4);
  expect(maxZeros(9999)).toBe(4);
  expect(maxZeros(16352728)).toBe(4);
  expect(maxZeros(8761)).toBe(3);
});
