import { Box, Heading, VStack } from "@chakra-ui/react";
import FormControllCustom from "../../../../atoms/FormControllCustom";
import InputCustom from "../../../../atoms/InputPriceFormat";
import LabelItem from "../../../../atoms/LabelItem";

export default function PERHITUNGANPPH21UPAHBORONGAN() {

    return (
        <Box>
            <Heading as="h4" size="lg">PERHITUNGAN PPH21 UPAH BORONGAN
            </Heading>
            <Box mt="20px">
                <VStack spacing="40px" justifyContent="flex-start" alignItems="flex-start" w="full">
                    <Box w="full" border="1px solid black" padding="2">
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <FormControllCustom isRequired>
                                <LabelItem fontWeight="800" label="Jumlah Upah" />
                                <InputCustom
                                    isTesting
                                    borderColor="black"
                                />
                            </FormControllCustom>
                            <FormControllCustom isRequired>
                                <LabelItem label="Pekerjaan diselesaikan dalam (Hari)" />
                                <InputCustom
                                    isTesting
                                    type="number"
                                    borderColor="black"
                                />
                            </FormControllCustom>
                            <FormControllCustom >
                                <LabelItem label="Upah Per Hari" />
                                <InputCustom
                                    isTesting
                                    borderColor="black" disabled _disabled={{
                                        backgroundColor: "#EEE"
                                    }} value={"000"}
                                />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="PPH21 Terutang" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="GAJI BERSIH (TAKE-HOME-SALARY)" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}