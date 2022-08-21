import {FC} from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList,Text} from "@chakra-ui/react";
import {ROWS_PER_TABLE_PAGE} from "../../../../constants";

interface RowCountChangerProps{
    onChange:(num:number)=>void;
    currentValue:number;
}

const RowCountChanger:FC<RowCountChangerProps>=({onChange,currentValue})=> {

    return (
        <>
            <Text mr='10px'>Rows: </Text>
            <Menu autoSelect={false}>
                <MenuButton as={Button}
                            color='teal'
                            bg='none'
                            fontSize='inherit'
                            textDecoration='underline'
                            w='30px'
                            height='30px'
                            p='2px'
                >
                    {currentValue}
                </MenuButton>
                <MenuList>
                    {ROWS_PER_TABLE_PAGE.map((count) => {
                        return (
                            <MenuItem onClick={()=>onChange(count)}
                                      fontWeight={currentValue === count ? 600 : 400}
                                      color={currentValue === count ? 'teal' : 'inherit'}
                                      key={count}
                            >
                                {count}
                            </MenuItem>
                        )
                    })}
                </MenuList>
            </Menu>
        </>
    )
}

export default RowCountChanger