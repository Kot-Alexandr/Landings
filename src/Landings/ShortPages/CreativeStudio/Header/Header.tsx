import { NavLink } from "react-router-dom"
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.HeaderBack} id="MAIN">
            <div className={s.HeaderBox}>
                <div className={s.MenuNavigate}>
                    <div>
                        <div><NavLink className={s.MenuBack} to='/' >Back to Landings</NavLink></div>
                    </div>
                    <div className={s.MenuTopicks}>
                        <a href='#MAIN'>MAIN</a>
                        <a href='#WE'>WE'RE</a>
                        <a href='#SERVICES'>SERVICES</a>
                        <a href='#WORKS'>WORKS</a>
                        <a href='#TEAM'>TEAM</a>
                        <a href='#CONTACTS'>CONTACTS</a>
                    </div>
                </div>
                <div className={s.HeaderMiddle}>
                    <div className={s.HeaderMiddleBigText}>WHERE GREAT IDEAS COME TO LIFE</div>
                    <div className={s.HeaderMiddleMediumText}>Passionate creative studio helping startups grow their business</div>
                </div>
            </div>
        </div>
    )
}

export default Header