let DB = require("../model/db");
const count = require("../model/CategoryCount");
const calculate = require("../middleware/calculate");
const INITIAL_CHUNK = [
  { gender: "Male", height: 171, weight: 96 },
  { gender: "Male", height: 161, weight: 85 },
  { gender: "Male", height: 180, weight: 77 },
  { gender: "Female", height: 166, weight: 62 },
  { gender: "Female", height: 150, weight: 70 },
  { gender: "Female", height: 167, weight: 82 },
];
DB = INITIAL_CHUNK.map((p) => {
  return calculate(p);
});
exports.show_Table = (req, res) => {
  res.render("show", { entities: DB, count: count });
};

exports.add_entity = (req, res) => {
  res.render("add");
};

exports.post_entity = (req, res) => {
  if (req.body.height === "" || req.body.weight === "") {
    return res.redirect("/add");
  }
  const x = calculate(req.body);
  DB = [...DB, x];
  res.redirect("/entities");
};
