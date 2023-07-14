import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import Title from "../atoms/Title"
import { useDispatch, useSelector } from "react-redux"
import { loginRequest } from "../../store/slices/userSlice"

const LoginForm = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.user.email)

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요"
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button onClick={() => {
        // api 로그인 요청
        dispatch(
          loginRequest({
            email: value.email,
            password: value.password,
          })
        )
      }}>
      로그인
      </Button>
    </Container>
  )
}

export default LoginForm
