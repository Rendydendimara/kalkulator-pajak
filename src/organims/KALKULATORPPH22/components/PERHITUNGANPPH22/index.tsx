import { Box, Heading, Select, VStack } from "@chakra-ui/react";
import FormControllCustom from "../../../../atoms/FormControllCustom";
import InputCustom from "../../../../atoms/InputPriceFormat";
import LabelItem from "../../../../atoms/LabelItem";

export default function PERHITUNGANPPH22() {

    return (
        <Box>
            <Heading as="h4" size="lg">PERHITUNGAN PPH22
            </Heading>
            <Box mt="20px">
                <VStack spacing="40px" justifyContent="flex-start" alignItems="flex-start" w="full">
                    <Box w="full" border="1px solid black" padding="2">
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <FormControllCustom isRequired>
                                <LabelItem label="Dasar Pengenaan Pajak (DPP)" />
                                <InputCustom
                                    isTesting
                                    borderColor="black"
                                />
                            </FormControllCustom>
                            <FormControllCustom isRequired>
                                <LabelItem label="Jenis Pajak" />
                                <Select>
                                    <option value="2.50" >PPh Atas Impor Dengan Angka Pengenal Impor (API)*</option>
                                    <option value="7.50" >PPh Atas Impor Tanpa Angka Pengenal Impor (Non-API)*</option>
                                    <option value="0.5" >Impor Kedelai, Gandum dan Tepung Terigu oleh Importir yang Menggunakan API*</option>
                                    <option value="0.25" >Penjualan Hasil Industri Semen**</option>
                                    <option value="0.10" >Penjualan Hasil Industri Kertas**</option>
                                    <option value="0.30" >Penjualan Hasil Industri Baja**</option>
                                    <option value="0.45" >Penjualan Hasil Industri Otomotif**</option>
                                    <option value="1.50" >Penjualan Hasil Industri/Eksportir Sektor Perhutanan, Perkebunan, Pertanian dan Perikanan**</option>
                                    <option value="0">BBM, Gas dan Pelumas (Final)***</option>
                                    <option value="0" >BBM, Gas dan Pelumas (Tidak Final)***</option>
                                    <option value="1.50" >Pembelian Barang oleh DJPB, Bendahara Pemerintah, BUMN/BUMD****</option>
                                    <option value="0.30" >Farmasi</option>
                                    <option value="5">Atas Penjualan Barang Tertentu*****</option>
                                </Select>
                            </FormControllCustom>
                            <FormControllCustom >
                                <LabelItem label="Tarif Pajak (%)" />
                                <InputCustom
                                    isTesting
                                    borderColor="black" disabled _disabled={{
                                        backgroundColor: "#EEE"
                                    }} value={"000"}
                                />
                            </FormControllCustom>
                            <FormControllCustom>
                                <LabelItem label="Nilai PPH22" />
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