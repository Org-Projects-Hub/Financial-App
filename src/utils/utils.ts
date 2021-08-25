function setLocalStorage(key: string, value: string) {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

function getLocalStorage(key: string) {
  try {
    let obj = JSON.parse(localStorage.getItem(key) || null);
    return obj;
  } catch (err) {
    return localStorage.getItem(key);
  }
}

const logoutAndRedirect = () => {
  setLocalStorage('finapp-token', '');
  window.location.href = window.location.origin + '/login';
};

const logoutTimer = () => {
  setTimeout(logoutAndRedirect, 7200000);
  setTimeout(() => {
    alert('You will be logout automatically in 1 minute!');
  }, 7140000);
};

function nameTest(name: string) {
  const nameRegex = /^[a-zA-Z]{2,20}$/;
  return nameRegex.test(name);
}

function usernameTest(name: string) {
  const usernameRegex = /^[a-zA-Z0-9]{8,30}$/;
  return usernameRegex.test(name);
}

function emailTest(name: string) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(name);
}

function passwordTest(name: string) {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{7,30})$/;
  return passwordRegex.test(name);
}

function numberTest(name: string) {
  const nameRegex = /^[0-9]{7,12}$/;
  return nameRegex.test(name);
}

export {
  setLocalStorage,
  getLocalStorage,
  nameTest,
  usernameTest,
  emailTest,
  passwordTest,
  numberTest,
  logoutAndRedirect,
  logoutTimer,
};
