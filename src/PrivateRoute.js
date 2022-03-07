import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute({ element, path }) {
  const auth = localStorage.getItem('authToken');

  console.log(auth);

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
