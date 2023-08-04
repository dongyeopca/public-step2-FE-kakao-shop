import React from 'react';
import { Link } from 'react-router-dom';
import staticServerUrl from '../../../constants/staticUrl';

function OrderBtn() {
  return (
    <Link to={staticServerUrl + '/pay'}>
      <button type="button" className="bg-yellow-300 p-3 font-bold w-full">
        주문하기
      </button>
    </Link>
  );
}

export default OrderBtn;
