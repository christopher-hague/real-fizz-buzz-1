export const getNumbers = (n1, n2) => {
  const nums = [];
  for (let i = n1; i <= n2; i++) {
    nums.push(i);
  }
  return nums;
}

export const isFizzBuzz = (n) => {
  return (isFizzy(n) && isBuzzy(n)) ? true : false;
}

export const isBuzzy = (n) => {
  return n % 5 === 0 ? true : false;
}

export const isFizzy = (n) => {
  return n % 3 === 0 ? true : false;
}