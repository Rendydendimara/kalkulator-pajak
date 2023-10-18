import { Box, FormHelperText, Heading, Input, Select, VStack } from "@chakra-ui/react";
import FormControllCustom from "../../../../atoms/FormControllCustom";
import InputCustom from "../../../../atoms/InputPriceFormat";
import LabelItem from "../../../../atoms/LabelItem";
import { OPTIONS_MONTH } from "../../../../constant";
import Input2Group from "../../../../molecule/Input2Group";

export default function DataKaryawan() {

    return (
        <Box>
            <Heading as="h4" size="lg">DATA KARYAWAN</Heading>
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
                                <LabelItem label="Masa Penghasilan dalam Setahun" />
                                <Select>
                                    {OPTIONS_MONTH.map((dt, i) => (
                                        <option key={i} value={dt.value}>{dt.label}</option>
                                    ))}
                                </Select>
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
                    <Box w="full" border="1px solid black" padding="2">
                        <Heading as="h2" size="md" mb="8px">Tarif Tunjangan BPJS yang dibayar perusahaan
                        </Heading>
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <Input2Group
                                label1="BPJSTK JHT (%)"
                                label2="="
                                input1={
                                    <InputCustom
                                        isTesting
                                        borderColor="black"
                                    />
                                }
                                input2={<InputCustom borderColor="black" width="200px" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"0"} />


                                }
                            />
                            <Input2Group
                                label1="BPJSTK JKK (%)"
                                label2="="
                                input1={
                                    <Select>
                                        <option value="0,24">0,24</option>
                                        <option value="0,54">0,54</option>
                                        <option value="0,89">0,89</option>
                                        <option value="1,27">1,27</option>
                                        <option value="1,74">1,74</option>
                                        <option value="0">0</option>
                                    </Select>
                                }
                                input2={<InputCustom borderColor="black" width="200px" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"0"} />
                                }
                            />
                            <Input2Group
                                label1="BPJSTK JKM (%)"
                                label2="="
                                input1={
                                    <InputCustom
                                        isTesting
                                        borderColor="black"
                                    />
                                }
                                input2={<InputCustom borderColor="black" width="200px" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"0"} />
                                }
                            />
                            <Input2Group
                                label1="BPJSTK JP (%)"
                                label2="="
                                input1={
                                    <Box>
                                        <InputCustom
                                            isTesting
                                            borderColor="black"
                                        />
                                        <FormHelperText>*dari max Rp. 9.559.600
                                        </FormHelperText>
                                    </Box>

                                }
                                input2={
                                    <InputCustom borderColor="black" width="200px" disabled _disabled={{
                                        backgroundColor: "#EEE"
                                    }} value={"0"} />
                                }
                            />
                            <Input2Group
                                label1="BPJSKES (%)"
                                label2="="
                                input1={
                                    <Box>
                                        <InputCustom
                                            isTesting
                                            borderColor="black"
                                        />
                                        <FormHelperText>*dari max Rp. 12.000.000
                                        </FormHelperText>
                                    </Box>

                                }
                                input2={
                                    <InputCustom borderColor="black" width="200px" disabled _disabled={{
                                        backgroundColor: "#EEE"
                                    }} value={"0"} />
                                }
                            />
                        </VStack>
                    </Box>
                    <Box w="full" border="1px solid black" padding="2">
                        <Heading as="h2" size="md" mb="8px">Tarif Potongan Premi BPJS & Kontribusi Pegawai
                        </Heading>
                        <VStack spacing="15px" justifyContent="flex-start" w="full">
                            <Input2Group
                                label1="BPJSTK JHT (%)"
                                label2="="
                                input1={
                                    <InputCustom
                                        isTesting
                                        borderColor="black"
                                    />
                                }
                                input2={<InputCustom borderColor="black" width="200px" disabled _disabled={{
                                    backgroundColor: "#EEE"
                                }} value={"0"} />
                                }
                            />
                            <Input2Group
                                label1="BPJSTK JP (%)"
                                label2="="
                                input1={
                                    <Box>
                                        <InputCustom
                                            isTesting
                                            borderColor="black"
                                        />
                                        <FormHelperText>*dari max Rp. 9.559.600
                                        </FormHelperText>
                                    </Box>

                                }
                                input2={
                                    <InputCustom borderColor="black" width="200px" disabled _disabled={{
                                        backgroundColor: "#EEE"
                                    }} value={"0"} />
                                }
                            />
                            <Input2Group
                                label1="BPJSKES (%)"
                                label2="="
                                input1={
                                    <Box>
                                        <InputCustom
                                            isTesting
                                            borderColor="black"
                                        />
                                        <FormHelperText>*dari max Rp. 12.000.000
                                        </FormHelperText>
                                    </Box>

                                }
                                input2={
                                    <InputCustom borderColor="black" width="200px" disabled _disabled={{
                                        backgroundColor: "#EEE"
                                    }} value={"0"} />
                                }
                            />
                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}