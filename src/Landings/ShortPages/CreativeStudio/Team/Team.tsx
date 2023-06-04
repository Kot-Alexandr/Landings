import { Member1, Member2, Member3 } from '../assets/data/data'
import Member from './Member/Member'
import s from './Team.module.scss'

const Team = () => {
    return (
        <div className={s.TeamBG} id='TEAM'>
            <div className={s.TeamBox}>
                <div className={s.TeamTitle}>The Team</div>
                <div className={s.TeamMembers}>
                    <Member props={Member1}/>
                    <Member props={Member2}/>
                    <Member props={Member3}/>
                </div>
            </div>
        </div>
    )
}

export default Team