import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import FormControllCustom from "../../atoms/FormControllCustom";
import LabelItem from "../../atoms/LabelItem";

interface IProps {
    label1: string;
    label2: string;
    input1: ReactNode
    input2: ReactNode
}

const Input2Group: React.FC<IProps> = (props) => {
    return (
        <Flex justifyContent="space-between" gap="40px" w="full">
            <FormControllCustom gap="10px">
                <LabelItem width="50%" textAlign="center" label={props.label1} />
                {props.input1}
            </FormControllCustom>
            <FormControllCustom width="auto" gap="40px">
                <LabelItem width="auto" label={props.label2} />
                {props.input2}
            </FormControllCustom>
        </Flex>

    );
}

export default Input2Group;