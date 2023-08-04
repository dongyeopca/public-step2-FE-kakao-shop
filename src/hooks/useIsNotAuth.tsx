import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import type { RootState } from '..';
import staticServerUrl from '../constants/staticUrl';

function useIsNotAuth() {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  useEffect(() => {
    if (isLogin) navigate(staticServerUrl + '/');
  }, []);
}

export default useIsNotAuth;
