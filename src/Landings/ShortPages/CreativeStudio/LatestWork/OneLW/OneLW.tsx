import s from './OneLW.module.scss'

type OneLWPropsType = {
    img: string
    title: string
    activeNumber: number
    active: number
}


const OneLW = (props: { props: OneLWPropsType }) => {
    let isActive = true
    if (props.props.activeNumber === props.props.active || props.props.active === 0) {
        isActive = true
    } else {
        isActive = false
    }
 

    return (
        <div className={s.OneLWBox}>
            <img className={isActive ? s.OneLWImg + " " + s.isActive : s.OneLWImg} src={props.props.img} alt='https://kot-alexandr.github.io/Portfolio/' />
            <div className={isActive ? s.OneLWTitle + " " + s.isActive : s.OneLWTitle}>{props.props.title}</div>
            <div className={s.OneLWlittleTitle}>Photography</div>
            <div className={s.OneLWgeneralText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
    )
}

export default OneLW
