// components
import Container from "../atoms/Container.js";
import Button from "../atoms/Button.js";
import LabeledInput from "../molecules/LabeledInput.js";

export default function LogInForm() {
  return (
    <Container>
      <LabeledInput
        type="text"
        id="id"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        label="이메일"
        placeholder="이메일"
      />
      <LabeledInput
        type="password"
        id="pw"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        label="비밀번호"
        placeholder="비밀번호"
      />
      <Button
        onClick={(e) => {
          console.dir(e.target.innerHTML);
        }}
      >
        로그인
      </Button>
      <Button
        onClick={(e) => {
          console.dir(e.target.innerHTML);
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}
