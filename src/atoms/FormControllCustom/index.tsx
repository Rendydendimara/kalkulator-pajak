import { FormControl } from "@chakra-ui/react";
import React from "react";

interface IProps {
    children: any
    gap?: string;
    width?: string;
    spaceBetween?: string;
    isRequired?: boolean
}

const FormControllCustom: React.FC<IProps> = (props) => {
    return (
        <FormControl isRequired={props.isRequired} justifyContent={props?.spaceBetween ?? "initial"} alignItems="center" width={props?.width ?? 'full'} display="flex" gap={props.gap ?? "initial "}>
            {props.children}
        </FormControl>

    );
}

export default FormControllCustom;