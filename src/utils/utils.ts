function setLocalStorage(key: string, value: string) {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

function getLocalStorage(key: string) {
  try {
    let obj = JSON.parse(localStorage.getItem(key) || "{}" );
    return obj;
  }
  catch(err) {
    return localStorage.getItem(key);
  }
}

export { setLocalStorage, getLocalStorage};
