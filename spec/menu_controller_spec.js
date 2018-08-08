//require the MenuController class
const MenuController = require("../controllers/MenuController");

//Setting the name of the test suite.
describe("MenuController", () => {

  beforeEach(() => {
    this.menu = new MenuController();
  });

  //Calling it again in case we want to test several methods.
  describe("#getContactCount()", () => {
    //Implementing the specs.
    it ("should return 0 when no contacts are in the book", () => {
      expect(this.menu.getContactCount()).toBe(0);
    });
    it("should return 1 when there is exactly one contact in the book", () => {
      this.menu.contacts.push("Bob");
      expect(this.menu.getContactCount()).toBe(1)
    });
    it("should return Learning is a life-long pursuit", () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
    });
  });
});
