const Robot = require("../../db/models/Robot");
const getRobots = require("./robotsControllers");

jest.mock("../../db/models/Robot");

describe("Given a getRobots controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("When it receives a response", () => {
    test("Then it should call method json with a list of robots in the response", async () => {
      const res = { json: jest.fn()};

      const robots = 
        {
          id: 1,
          name: "G-MOD",
          speed: 9,
        }
      ;

      Robot.find = jest.fn().mockResolvedValue(robots);
      
      await getRobots(null, res);
      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenLastCalledWith( robots );
    })
  })
})
