let arr = [];
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

for (let i = 1; i <= 31; i++) {
  for (let j = 1; j <= 200; j++) {
    arr.push(`(${j},` + `"2023-12-${i}",` + getRandomInt(0, 2) + ")");
  }
}

console.log(arr.toString());
