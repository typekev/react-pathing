export const addEventListeners = (
  element: HTMLElement,
  eventNames: string[],
  fn: () => void
) => {
  eventNames.forEach((e) => element.addEventListener(e, fn, false))
}
