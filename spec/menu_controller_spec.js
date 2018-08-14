//require the MenuController class
const MenuController = require("../controllers/MenuController");

//Setting the name of the test suite.
describe("MenuController", () => {

  beforeEach(() => {
    this.menu = new MenuController();
  });
});
