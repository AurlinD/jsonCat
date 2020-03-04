const { assert } = require("chai");

const { fetchBreedDescription } = require("../breedFetcher");

describe("breedFetcher.js", () => {
  it("Chartruex Success", () => {
    fetchBreedDescription("Chartreux", (err, desc) => {
      assert.equal(err, null);
      const chartruex =
        "The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.";
      assert.equal(chartruex, desc);
    });
  });
});
