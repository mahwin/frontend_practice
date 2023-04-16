const API_END_POINT = "https://source.unsplash.com/random/300x300/?programming";
export const request = async () => {
  const res = await fetch(API_END_POINT);

  switch (res.status / 100) {
    case 3:
      console.log(`리디렉션 ${res.state}`);
      break;
    case 4:
      console.log(`클라이언트 오류 ${res.state}`);
      break;
    case 5:
      console.log(`서버 오류 ${res.state}`);
      break;

    default:
  }
};
