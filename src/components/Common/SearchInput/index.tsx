import {ChangeEventHandler, FC} from "react";
import {Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {Icon, SearchIcon} from "@chakra-ui/icons";

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<SearchInputProps> = ({value, onChange, placeholder}) => {

    return (
        <>
            <InputGroup>
                <Input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <InputRightElement>
                    <Icon as={SearchIcon} color='custom.gray.200'/>
                </InputRightElement>
            </InputGroup>
        </>
    )
}

export default SearchInput