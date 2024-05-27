import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import PageHome from "../Pages/PageHome";
import PageLogin from "../Pages/PageLogin";
import PageAlbums from "../Pages/PageAlbums";
import PageError from "../Pages/PageError";
import Footer from "../Components/Footer/Footer";
import PageAlbumDetail from "../Pages/PageAlbumDetail";
import PageCreateAccount from "../Pages/PageCreateAccount";
import PageArticles from "../Pages/PageArticles";
import PageArticleDetail from "../Pages/PageArticleDetail";

export default function Root() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/albums/*" element={<PageAlbums />}>
            <Route path="album/:id" element={<PageAlbumDetail />} />
          </Route>
          <Route path="/articles/*" element={<PageArticles/>}>
            <Route path="article/:articleId" element={<PageArticleDetail/>}/>
          </Route>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/create-account" element={<PageCreateAccount />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
