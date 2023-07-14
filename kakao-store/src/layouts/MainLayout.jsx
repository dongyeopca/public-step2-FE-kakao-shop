import Gnb from "../components/organisms/Gnb";
import MainProductTemplate from "../components/templates/MainProductTemplate";

const MainLayout = () => {
    return (
        <>
            {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
            <Gnb />
            {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
            <MainProductTemplate />
            {/* 푸터 영역 */}
            {/*<Footer />*/}
        </>
    );
}

export default MainLayout;