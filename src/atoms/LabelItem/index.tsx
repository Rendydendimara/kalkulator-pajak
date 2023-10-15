import { FormLabel } from "@chakra-ui/react";
import React from "react";

interface IProps {
    label: string;
    width?: string;
    textAlign?: any;
    fontWeight?: any
}

const LabelItem: React.FC<IProps> = (props) => {
    return (
        <FormLabel
            fontWeight={props?.fontWeight ?? 'initial'}
            textAlign={props?.textAlign ?? "initial"} whiteSpace="pre" maxW={props?.width ?? "50%"} minW={props?.width ?? "50%"}>{props.label}</FormLabel>
    );
}

export default LabelItem;