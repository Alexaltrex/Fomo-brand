import style from "./ColorWhiteBlackLogos.module.scss"
import {svgIcons} from "../../assets/svgIcons";

export const ColorWhiteBlackLogos = () => {
    return (
        <div className={style.colorWhiteBlackLogos}>
            {
                [
                    {
                        title: "cOLOR Logo",
                        descriptions: [
                            "Our logo is an elegant combination of modern minimalism and restrained aesthetics.",
                            "It is a text logo with an emphasis on the letter “F”, which symbolizes the brand's individuality. Elegant lines and well-considered proportions create a sense of harmony and simplicity, conveying the modern spirit of the brand.",
                            "As a result, the logo looks easily recognizable and concise, maintaining a professional and up-to-date look in various formats and environments.",
                        ],
                        download: {
                            title: "Download logos",
                            description: "This zip file contains PNGs and SVGs of the basic Fomo Factory logos.",
                            buttonLabel: "Download basic Fomo Factory logos",
                        },
                        colors: {
                            backgroundColor: "transparent",
                            svg: "#D3F932",
                            text: "rgba(255, 255, 255, 0.5)",
                        }
                    },
                    {
                        title: "white Logos",
                        descriptions: [
                            "The use of white adds lightness and openness, which makes it ideal for dark backgrounds or colored elements, creating contrast and attracting attention. This version of the logo emphasizes the minimalism and modern approach of the brand.",
                        ],
                        download: {
                            title: "Download white logos",
                            description: "This zip file contains PNGs and SVGs of the white Fomo Factory logos.",
                            buttonLabel: "Download white Fomo Factory logos",
                        },
                        colors: {
                            backgroundColor: "transparent",
                            svg: "#FFF",
                            text: "rgba(255, 255, 255, 0.5)",
                        }
                    },
                    {
                        title: "black Logos",
                        descriptions: [
                            "The deep black color adds austerity and conciseness, making the logo versatile for any light background. This solution ensures maximum readability and expressiveness while maintaining a modern aesthetic",
                        ],
                        download: {
                            title: "Download black logos",
                            description: "This zip file contains PNGs and SVGs of the black Fomo Factory logos.",
                            buttonLabel: "Download black Fomo Factory logos",
                        },
                        colors: {
                            backgroundColor: "#d3f932",
                            svg: "#09090A",
                            text: "#09090a",
                        }
                    },
                ].map(({
                           title,
                           descriptions,
                           download,
                           colors
                       }, key) => (
                    <div key={key}
                         className={style.block}
                    >

                        <div className={style.top}>

                            <h2 className={style.title}>
                                {title}
                            </h2>

                            <div className={style.descriptions}>
                                {
                                    descriptions.map((text, key) => (
                                       <p key={key}>{text}</p>
                                    ))
                                }
                            </div>

                            <p className={style.downloadTitle}>
                                {download.title}
                            </p>

                            <p className={style.downloadDescription}>
                                {download.description}
                            </p>

                            <button className={style.btn}>
                                {svgIcons.withdraw}<span>{download.buttonLabel}</span>
                            </button>

                        </div>

                        <div className={style.bottom}
                             style={{
                                 backgroundColor: colors.backgroundColor
                             }}
                        >
                            {
                                [
                                    {
                                        icon: svgIcons.logo_short,
                                        label: "Logo Mark",
                                    },
                                    {
                                        icon: svgIcons.logo_2_line,
                                        label: "Vertical Logo",
                                    },
                                    {
                                        icon: svgIcons.logo_full,
                                        label: "Horizontal Logo",
                                    },

                                ].map(({icon, label}, key) => (
                                    <div key={key}
                                         className={style.bottomItem}
                                    >
                                        {icon}
                                        <p>{label}</p>
                                    </div>
                                ))
                            }


                        </div>

                    </div>
                ))
            }
        </div>
    )
}