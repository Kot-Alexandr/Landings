import s from './Service.module.scss'

type ServicePropsType = {
    headTitle: string
    img: string
}

const Service = (props: { props: ServicePropsType }) => {
    return (
        <div className={s.ServiceAll}>
            <div className={s.ServiceHead}>
                <div className={s.ServiceTitle}>{props.props.headTitle}</div>
                <div className={s.ServiceImgBox}>
                    <img className={s.ServiceImg} src={props.props.img} alt='AlexKotProduction' />
                </div>
            </div>
            <div className={s.ServiceText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <div className={s.ReadMe}>READ MORE</div>
        </div>
    )
}

export default Service