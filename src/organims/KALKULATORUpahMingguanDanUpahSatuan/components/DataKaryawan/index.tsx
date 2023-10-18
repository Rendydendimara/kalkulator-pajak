import { Box, Heading, Input, Select, VStack } from "@chakra-ui/react";
import FormControllCustom from "../../../../atoms/FormControllCustom";
import InputCustom from "../../../../atoms/InputPriceFormat";
import LabelItem from "../../../../atoms/LabelItem";

export default function DataKaryawan() {

    return (
        <Box>
            <Heading as="h4" size="lg" >DATA KARYAWAN</Heading>
            <Box mt="20px">
                <VStack spacing="40px" justifyContent="flex-start" alignItems="flex-start" w="full">
                    <Box w="full" border="1px solid black" padding="2">
                        <Heading as="h2" size="md" mb="8px">Karyawan</Heading>
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <FormControllCustom>
                                <LabelItem label="Nama Karyawan" />
                                <Input borderColor="black" w="full" />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Nomor Induk Kependudukan" />
                                <Input borderColor="black" w="full" />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Punya NPWP?" />
                                <Select>
                                    <option value="tidak">tidak</option>
                                    <option value="ya">ya</option>
                                </Select>
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Status Perkawinan/Tanggungan" />
                                <Select>
                                    <option value="TK/O">TK/O</option>
                                    <option value="K/O">K/O</option>
                                    <option value="K/1">K/1</option>
                                    <option value="K/2">K/2</option>
                                    <option value="K/3">K/3</option>
                                </Select>
                            </FormControllCustom>

                            <FormControllCustom>
                                <LabelItem label="Penghasilan Tidak Kena Pajak" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"54000000"} />
                            </FormControllCustom>

                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}