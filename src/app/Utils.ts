
export function isValidIndex(n: unknown, arr: readonly unknown[]): n is number {
  if (typeof n === 'number' && Number.isSafeInteger(n)) {
    return n >= 0 && n < arr.length;
  }
  return false;
}
