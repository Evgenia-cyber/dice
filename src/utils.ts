const validateRandomNumber = (randomNumber: number): number => {
  if (randomNumber < 1) return 1;
  if (randomNumber > 6) return 6;
  return randomNumber;
};

export { validateRandomNumber };
