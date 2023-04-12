export const setLocalStorage = (data) => {
  localStorage.setItem("lastSearchData", JSON.stringify(data));
};

export const getLocalStorage = (data) => {
  localStorage.setItem(localStorage.getItem("lastSearchData"));
};
