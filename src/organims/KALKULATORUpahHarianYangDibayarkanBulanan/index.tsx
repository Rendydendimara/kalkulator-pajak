import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import DataKaryawan from "./components/DataKaryawan";
import PERHITUNGANPPH21AtasUpahHarianYangDibayarkanBulanan from "./components/PERHITUNGANPPH21AtasUpahHarianYangDibayarkanBulanan";

export default function KALKULATORUpahHarianYangDibayarkanBulananPage() {

    return (
        <Box py="10">
            <Heading as="h3" textAlign="center">Upah Harian yang Dibayarkan Bulanan
            </Heading>
            <Flex w="full" alignItems="flex-start" mt="30px" gap="30px">
                <Box w="50%"><DataKaryawan /></Box>
                <Box w="50%"><PERHITUNGANPPH21AtasUpahHarianYangDibayarkanBulanan /></Box>
            </Flex>
            <Flex w="full" alignItems="flex-start" mt="30px" gap="30px">
                <Box w="50%">
                    <Center>
                        <Button size="lg" colorScheme="blue">Print Form</Button>
                    </Center>
                </Box>
                <Box w="50%">
                    <Center>
                        <Button size="lg" colorScheme="blue">Reset Form</Button>
                    </Center>
                </Box>
            </Flex>


        </Box>
    );
}