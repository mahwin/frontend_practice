export const setLocalStorage = (data) => {
  localStorage.setItem("lastSearchData", JSON.stringify(data));
};

export const getLocalStorage = () => {
  localStorage.setItem(localStorage.getItem("lastSearchData"));
};
