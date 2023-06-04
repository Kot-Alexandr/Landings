import s from './Stars.module.scss';
import emptyStar from '../../assets/img/StarEmpty.svg'
import FullfieldStar from '../../assets/img/StarComplete.svg'


type StartPropsType = {
    stars: number
}


const Stars = (props: StartPropsType) => {
    return (
        <div className={s.StarsBox}>
            <img src={props.stars >= 1 ? FullfieldStar : emptyStar} className={s.StarsStar} alt='Remember The Name' />
            <img src={props.stars >= 2 ? FullfieldStar : emptyStar} className={s.StarsStar} alt='Remember The Name' />
            <img src={props.stars >= 3 ? FullfieldStar : emptyStar} className={s.StarsStar} alt='Remember The Name' />
            <img src={props.stars >= 4 ? FullfieldStar : emptyStar} className={s.StarsStar} alt='Remember The Name' />
            <img src={props.stars >= 5 ? FullfieldStar : emptyStar} className={s.StarsStar} alt='Remember The Name' />
        </div>
    )
}

export default Stars