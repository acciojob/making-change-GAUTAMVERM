const makeChange = (c) => {
  let change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  // Convert input to an integer
  c = parseInt(c);

  // Calculate number of quarters
  change.q = Math.floor(c / 25);
  c %= 25; // Get the remainder

  // Calculate number of dimes
  change.d = Math.floor(c / 10);
  c %= 10; // Get the remainder

  // Calculate number of nickels
  change.n = Math.floor(c / 5);
  c %= 5; // Get the remainder

  // The remaining amount will be in pennies
  change.p = c;

  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
