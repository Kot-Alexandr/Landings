import s from './Footer.module.scss';
import twitter from '../assets/img/twitter.png'
import facebook from '../assets/img/facebook.png'
import pinter from '../assets/img/pinterest.png'

const Footer = () => {
    return (
        <div className={s.FooterBox}>
            <div className={s.FTopBlock}>
                <div className={s.FTopBlockContent}>
                    <div className={s.FTopText}>3rd Floor, Santa Monica Beach, CA, San Francisco</div>
                    <div className={s.FTopText}>(359) 0 123 456 789 - alexandr.kot.dev@gmail.com</div>
                    <div className={s.FooterImg}>
                        <img src={twitter} alt='Just Png'/>
                        <img src={facebook} alt='Just Png'/>
                        <img src={pinter} alt='Just Png'/>
                    </div>
                </div>
            </div>
            <div className={s.FBotBlock}>
                <div className={s.FBotBlockContent}>
                    Copyright 2016 - All Rights Reserved - Designed by JD
                </div>
            </div>
        </div>
    )
}

export default Footer