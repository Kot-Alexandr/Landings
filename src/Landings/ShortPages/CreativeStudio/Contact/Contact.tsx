import s from './Contact.module.scss';
import briefcase from '../assets/img/briefcase.png';
import mail from '../assets/img/mail.png'

const Contact = () => {
    return (
        <div className={s.ContBox} id='CONTACTS'>
            <div className={s.ContLeft}>
                <img className={s.ContImg} src={briefcase} alt='Somebody once told me...' />
                <div className={s.ContHeadLineLeft}>Want to work together?</div>
                <div className={s.ContTextLeft}>Amazing. Tell us about your project!</div>
            </div>
            <div className={s.ContRight}>
                <img className={s.ContImg} src={mail} alt='Somebody once told me...' />
                <div className={s.ContHeadLineRight}>Contact us</div>
                <div className={s.ContTextRight}>Get in touch</div>
            </div>
        </div>
    )
}

export default Contact