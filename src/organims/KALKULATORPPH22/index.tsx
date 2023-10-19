import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import DATAPERUSAHAAN from "./components/DATAPERUSAHAAN";
import PERHITUNGANPPH22 from "./components/PERHITUNGANPPH22";

export default function KALKULATORPPH22Page() {

    return (
        <Box py="10">
            <Heading as="h3" textAlign="center">KALKULATOR PPH22</Heading>
            <Flex w="full" alignItems="flex-start" mt="30px" gap="30px">
                <Box w="50%"><DATAPERUSAHAAN /></Box>
                <Box w="50%"><PERHITUNGANPPH22 /></Box>
            </Flex>
            <Box>
                <Text mb="10px" fontSize="sm" fontWeight="800">Catatan</Text>
                <Text mb="10px" fontSize="12px" fontStyle="italic">
                    *DPP = Nilai Impor (Nilai impor adalah nilai berupa uang yang menjadi dasar penghitungan Bea Masuk yaitu Cost Insurance and Freight (CIF) ditambah dengan Bea Masuk dan pungutan lainnya yang dikenakan berdasarkan ketentuan peraturan perundang-undangan kepabeanan di bidang impor)
                </Text>

                <Text mb="10px" fontSize="12px" fontStyle="italic">
                    **DPP = DPP PPN (Tidak Final)
                </Text>

                <Text mb="10px" fontSize="12px" fontStyle="italic">
                    ***Atas penjualan hasil produksi atau penyerahan barang oleh produsen atau importir bahan bakar minyak,gas, dan pelumas adalah Pungutan PPh Pasal 22 kepada penyalur/agen, bersifat final. Selain penyalur/agen bersifat tidak final.
                </Text>

                <Text mb="10px" fontSize="12px" fontStyle="italic">
                    ****DPP = harga pembelian (tidak termasuk PPN dan tidak final)
                </Text>

                <Text mb="10px" fontSize="12px" fontStyle="italic">
                    ***** (1) Pesawat udara pribadi dengan harga jual lebih dari Rp 20.000.000.000,- (2) Kapal pesiar dan sejenisnya dengan harga jual lebih dari Rp 10.000.000.000,- (3) Rumah beserta tanahnya dengan harga jual atau harga pengalihannya lebih dari Rp 10.000.000.000,- dan luas bangunan lebih dari 500 m2. (4) Apartemen, kondominium,dan sejenisnya dengan harga jual atau pengalihannya lebih dari Rp 10.000.000.000,- dan/atau luas bangunan lebih dari 400 m2. (5) Kendaraan bermotor roda empat pengangkutan orang kurang dari 10 orang berupa sedan, jeep, sport utility vehicle(suv), multi purpose vehicle (mpv), minibus dan sejenisnya dengan harga jual lebih dari Rp 5.000.000.000,- (lima miliar rupiah) dan dengan kapasitas silinder lebih dari 3.000
                </Text>

                <Text mb="10px" fontSize="sm" fontWeight="800">Tidak Memiliki NPWP</Text>
                <Text mb="10px" fontSize="12px" fontStyle="italic">
                    Untuk yang tidak memiliki NPWP dipotong 100% lebih tinggi dari tarif PPh Pasal 22.
                </Text>
            </Box>
            <Flex w="full" alignItems="flex-start" mt="30px" gap="30px">
                <Center w="full">
                    <Button size="lg" colorScheme="blue">Print Form</Button>
                </Center>
            </Flex>


        </Box>
    );
}