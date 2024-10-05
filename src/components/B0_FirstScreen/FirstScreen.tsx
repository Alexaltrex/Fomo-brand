import style from "./FirstScreen.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {Lines} from "../_common/Lines/Lines";

export const FirstScreen = () => {
    return (
        <div className={style.firstScreen}>

            <Lines count={6} className={style.linesMobile}/>
            <Lines count={13} className={style.linesDesktop}/>

            <div className={style.inner}>
                <div className={style.logo}>
                    {svgIcons.logo_full}
                </div>

                <p className={style.subtitle}>
                    Brand Guidelines
                </p>

                <button className={style.withdrawBtn}>
                    {svgIcons.withdraw}
                    <span>Download Brand & Media Kit</span>
                </button>
            </div>


        </div>
    )
}