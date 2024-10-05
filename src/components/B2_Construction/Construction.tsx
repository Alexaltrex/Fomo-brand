import style from "./Construction.module.scss"
import {svgIcons} from "../../assets/svgIcons";

export const Construction = () => {
    return (
        <div className={style.construction}>
            <h2 className={style.title}>
                LOGO. construction
            </h2>
            <p className={style.description}>
                The aspect ratio of the corporate logo must remain unchanged. Distortion, altering the proportions, or adapting it to fit other elements is considered unacceptable. When resizing, the original height-to-width ratio must be preserved, ensuring proportional scaling.
            </p>

            {svgIcons.logo_slash_line}
        </div>
    )
}