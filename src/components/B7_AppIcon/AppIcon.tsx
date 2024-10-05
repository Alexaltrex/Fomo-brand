import style from "./AppIcon.module.scss"
import {svgIcons} from "../../assets/svgIcons";

export const AppIcon = () => {
    return (
        <div className={style.appIcon}>

            <h2 className={style.title}>
                App Icon
            </h2>

            <p className={style.description}>
                The use of white adds lightness and openness, which makes it ideal for dark backgrounds or colored elements, creating contrast and attracting attention. This version of the logo emphasizes the minimalism and modern approach of the brand.
            </p>

            <div className={style.icon}>
                {svgIcons.logo_short}
                <div><p>5</p></div>
            </div>

        </div>
    )
}