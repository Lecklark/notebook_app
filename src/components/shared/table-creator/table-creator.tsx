import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { TableCreatorProps, TableItem } from './types';

export const TableCreator = <T extends TableItem>({
  columns,
  data,
  styles = {},
}: TableCreatorProps<T>) => {
  const { tr, th, thead, table, tbody, td } = styles;

  return (
    <>
      <Table {...table}>
        <Thead {...thead}>
          <Tr {...tr}>
            {columns.map((column, idx) => (
              <Th key={idx} {...th}>
                {column.Header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody {...tbody}>
          {data.map((item) => {
            return (
              <Tr {...tr} key={item.id}>
                {columns.map((column, idx) => {
                  return (
                    <Td {...td} key={`${item.id}-${idx}`}>
                      {column.Cell(item)}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};
