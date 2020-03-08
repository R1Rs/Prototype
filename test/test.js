import Character from "../src/add";

test ("test charcter", () => {
  let petr = new Character("petr", "Bowman");
  const received = petr.attack;
  const expected = 25;

  let retr = new Character("r", "aaa");
  const received1 = Error;
  const expected1 = Error;

    expect(received).toEqual(expected);
    expect(received1).toEqual(expected1);
})



