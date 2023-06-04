import { NavLink } from "react-router-dom"
import s from './Main.module.scss'

const Main = () => {
    return <div className={s.MainBG}>
        <div className={s.MainBox}>
            <div>

                <h2 className={s.MainHeadLineText}>Short pages</h2>
                <div>
                    <ul className={s.MainLiStyle}>
                        <li><NavLink className={s.CreativeStudio} to='/CreativeStudio'>Creative Studio</NavLink></li>
                    </ul>
                </div>

            </div>
            <div>

                <h2 className={s.MainHeadLineText}>With routes</h2>
                <div>
                    <ul className={s.MainLiStyle}>
                        <li>Comming Soon</li>
                    </ul>
                </div>

            </div>
            {/* <div>

            <h2>Animation and effects</h2>
            <div>
                <ul>
                    <li>Comming Soon</li>
                </ul>
            </div>

        </div> */}
        </div>
    </div>
}

export default Main