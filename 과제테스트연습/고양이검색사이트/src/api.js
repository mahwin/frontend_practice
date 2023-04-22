const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

export const api = {
  fetchCats: (keyword) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },

  fetchCatDetail: (id) => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
  },

  fetchRandomCats: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  },
};

// const request = async (url) => {     try {       const result = await fetch(url);       return result.json();     } catch (e) {       console.warn(e);     }   }    const api = {     fetchGif: keyword => {       return request(`${API_ENDPOINT}/api/gif/search?q=${keyword}`);     },     fetchGifAll: () => {       return request(`${API_ENDPOINT}/api/gif/all`);     }   };
