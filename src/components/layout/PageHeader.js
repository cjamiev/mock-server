import React from 'react';
import Alert from './Alert';
import { SCPageHeader, SCPageHeaderTitle, SCSidepanelBtn } from './styles';

const PageHeader = ({ title }) => {
  return (
    <SCPageHeader>
      <SCPageHeaderTitle>{title}</SCPageHeaderTitle>
      <Alert />
    </SCPageHeader>
  );
};

export default PageHeader;
