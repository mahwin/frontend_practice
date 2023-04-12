import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Loading from "./components/Loading.js";

import { request } from "./api/api.js";

export default function App($app) {
  this.state = {
    visible: false,
    loading: false,
    image: null,
    data: [],
  };

  const searchInput = new SearchInput({
    $app,
    onSearch: async (keyword) => {
      const searchData = await request("search", keyword);
      this.setState({
        ...this.state,
        data: searchData.data,
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

  this.setState = (nextState) => {
    this.state = nextState;
    searchResult.setState(this.state.data);
    imageInfo.setState({
      image: this.state.image,
      visible: this.state.visible,
    });
    loading.setState(this.state.loading);
  };
}
