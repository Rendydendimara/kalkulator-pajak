import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import FormControllCustom from "../../atoms/FormControllCustom";
import InputCustom from "../../atoms/InputPriceFormat";
import LabelItem from "../../atoms/LabelItem";
import DataKaryawan from "./components/DataKaryawan";
import PerhitunganPPH21 from "./components/PerhitunganPPH21";

export default function KALKULATORPPH21GROSSUPPegawaiTetapPage() {

    return (
        <Box py="10">
            <Heading as="h3" textAlign="center">KALKULATOR PPH21 – GROSSUP (Pegawai Tetap)</Heading>
            <Flex w="full" alignItems="flex-start" mt="30px" gap="30px">
                <Box w="50%"><DataKaryawan /></Box>
                <Box w="50%"><PerhitunganPPH21 /></Box>
            </Flex>
            <Flex mt="6" p="2" border="1px solid black" alignItems="center" gap="10px">
                <FormControllCustom>
                    <LabelItem textAlign="center" fontWeight="800" label="JUMLAH PENGHASILAN" />
                    <InputCustom borderColor="black" width="full" disabled _disabled={{
                        backgroundColor: "#EEE"
                    }} value={"0"} />

                </FormControllCustom>
                <FormControllCustom>
                    <LabelItem textAlign="center" fontWeight="800" label="GAJI BERSIH (TAKE-HOME-SALARY)" />
                    <InputCustom borderColor="black" width="full" disabled _disabled={{
                        backgroundColor: "#EEE"
                    }} value={"0"} />
                </FormControllCustom>
            </Flex>
            <Flex w="full" alignItems="flex-start" mt="30px" gap="30px">
                <Center w="full">
                    <Button size="lg" colorScheme="blue">Print Form</Button>
                </Center>
            </Flex>
        </Box>
    );
}