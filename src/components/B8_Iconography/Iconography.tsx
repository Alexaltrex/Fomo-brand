import style from "./Iconography.module.scss"
import {icons} from "./icons";
import {Fragment} from "react";
import {svgIcons} from "../../assets/svgIcons";

export const Iconography = () => {
    return (
        <div className={style.iconography}>

            <div className={style.top}>
                <h2 className={style.title}>
                    App Icon
                </h2>

                <div className={style.descriptions}>
                    <p>
                        We chose the pixelated style for our icons to evoke a sense of nostalgia while standing out with
                        a
                        unique and recognizable design.
                    </p>
                    <p>
                        This retro-inspired look adds character, ensuring clarity even at
                        small sizes, and reflects our blend of creativity, tradition, and modern innovation.
                    </p>
                </div>

                <p className={style.downloadTitle}>
                    Download icons
                </p>

                <p className={style.downloadDescription}>
                    This zip file contains PNGs and SVGs of the icons
                </p>

                <button className={style.btn}>
                    {svgIcons.withdraw}<span>Download icons</span>
                </button>


            </div>

            <div className={style.icons}>
                {icons.map((icon, key) => (
                    <Fragment key={key}>
                        {icon}
                    </Fragment>
                ))}
            </div>

        </div>
    )
}