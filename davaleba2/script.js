// 1. Create a function that takes an array of user objects and returns the name of the youngest user.
function youngestUser(users) {
  let youngest = users[0];
  for (let i = 1; i < users.length; i++) {
    if (users[i].age < youngest.age) youngest = users[i];
  }
  return youngest.name;
}


// 2. Create a function that takes a user object and returns a clone of that object.
function cloneUser(user) {
  return {...user};
}


// 3. Create a function that simulates a dice game between two players, A and B. Each player rolls a die until they get a 3. The player who rolls a 3 in the fewest attempts wins. If both players take the same number of attempts, it's a tie.
function rollDiceGame(a, b) {
  function roll() {
    let attempts = 0;
    let result = 0;
    while (result !== 3) {
      result = Math.floor(Math.random() * 6) + 1;
      attempts++;
    }
    return attempts;
  }
  const aRolls = roll();
  const bRolls = roll();
  if (aRolls < bRolls) return "A is winner";
  if (bRolls < aRolls) return "B is winner";
  return "Tie";
}
