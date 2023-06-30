import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}

export default Layout;
