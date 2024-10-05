import style from "./Colors.module.scss"

export const Colors = () => {
    return (
        <div className={style.colors}>

            <h2 className={style.title}>
                Colors
            </h2>

            <div className={style.list}>
                {
                    [
                        "#09090A",
                        "#1F2022",
                        "#FFFFFF",
                        "#FF3D00",
                        "#ADE754",
                        "#D3F932",
                        "#242714",
                    ].map((color, key ) => (
                        <div key={key}
                             className={style.item}
                             style={{backgroundColor: color}}
                        >
                            <p>{color}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}