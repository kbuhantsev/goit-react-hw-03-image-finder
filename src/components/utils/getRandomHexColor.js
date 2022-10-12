export function getRandomHexColor() {
  return `#${Math.floor((Math.random() * (1 - 0.1) + 0.1) * 16777215).toString(
    16
  )}`;
}
