import { Box } from '@chakra-ui/react';
import { TableColumn, TableCreator } from '@components/shared/table-creator';
import { FC, memo } from 'react';

import { ContactData } from '@/api/contacts-service/types';
import { MESSAGES, useI18N } from '@/lib/i18n';

import { ControlsCell } from './controls-cell';
import { ContactsTableProps } from './types';

export const ContactsTable: FC<ContactsTableProps> = memo(({ contacts }) => {
  const [fullNameHeader, emailHeader, phoneHeader, addressHeader] = useI18N(
    MESSAGES.FULLNAME_INPUT_LABEL,
    MESSAGES.CONTACT_EMAIL_INPUT_LABEL,
    MESSAGES.PHONE_INPUT_LABEL,
    MESSAGES.ADDRESS_INPUT_LABEL,
  );

  const columns: TableColumn<ContactData>[] = [
    {
      Header: fullNameHeader,
      accessor: 'fullName',
      Cell: (contact) => <Box>{contact.fullName}</Box>,
    },
    {
      Header: emailHeader,
      accessor: 'email',
      Cell: (contact) => <Box>{contact.email}</Box>,
    },
    {
      Header: phoneHeader,
      accessor: 'phone',
      Cell: (contact) => <Box>{contact.phone}</Box>,
    },
    {
      Header: addressHeader,
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
    <Box overflow='auto'>
      <TableCreator columns={columns} data={contacts} />
    </Box>
  );
});
ContactsTable.displayName = 'ContactsTable';
