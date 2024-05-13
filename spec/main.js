/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
  describe("default values", () => {
    let model;
    beforeAll(() => {
      model = new User();
    });

    it("first name defaults to empty", () => {
      // assert
      expect(model.firstName).toBe("");
    });

    it("last name defaults to empty", () => {
      // assert
      expect(model.firstName).toBe("");
    });

    it("middle name defaults to empty", () => {
      // assert
      expect(model.middleName).toBe("");
    });
  });
});
