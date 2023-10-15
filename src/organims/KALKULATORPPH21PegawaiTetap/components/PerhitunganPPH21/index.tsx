import { Box, Heading, VStack } from "@chakra-ui/react";
import FormControllCustom from "../../../../atoms/FormControllCustom";
import InputCustom from "../../../../atoms/InputPriceFormat";
import LabelItem from "../../../../atoms/LabelItem";

export default function PerhitunganPPH21() {

    return (
        <Box>
            <Heading as="h4" >PERHITUNGAN PPH21
            </Heading>
            <Box mt="20px">
                <VStack spacing="40px" justifyContent="flex-start" alignItems="flex-start" w="full">
                    <Box w="full" border="1px solid black" padding="2">
                        <Heading as="h2" size="md" mb="8px">Penghasilan</Heading>
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <FormControllCustom isRequired>
                                <LabelItem fontWeight="800" label="Gaji Pokok" />
                                <InputCustom
                                    isTesting
                                    borderColor="black"
                                />
                            </FormControllCustom>
                            <FormControllCustom >
                                <LabelItem label="Tunjangan Tetap Lainnya" />
                                <InputCustom
                                    isTesting
                                    borderColor="black"
                                />
                            </FormControllCustom>
                            <FormControllCustom >
                                <LabelItem label="Tantiem, Bonus dan THR" />
                                <InputCustom
                                    isTesting
                                    borderColor="black"
                                />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Tunjangan PPh" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="JumlahTunjangan JKK + JKM Perusahaan" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Jumlah Tunjangan BPJSKES" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem fontWeight="800" label="Jumah Penghasilan Bruto" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                        </VStack>
                    </Box>
                    <Box w="full" border="1px solid black" padding="2">
                        <Heading as="h2" size="md" mb="8px">Pengurang</Heading>
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <FormControllCustom>
                                <LabelItem label="Biaya Jabatan" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Iuran Pensiun (Premi JHT+JP Pegawai)" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem fontWeight="800" label="Penghasilan Neto" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                        </VStack>
                    </Box>
                    <Box w="full" border="1px solid black" padding="2">
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <FormControllCustom>
                                <LabelItem label="Penghasilan disetahunkan" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Penghasilan Tidak Kena Pajak" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"5400000000"} />
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
                                <LabelItem label="Potongan PPh 21 atas Bonus/THR" />
                                <InputCustom borderColor="black" width="full" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"000"} />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem fontWeight="800" label="Jumalah PPh 21 Bulan ini" />
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