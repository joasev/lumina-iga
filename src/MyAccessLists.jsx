import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import AccessObjectsTable from './components/AccessObjectsTable';

const MyAccessLists = ({ identityData }) => {
  const theme = useTheme();

  const sortItems = (items) => {
    return items.sort((a, b) => {
      const systemA = a.system_uid.toLowerCase();
      const systemB = b.system_uid.toLowerCase();
      const nameA = a.sam_account_name.toLowerCase();
      const nameB = b.sam_account_name.toLowerCase();

      if (systemA < systemB) return -1;
      if (systemA > systemB) return 1;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  };

  const personalAccounts = identityData.accounts ? sortItems(identityData.accounts.filter(account => account.is_personal)) : [];
  const nonPersonalAccounts = identityData.accounts ? sortItems(identityData.accounts.filter(account => !account.is_personal)) : [];
  const sortedGroups = identityData.groups ? sortItems(identityData.groups) : [];

  const containerStyles = {
    backgroundColor: theme.palette.background.container,
    margin: '2em',
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '2em',
    paddingBottom: '3em',
    maxWidth: 'calc(100% - 5em)',
  };

  return (
    <Box>
      <Container sx={containerStyles} maxWidth={false}>
        <AccessObjectsTable
          objects={personalAccounts}
          title="My Personal Accounts"
          noObjectsMessage="You have no personal accounts"
          isGroup={false}
        />
      </Container>

      <Container sx={containerStyles} maxWidth={false}>
        <AccessObjectsTable
          objects={nonPersonalAccounts}
          title="My Non-personal Accounts"
          noObjectsMessage="You own no non-personal accounts"
          isGroup={false}
        />
      </Container>

      <Container sx={containerStyles} maxWidth={false}>
        <AccessObjectsTable
          objects={sortedGroups}
          title="My Groups"
          noObjectsMessage="You own no groups"
          isGroup={true}
        />
      </Container>
    </Box>
  );
};

export default MyAccessLists;
