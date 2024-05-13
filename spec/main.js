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

  describe("full name", () => {
    let model;

    beforeEach(() => {
      model = new User({
        firstName: "John",
        lastName: "Doe",
      });
    });

    it("middle initial when middleName is defined with first and last", () => {
      model.middleName = "Christopher";
      const result = model.fullName;
      expect(result).toBe(
        `${model.firstName} ${model.middleName[0]}. ${model.lastName}`
      );
    });

    it("when no middle name return just first and last", () => {
      // model.middleName = ''; // This line might be commented out
      const result = model.fullName;
      expect(result).toBe(`${model.firstName} ${model.lastName}`);
    });
  });
});
