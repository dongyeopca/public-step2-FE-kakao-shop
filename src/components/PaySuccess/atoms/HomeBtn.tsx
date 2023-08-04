import React from 'react';
import { Link } from 'react-router-dom';
import staticServerUrl from '../../../constants/staticUrl';

function HomeBtn() {
  return (
    <Link to={staticServerUrl + '/'}>
      <button type="button" className="w-full bg-yellow-300 p-3">
        쇼핑 계속하기
      </button>
    </Link>
  );
}

export default HomeBtn;
