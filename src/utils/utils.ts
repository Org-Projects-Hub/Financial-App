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
function nameTest(name: String){
  const nameRegex = /^[a-zA-Z]{2,20}$/;
  return nameRegex.test(name);
}

function usernameTest(name: String){
  const usernameRegex = /^[a-zA-Z0-9]{8,30}$/;
  return usernameRegex.test(name);
}

function emailTest(name: String){
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(name);
}

function passwordTest(name: String){
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{7,30})$/;
  return passwordRegex.test(name);
}

function userTest (user: Object){
    let { firstName, lastName, username, password, email} = user;
    return nameTest(firstName + lastName) && userTest(username) && emailTest (email) && passwordTest (password);
}

export {setLocalStorage, getLocalStorage , nameTest, usernameTest, emailTest, passwordTest, userTest};
