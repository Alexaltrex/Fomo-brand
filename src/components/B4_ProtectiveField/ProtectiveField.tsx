import style from "./ProtectiveField.module.scss"
import {svgIcons} from "../../assets/svgIcons";

export const ProtectiveField = () => {
    return (
        <div className={style.protectiveField}>

            <h2 className={style.title}>
                LOGO. protective field
            </h2>

            <p className={style.description}>
                Avoid placing any elements around the sign to create an empty space known as a 'protective field.' It is
                recommended to use the letter 'f' from the provided version as the protective field. The sign should not
                intersect with any other elements within this protective area.
            </p>

            {svgIcons.logo_f}
        </div>
    )
}