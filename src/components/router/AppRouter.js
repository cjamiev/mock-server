import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

import Mockserver from 'components/pages/Mockserver';
import ErrorPage from 'components/pages/ErrorPage';

const AppRouter = React.memo(() => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to={ROUTES.HOME.url} />} />}
      <Route path={ROUTES.HOME.url} element={<Mockserver />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
});

export default AppRouter;
