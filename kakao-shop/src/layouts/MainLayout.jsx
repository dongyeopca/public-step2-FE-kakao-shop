import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default MainLayout;
