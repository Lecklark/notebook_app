export function debounce<Params extends any[], T>(
  func: (...args: Params) => T,
  timeout: number,
): (...args: Params) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Params) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
