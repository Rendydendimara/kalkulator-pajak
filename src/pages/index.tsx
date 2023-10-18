import { Box, Button, Flex, FormControl, FormLabel, Heading, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnumCalculatorType } from "../enum";

export default function IndexPage() {
    const navigate = useNavigate();
    const [selectedCalculator, setSelectedCalculator] = useState()

    const onChangeType = (e: any) => {
        // console.log(e.target.value)
        setSelectedCalculator(e.target.value)
    }

    const onSubmit = () => {

        navigate(`/kalkulator?type=${selectedCalculator}`);

    }

    return (
        <Box>
            <Flex h="100vh" w="full" justifyContent="center" alignItems="center">
                <Box w="700px" boxShadow="lg" p="10">
                    <Heading as="h2">KALKULATOR PAJAK ONLINE</Heading>
                    <FormControl mt="30px" >
                        <FormLabel>Tipe kalkulator</FormLabel>
                        <Select onChange={onChangeType} value={selectedCalculator}>
                            <option ></option>
                            <option value={EnumCalculatorType.KALKULATORPPH21PegawaiTetap}>{EnumCalculatorType.KALKULATORPPH21PegawaiTetap}</option>
                            <option value={EnumCalculatorType.KALKULATORPPH21GROSSUPPegawaiTetap}>{EnumCalculatorType.KALKULATORPPH21GROSSUPPegawaiTetap}</option>
                        </Select>
                    </FormControl>
                    <Text mt="30px">
                        {selectedCalculator}
                    </Text>
                    <Button isDisabled={selectedCalculator ? false : true} onClick={onSubmit} w="full" colorScheme="green" mt="30px">
                        Submit
                    </Button>

                </Box>

            </Flex>
        </Box>
    );
}