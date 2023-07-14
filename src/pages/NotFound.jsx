import React from "react";
import logoImage from "../assets/logoKakao.png";
import LinkedIcon from "../components/molecules/LinkedIcon";
import Button from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full h-full">
      <header className="flex justify-center w-full border-b">
        <LinkedIcon to="/" alt="카카오톡 쇼핑하기 로고" width="w-24">
          {logoImage}
        </LinkedIcon>
      </header>
      <section className="grow flex flex-col justify-center items-center w-full">
        <strong className="text-lg text-gray-600 font-extrabold">
          현재 운영되지 않는 스토어 입니다
        </strong>
        <p className="mt-2 mb-4 text-center text-sm text-gray-400">
          관련 문의는 고객센터로
          <br />
          연락부탁드립니다
          <br />
          고객센터(통화료 발생){" "}
          <span className="text-blue-500 font-bold">0000-0000</span>
        </p>
        <Button
          padding="px-6 py-1"
          textsize="sm"
          border="border"
          onClick={() => navigate(-1)}
        >
          이전
        </Button>
      </section>
      <footer className="text-center py-4 w-full bg-gray-100">
        <small>Copyright &copy; Kakao Corp.</small>
      </footer>
    </div>
  );
}
