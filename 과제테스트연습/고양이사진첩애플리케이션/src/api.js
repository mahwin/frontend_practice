const API_END_POINT =
  "https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/";

export const request = async (dir = "root") => {
  let API_SUB_POINT = ``;
  switch (dir) {
    case "root":
      API_SUB_POINT += "/";
      break;
    default:
      API_SUB_POINT += `/${dir}`;
      break;
  }

  const res = await fetch(`${API_END_POINT}${API_SUB_POINT}`);
  switch (Math.floor(res.state / 100)) {
    case 3:
      return `Redirects Error with status code ${res.status}`;
    case 4:
      return `Client Error with status code ${res.status}`;
    case 5:
      return `Server Error with status code ${res.status}`;
    default:
      return res.json();
  }
};
