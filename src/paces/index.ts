const paces = new Array(600).fill(0).map((x, i) => i + 120);

export function paceInSecondsToMMss(seconds: number): string {
  return Math.floor(seconds / 60) + ':' + (seconds % 60);
}

export function timeForDistance(distance: number, pace: number): string {
  return paceInSecondsToMMss(distance * pace);
}

export default paces;
