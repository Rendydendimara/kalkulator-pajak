import { Box, Heading, VStack } from "@chakra-ui/react";
import FormControllCustom from "../../../../atoms/FormControllCustom";
import InputCustom from "../../../../atoms/InputPriceFormat";
import LabelItem from "../../../../atoms/LabelItem";

export default function PERHITUNGANPPH21AtasUpahHarianYangDibayarkanBulanan() {

    return (
        <Box>
            <Heading as="h4" size="lg">PERHITUNGAN PPH21 atas Upah Harian yang Dibayarkan Bulanan
            </Heading>
            <Box mt="20px">
                <VStack spacing="40px" justifyContent="flex-start" alignItems="flex-start" w="full">
                    <Box w="full" border="1px solid black" padding="2">
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <FormControllCustom isRequired>
                                <LabelItem fontWeight="800" label="Upah Per Hari" />
                                <InputCustom
                                    isTesting
                                    borderColor="black"
                                />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Hari Kerja Dalam Sebulan" />
                                <InputCustom
                                    isTesting
                                    type="number"
                                    borderColor="black"
                                />
                            </FormControllCustom>
                            <FormControllCustom >
                                <LabelItem label="Upah Sebulan" />
                                <InputCustom
                                    isTesting
                                    borderColor="black" disabled _disabled={{
                                        backgroundColor: "#EEE"
                                    }} value={"000"}
                                />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem fontWeight="800" label="Penghasilan Neto Setahun" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Penghasilan Tidak Kena Pajak" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"54000000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Penghasilan Kena Pajak" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="PPh 21 terutang (Setahun)" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="PPh 21 atas Gaji Bulan ini" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem fontWeight="800" label="GAJI BERSIH (TAKE-HOME-SALARY)" />
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