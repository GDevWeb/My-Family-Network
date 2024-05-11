import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import PageHome from "../Pages/PageHome";
import PageLogin from "../Pages/PageLogin";
import PageAlbums from "../Pages/PageAlbums";
import PageError from "../Pages/PageError";
import Footer from "../Components/Footer/Footer";

export default function Root() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/albums" element={<PageAlbums />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
