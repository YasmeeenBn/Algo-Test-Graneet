const rends_argent = require("./facile");
test("Returns 6 for 626.5", () => {
  //test 1
  expect(
    rends_argent(
      [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
      626.5
    )
  ).toBe(6);
  //test 2
  expect(rends_argent([500, 200, 100, 50, 20, 10, 5], 626.5)).toBe(-1);
  //test 3
  expect(
    rends_argent(
      [500, 200, 80, 70, 50, 30, 20, 10, 5, 2, 1, 0.2, 0.1, 0.02, 0.01],
      626.5
    )
  ).toBe(9);
  //test 4
  expect(
    rends_argent(
      [
        1000, 500, 400, 200, 100, 70, 40, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.02,
        0.01,
      ],
      1947.5
    )
  ).toBe(7);
});
