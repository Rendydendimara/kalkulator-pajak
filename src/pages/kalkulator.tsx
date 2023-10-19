import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EnumCalculatorType } from "../enum";
import KALKULATORPPH21PegawaiTetapPage from "../organims/KALKULATORPPH21PegawaiTetap";
import KALKULATORPPH21GROSSUPPegawaiTetapPage from "../organims/KALKULATORPPH21GROSSUPPegawaiTetap";
import KALKULATORUpahMingguanDanUpahSatuanPage from "../organims/KALKULATORUpahMingguanDanUpahSatuan";
import KALKULATORUpahBoronganPage from "../organims/KALKULATORUpahBorongan";
import KALKULATORUpahHarianYangDibayarkanBulananPage from "../organims/KALKULATORUpahHarianYangDibayarkanBulanan";
import KALKULATORPPH22Page from "../organims/KALKULATORPPH22";

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

    if (calculatorType === EnumCalculatorType.KALKULATORPPH21PegawaiTetap) {
        return (
            <KALKULATORPPH21PegawaiTetapPage />
        )
    }
    if (calculatorType === EnumCalculatorType.KALKULATORPPH21GROSSUPPegawaiTetap) {
        return (
            <KALKULATORPPH21GROSSUPPegawaiTetapPage />
        )
    }
    if (calculatorType === EnumCalculatorType.KALKULATORUpahMingguanDanUpahSatuan) {
        return (
            <KALKULATORUpahMingguanDanUpahSatuanPage />
        )
    }
    if (calculatorType === EnumCalculatorType.KALKULATORUpahBorongan) {
        return (
            <KALKULATORUpahBoronganPage />
        )
    }
    if (calculatorType === EnumCalculatorType.KALKULATORUpahHarianYangDibayarkanBulanan) {
        return (
            <KALKULATORUpahHarianYangDibayarkanBulananPage />
        )
    }
    if (calculatorType === EnumCalculatorType.KALKULATORPPH22) {
        return (
            <KALKULATORPPH22Page />
        )
    }



    return (
        <Box>
            Please select valid calculator type
        </Box>
    );
}