import { Link } from "react-router-dom";
import Container from "../atoms/Container";
import GNBMenuMy from "../molecules/GNBMenuMy";
import GNBMenuUtil from "../molecules/GNBMenuUtil";
import Box from "../atoms/Box";

const GNB = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white h-20 border-neutral-200 border-b-[1px]">
      <Container className="  flex w-320 h-20 m-auto px-7">
        <Box className="pt-7">
          <Link to={"/"} className="block">
            <img
              alt="kakao shop logo"
              src="/logoKakao.png"
              className="block w-27 h-8"
            />
          </Link>
        </Box>
        <GNBMenuUtil className="relative ml-auto pt-6 pr-4 after:absolute after:right-0 after:top-8 after:w-px after:h-5 after:bg-gray-400" />
        <GNBMenuMy className="flex relative py-3 pl-3" />
      </Container>
    </div>
  );
};

export default GNB;