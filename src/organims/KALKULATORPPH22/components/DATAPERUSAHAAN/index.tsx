import { Box, Heading, Input, Select, VStack } from "@chakra-ui/react";
import FormControllCustom from "../../../../atoms/FormControllCustom";
import LabelItem from "../../../../atoms/LabelItem";

export default function DATAPERUSAHAAN() {

    return (
        <Box>
            <Heading as="h4" size="lg" >DATA PERUSAHAAN
            </Heading>
            <Box mt="20px">
                <VStack spacing="40px" justifyContent="flex-start" alignItems="flex-start" w="full">
                    <Box w="full" border="1px solid black" padding="2">
                        <Box w="full" border="1px solid black" padding="2">
                            <Heading as="h2" size="md" mb="8px">Perusahaan</Heading>
                            <VStack spacing="15px" justifyContent="flex-start" w="full">
                                <FormControllCustom>
                                    <LabelItem label="Nama Perusahaan" />
                                    <Input borderColor="black" w="full" />
                                </FormControllCustom>
                                <FormControllCustom>
                                    <LabelItem label="Punya NPWP?" />
                                    <Select>
                                        <option value="tidak">tidak</option>
                                        <option value="ya">ya</option>
                                    </Select>
                                </FormControllCustom>
                            </VStack>
                        </Box>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}