import {Table, TableCellProps, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {Column, useTable} from 'react-table';
import {FC} from "react";
import {TableBodyProps, TableColumnHeaderProps, TableHeadProps, TableProps, TableRowProps} from "@chakra-ui/table";

export interface TableStyles {
    tr?: TableRowProps;
    th?: TableColumnHeaderProps;
    thead?: TableHeadProps;
    tbody?: TableBodyProps;
    td?: TableCellProps;
    table?: TableProps;
}

interface TableCreatorProps {
    columns: Column[];
    data: {}[];
    styles?: TableStyles;
}

const TableCreator: FC<TableCreatorProps> = ({
                                                 columns,
                                                 data,
                                                 styles = {},
                                             }) => {
    const {tr, th, thead, table, tbody, td} = styles;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });


    return (
        <>
            <Table {...getTableProps()} {...table}>
                <Thead {...thead}>
                    {headerGroups.map(headerGroup => (
                        <Tr {...headerGroup.getHeaderGroupProps()} {...tr}>
                            {headerGroup.headers.map(column => (
                                <Th {...column.getHeaderProps()} {...th}>{column.render('Header')}</Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()} {...tbody}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <Tr {...row.getRowProps()} {...tr} >
                                {row.cells.map(cell => {
                                    return <Td {...cell.getCellProps()}
                                               {...td}
                                    >
                                        {cell.render('Cell')}
                                    </Td>;
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>

        </>
    );
}

export default TableCreator