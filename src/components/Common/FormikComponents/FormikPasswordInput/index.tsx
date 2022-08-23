import {FC, useMemo, useState} from "react";
import {useField} from "formik";
import {FIELD_REQUIRED_ERROR_MESSAGE} from "../../../../constants";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    IconButton,
    Input,
    Text,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {FormikInputProps} from "../../../../types";


const FormikPasswordInput: FC<FormikInputProps> = ({name, id, label, ...rest}) => {

    const [field, meta, {setValue, setTouched}] = useField(name);
    const [show, setShow] = useState(false);

    const errorMessage: string | null = useMemo(() => {
        if (meta.error) {
            const message = meta.value === '' ? FIELD_REQUIRED_ERROR_MESSAGE : meta.error;
            return message
        }
        return null
    }, [meta.error, meta.value])

    return (
        <FormControl
            id={id}
            isInvalid={!!meta.error && meta.touched}
            position='relative'
        >
            <FormLabel fontWeight={600} fontSize='md' textTransform='capitalize'>
                {label}
            </FormLabel>
            <InputGroup>
                <Input
                    {...field}
                    {...rest}
                    borderWidth={1}
                    borderRadius={"10px"}
                    fontSize='md'
                    lineHeight={4}
                    type={show ? "text" : "password"}
                    h={10}
                    onBlur={(e) => {
                        setValue(e.target.value.trim());
                        setTouched(true);
                    }}
                />
                <InputRightElement>
                    <IconButton
                        colorScheme="teal"
                        aria-label="view pass button"
                        size="sm"
                        borderRadius='6px'
                        onClick={() => setShow(prev => !prev)}
                        icon={show ? <ViewIcon/> : <ViewOffIcon/>}
                        outline='none'
                    />
                </InputRightElement>
            </InputGroup>
            <FormErrorMessage position='absolute'
                              right='0'
                              top='70px'
                              justifyContent='flex-end'>
                <Text noOfLines={2} textAlign='right'>{errorMessage}</Text>
            </FormErrorMessage>
        </FormControl>
    );
}

export default FormikPasswordInput