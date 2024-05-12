import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import PageHome from "../Pages/PageHome";
import PageLogin from "../Pages/PageLogin";
import PageAlbums from "../Pages/PageAlbums";
import AlbumDetail from "../Components/Albums/AlbumDetail";
import PageError from "../Pages/PageError";
import Footer from "../Components/Footer/Footer";
import PageAlbumDetail from "../Pages/PageAlbumDetail";

export default function Root() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/albums/*" element={<PageAlbums />}>
            <Route path=":id" element={<PageAlbumDetail/>}/>
            {/* <Route path="/albums/album/:id" element={<AlbumDetail />} /> */}
          </Route>
          <Route path="/login" element={<PageLogin />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
