import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Collection from "./pages/Collection";
import Detail from "./pages/Detail";
import Filters from "./pages/Filters";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import { getConfig, getGenres } from "./services/";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getConfig({
        path: "configuration",
      })
    );
    dispatch(
      getGenres({
        path: "genre/movie/list",
        type: 'movie'
      })
    );
    dispatch(
      getGenres({
        path: "genre/tv/list",
        type: 'tv'
      })
    );
  }, []);

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/collection/:homeSectionId" element={<Collection />} ></Route>
        <Route exact path="/filters" element={<Filters />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/detail/:category/:id" element={<Detail />}></Route>
        <Route exact path="/detail/:category/:id/:episodeId" element={<Detail />}></Route>
        <Route path='*' exact={true} element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
