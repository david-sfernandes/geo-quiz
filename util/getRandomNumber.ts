export default function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1)) + min;
}
