import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EnumCalculatorType } from "../enum";
import KALKULATORPPH21PegawaiTetapPage from "../organims/KALKULATORPPH21PegawaiTetap";

export default function KalkulatorPage() {
    const navigate = useNavigate();
    const [calculatorType, setCalculatorType] = useState('')
    const [searchParams] = useSearchParams();

    useEffect(() => {
        let type: any = searchParams.get("type")
        type = type === 'undefined' ? null : type
        if (type) {
            setCalculatorType(type)
        } else {
            navigate('/')
        }
    }, [searchParams]);

    if (calculatorType === EnumCalculatorType.KALKULATORPPH21GROSSUPPegawaiTetap) {
        return (
            <KALKULATORPPH21PegawaiTetapPage />
        )
    }

    return (
        <Box>
            Please select valid calculator type
        </Box>
    );
}