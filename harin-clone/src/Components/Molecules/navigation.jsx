import { Link, Outlet } from 'react-router-dom';
import Button from '../Atoms/Button';
import userSlice, { delEmail, setEmail } from '../../Store/Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navigation = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  console.log(token)

  const handleLogout = () => {
    localStorage.removeItem("token"); // 로그아웃 시 토큰을 삭제함
    dispatch(setEmail(null)); // 이메일 상태도 null로 바꾸기
    alert('정상적으로 로그아웃 되었습니다.');
  }


  return (
    <>
      <header className='flex items-center'>
        {/* 로고 -> 메인 페이지 */}
        <div className='ml-3'>
        <Link to="/">
          <picture height={30} >
            <img src="/logoKakao.png" alt='logoKakao.png' width={125}/>
          </picture>
        </Link>
        </div>
        
        <nav className='ml-auto mr-3'>
          <div className='flex items-center'>
            {/* 장바구니 */}
            <Link to='/cart' className='content-center m-2 p-2'>
              <picture height={30} >
                <img src="/cart.png" alt='cart.png' width={35}  />
              </picture>              
            </Link>
            {/* 로그인 */}
            { token ? (
              <Link 
                to='/loginpage' 
                onClick={handleLogout}
                className='text-center text-sm font-bold m-2 p-2'
              >
                로그아웃
              </Link>
            ) : (
              <Link 
                to='/loginpage' 
                className='text-center text-sm font-bold m-2 p-2'
              >
                로그인
              </Link>
            )}
            {/* 회원가입 */}
            <Link to='/registerpage' className='text-center text-sm font-bold m-2 p-2'>회원가입</Link>
          </div>
        </nav>
      </header>
      <hr className='pb-12'/>
    </>


  )

}

export default Navigation