import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Loading from "./components/Loading.js";
import SearchError from "./components/SearchError.js";
import SearchKeyword from "./components/SearchKeyword.js";

import { setLocalStorage, getLocalStorage } from "./lib/LocalStorage.js";
import { request } from "./api/api.js";

export default function App($app) {
  this.state = {
    error: false,
    visible: false,
    loading: false,
    image: null,
    data: [],
    keyword: [],
  };

  const searchInput = new SearchInput({
    $app,
    onSearch: async (keyword) => {
      const searchData = await request("search", keyword);

      if (!searchData.data) return;

      let nextKeyword = [
        keyword,
        ...this.state.keyword.filter((word) => word != keyword),
      ];

      if (nextKeyword.length > 5) {
        nextKeyword = nextKeyword.slice(0, 5);
      }

      setLocalStorage(searchData);

      this.setState({
        ...this.state,
        data: searchData.data,
        error: false,
      });
    },

    onClick: async () => {
      const randomData = await request("random");

      setLocalStorage(randomData);

      this.setState({
        ...this.state,
        data: randomData.data,
      });
    },
  });

  const searchResult = new SearchResult({
    $app,
    initialState: [],
    onClick: (image) => {
      this.setState({
        visible: true,
        image,
      });
    },
  });

  const imageInfo = new ImageInfo({
    $app,
    initialState: {
      visible: false,
      image: null,
    },
  });

  const loading = new Loading({
    $app,
    initialState: this.state.loading,
  });

  const searchError = new SearchError({
    $app,
    initialState: this.state.error,
  });

  const searchKeyword = new SearchKeyword({
    $app,
    initialState: this.state.keyword,
    onClick: async (keyword) => {
      const keywordData = await request("search", keyword);

      setLocalStorage(keywordData);

      const nextKeyword = [
        keyword,
        ...this.state.keyword.filter((word) => word != keyword),
      ];

      this.setState({
        ...this.state,
        data: keywordData.data,
        keyword: nextKeyword,
      });
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    searchResult.setState(this.state.data);
    imageInfo.setState({
      image: this.state.image,
      visible: this.state.visible,
    });
    loading.setState(this.state.loading);
    searchError.setState(this.state.error);

    searchKeyword.setState(this.state.keyword);
  };

  const init = () => {
    console.log("???");
    const storage = getLocalStorage();
    console.log(storage);
    //데이터가 비어있거나, 없거나, 잘못 저장된 경우
    if (!storage || !storage.data || !storage.data.length) {
      return;
    }

    this.setState({
      ...this.state,
      data: storage.data,
    });
  };

  init();
}
