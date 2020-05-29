const knex = require("../connection");

function getAllTestValues() {
  return knex("test_values").select("*");
}

function getSingleTestValue(id) {
  return knex("test_values")
    .select("*")
    .where({ id: parseInt(id, 10) });
}

function addTestValue(testValue) {
  return knex("test_values")
    .insert(testValue)
    .returning("*");
}

module.exports = {
  getAllTestValues,
  getSingleTestValue,
  addTestValue
};
