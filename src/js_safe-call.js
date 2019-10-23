"use strike";

function safeCall(func) {

  try {
    func();

  } catch (error) {

    return false;
  }

  return true;
}
