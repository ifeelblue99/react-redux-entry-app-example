export function getHourMinuteSecond() {
  const dt = new Date();
  return `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
}
