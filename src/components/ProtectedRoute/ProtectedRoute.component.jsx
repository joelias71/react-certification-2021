import React from 'react';
import { Redirect } from 'react-router-dom';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

function ProtectedRoute({ Component }) {
  const isAuthenticated = storage.get(AUTH_STORAGE_KEY);

  return isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/login' }} />;
}

export default ProtectedRoute;
