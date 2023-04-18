const BASE_URL =
  " https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (keyword) => {
  const res = await fetch(BASE_URL + `/languages?keyword=${keyword}`);
  switch (Math.floor(res.status / 100)) {
    case 3:
      console.log(`통신 에러 ${res.status}`);
      break;
    case 4:
      console.log(`통신 에러 ${res.status}`);
      break;
    case 5:
      console.log(`통신 에러 ${res.status}`);
      break;
    default:
      return res.json();
  }
};
