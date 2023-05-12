import {
  TableBodyProps,
  TableCellProps,
  TableColumnHeaderProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

export type TableStyles = {
  tr?: TableRowProps;
  th?: TableColumnHeaderProps;
  thead?: TableHeadProps;
  tbody?: TableBodyProps;
  td?: TableCellProps;
  table?: TableProps;
};

export type TableColumn<T extends object> = {
  Header: ReactNode;
  accessor: keyof T;
  Cell: (row: T) => ReactNode;
};

export interface TableItem {
  id: string | number;
}

export type TableCreatorProps<T extends TableItem> = {
  columns: TableColumn<T>[];
  data: T[];
  styles?: TableStyles;
};
