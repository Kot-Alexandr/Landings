import s from './Member.module.scss'

type MemberPropsType = {
    img: string
    name: string
    position: string
}


const Member = (props: { props: MemberPropsType }) => {
    return (
        <div className={s.MemberBox}>
            <div className={s.MemberImg} style={{backgroundImage: `url(${props.props.img})`}}>
                <div className={s.MemberCharBox}>
                    <div className={s.MemberName}>{props.props.name}</div>
                    <div className={s.MemberPos}>{props.props.position}</div>
                    <div className={s.MemberDescr}>Create with simplicity in mind!</div>
                </div>
            </div>
        </div>
    )
}

export default Member