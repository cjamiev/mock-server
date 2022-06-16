import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import Button from 'components/atoms/Button';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import { openSidePanel, closeSidePanel } from 'components/molecules/Global/globalActions';
import { SCLayout, SCPageWrapper, SCPage, SCPageContent } from './styles';

const NAV_ITEMS = Object.values(ROUTES);

const Page = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPage = NAV_ITEMS.find((item) => item.url === location.pathname);

  return (
    <SCLayout>
      <SCPageWrapper>
        <SCPage>
          <PageHeader title={currentPage.label} />
          <div>{children}</div>
        </SCPage>
      </SCPageWrapper>
    </SCLayout>
  );
};

export default Page;
