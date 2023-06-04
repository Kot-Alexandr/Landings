import s from './WeAre.module.scss'

const WeAre = () => {
    return (
        <div className={s.WeBackGround} id='WE'>
            <div className={s.WeBox}>
                <div className={s.WeTopTextBox}>
                    <div className={s.WeTopick}>WE ARE</div>
                    <div className={s.WeUnderTopick}>THE SQWD</div>
                    <div className={s.WeTopText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                </div>
                <div className={s.ImgBox}>
                    <div className={s.WeFirstImgBox}></div>
                    <div className={s.WeGreenBox}></div>
                    <div className={s.WeSecondImgBox}></div>
                </div>
                <div className={s.BotBoxTex}>
                    <div className={s.WeBottomTextBox}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                </div>
            </div>
        </div>
    )
}

export default WeAre