import style from "./Typography.module.scss"
import {svgIcons} from "../../assets/svgIcons";

export const Typography = () => {
    return (
        <div className={style.typography}>

            <div className={style.top}>

                <h2 className={style.title}>
                    Typography
                </h2>
                <div className={style.wrapper}>
                    <p className={style.label}>
                        Space Mono
                    </p>
                    <p className={style.alphabet}>
                        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890,«»„“:;?!@#$%&*()
                    </p>
                    <button className={style.btn}>
                        {svgIcons.withdraw}<span>Download Space Mono font</span>
                    </button>
                </div>
            </div>

            <div className={style.bottom}>
                {
                    [
                        "Body Regular",
                        "Heading 1 Regular",
                       "Heading 2 Bold",
                    ].map((font, key) => (
                        <div key={key}
                             className={style.bottomItem}
                        >
                            <div className={style.bottomItemTop}>
                                <p>{font}</p>
                                <p>12 px</p>
                            </div>
                            <p className={style.testText}>Aa</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}