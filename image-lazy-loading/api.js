const API_END_POINT =
  "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/random50";
export const request = async () => {
  const res = await fetch(API_END_POINT);

  switch (res.status / 100) {
    case 3:
      return `리디렉션 ${res.state}`;
    case 4:
      return `클라이언트 오류 ${res.state}`;

    case 5:
      return `서버 오류 ${res.state}`;

    default:
      return res.json();
  }
};
