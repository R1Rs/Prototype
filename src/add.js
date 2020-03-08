export default Character;

function Character(name, type) {
  let types = {
    Bowman: {
      attack: 25,
      defense: 25
    },
    Swordsman: {
      attack: 40,
      defense: 10
    },
    Magician: {
      attack: 10,
      defense: 40
    },
    Daemon: {
      attack: 25,
      defense: 25
    },
    Undead: {
      attack: 40,
      defense: 10
    },
    Zombie: {
      attack: 10,
      defense: 40
    }
  }

  if ((typeof(name) != "string") || (name.length < 2) || (name.length > 10) || (!Object.keys(types).includes(type))) {
    throw new Error ("введены некорректные данные");
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = types[type].attack;
  this.defense = types[type].defense;
}

