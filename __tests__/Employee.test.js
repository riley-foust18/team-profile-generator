const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee("Jam", "bloobloo@email.com", 1);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
});

test("gets employee's name", () => {
  const employee = new Employee("Jam", "bloobloo@email.com", 1);

  expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's email", () => {
  const employee = new Employee("Jam", "bloobloo@email.com", 1);

  expect(employee.getEmail()).toEqual(expect.any(String));
});
