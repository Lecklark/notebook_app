import { Box } from '@chakra-ui/react';
import { TableColumn, TableCreator } from '@components/shared/table-creator';
import { FC, memo } from 'react';

import { ContactData } from '@/api/contacts-service/types';

import { ControlsCell } from './controls-cell';
import { ContactsTableProps } from './types';

export const ContactsTable: FC<ContactsTableProps> = memo(({ contacts }) => {
  const columns: TableColumn<ContactData>[] = [
    {
      Header: 'Имя и фамилия',
      accessor: 'fullName',
      Cell: (contact) => <Box>{contact.fullName}</Box>,
    },
    {
      Header: 'E-mail',
      accessor: 'email',
      Cell: (contact) => <Box>{contact.email}</Box>,
    },
    {
      Header: 'Телефон',
      accessor: 'phone',
      Cell: (contact) => <Box>{contact.phone}</Box>,
    },
    {
      Header: 'Адрес',
      accessor: 'address',
      Cell: (contact) => <Box>{contact.address}</Box>,
    },
    {
      Header: '',
      accessor: 'id',
      Cell: (contact) => <ControlsCell contact={contact} />,
    },
  ];

  return (
    <>
      <TableCreator columns={columns} data={contacts} />
    </>
  );
});
ContactsTable.displayName = 'ContactsTable';
