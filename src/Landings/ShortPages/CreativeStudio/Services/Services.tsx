import { BRANDING, DESIGN, DEVELOPMENT } from '../assets/data/data'
import Service from './Service/Service'
import s from './Services.module.scss'

const Services = () => {
    return (
        <div className={s.ServiceBG} id='SERVICES'>
            <div className={s.ServiceBox}>
                <div className={s.ServiceHead}>
                    <div>Our Services</div>
                </div>
                <div className={s.ServiceMain}>
                    <Service props={BRANDING} />
                    <Service props={DESIGN} />
                    <Service props={DEVELOPMENT} />
                </div>
            </div>
        </div>
    )
}

export default Services