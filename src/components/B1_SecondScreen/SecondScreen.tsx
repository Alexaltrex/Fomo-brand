import style from "./SecondScreen.module.scss"
import {svgIcons} from "../../assets/svgIcons";
export const SecondScreen = () => {
    return (
        <div className={style.secondScreen}>
            <div className={style.top}>
                {svgIcons.logo_2_line}
            </div>
            <div className={style.bottom}>
                {svgIcons.logo_outlined}
            </div>
        </div>
    )
}