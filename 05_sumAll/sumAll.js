const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  let lower = Math.min(a, b);
  let upper = Math.max(a, b);

  let n = upper - lower + 1;
  let totalSum = (n * (lower + upper)) / 2;
  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
