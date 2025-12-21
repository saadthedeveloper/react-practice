import style from './CSS/animation.module.css'

function ModuleCSS(){
    return(
        <div>
            <h1>Module CSS</h1>
            <div className={style.container}>
                <div className={style.ball}></div>
            </div>
        </div>
    )
}

export default ModuleCSS;