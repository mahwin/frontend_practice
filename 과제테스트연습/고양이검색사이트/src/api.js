const API_END_POINT =
  "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";

export const api = async (type, payload) => {
  let API_SUB_POINT = "";
  switch (type) {
    case "search":
      API_SUB_POINT = `/search?q=${payload}`;
      break;
    case "random":
      API_SUB_POINT = `/random50`;
      break;
    default:
      API_SUB_POINT = `/${payload}`;
      break;
  }

  const res = await fetch(`${API_END_POINT}${API_SUB_POINT}`);
  switch (Math.floor(res.status / 100)) {
    case 3:
      return `Redirects Error with status code ${res.status}`;
    case 4:
      return `Clinet Error with status code ${res.status}`;
    case 5:
      return `Server Error with status code ${res.status}`;
    default:
      return res.json();
  }
};
