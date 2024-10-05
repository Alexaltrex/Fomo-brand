import React from 'react';
import style from "./App.module.scss";
import {FirstScreen} from "../B0_FirstScreen/FirstScreen";
import {SecondScreen} from "../B1_SecondScreen/SecondScreen";
import {Construction} from "../B2_Construction/Construction";
import {ColorWhiteBlackLogos} from "../B3_ColorWhiteBlackLogos/ColorWhiteBlackLogos";
import {ProtectiveField} from "../B4_ProtectiveField/ProtectiveField";
import {Typography} from "../B5_Typography/Typography";
import {Colors} from "../B6_Colors/Colors";
import {AppIcon} from "../B7_AppIcon/AppIcon";
import {Iconography} from "../B8_Iconography/Iconography";

export const App = () => {
    return (
        <div className={style.app}>
            <FirstScreen/>
            <SecondScreen/>
            <Construction/>
            <ColorWhiteBlackLogos/>
            <ProtectiveField/>
            <Typography/>
            <Colors/>
            <AppIcon/>
            <Iconography/>
        </div>
    );
}

