import Character from "../src/add";

test ("test charcter", () => {
  let petr = new Character("petr", "Bowman");
  petr.damage(20);
  const received = petr.health;
  const expected = 88;

  petr.health = -1;
  petr.damage(10);
  const received1 = petr.health
  const expected1 = -1;

  expect(received).toEqual(expected);
  expect(received1).toEqual(expected1);
})



