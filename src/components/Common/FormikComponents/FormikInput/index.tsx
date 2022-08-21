import {FC, useMemo} from "react";
import {useField} from "formik";
import {FIELD_REQUIRED_ERROR_MESSAGE} from "../../../../constants";
import {FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";
import {FormikInputProps} from "../../../../types";

const FormikInput:FC<FormikInputProps>=({name,id,label,...rest})=>{

    const [field, meta, { setValue, setTouched }] = useField(name);

    const errorMessage:string|null = useMemo(()=>{
        if (meta.error) {
            const message = meta.value==='' ? FIELD_REQUIRED_ERROR_MESSAGE : meta.error;
            return message
        }
        return null
    },[meta.error,meta.value])

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
                    h={10}
                    onBlur={(e) => {
                        setValue(e.target.value.trim());
                        setTouched(true);
                    }}
                />
                <InputRightElement children={<CheckIcon color='green.500' />}
                                   opacity={(!meta.error && meta.touched) ? '1' : '0'}
                />
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

export default FormikInput