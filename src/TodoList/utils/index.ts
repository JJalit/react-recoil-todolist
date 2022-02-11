let id = 0;
export function getId() {
  return id++;
}

export function replaceItemAtIndex(arr, index, newValue) {
  const result = [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  return result;
}

export function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
