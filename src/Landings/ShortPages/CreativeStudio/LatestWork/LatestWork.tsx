import s from './LatestWork.module.scss'
import { useState } from 'react'
import OneLW from './OneLW/OneLW'
import { ButtonsPad, Kitty, MacPC, Photography } from '../assets/data/data'

const LatestWork = () => {

    const [active, setActive] = useState(3)

    let PKitty = { ...Kitty, active }
    let PButtonsPad = { ...ButtonsPad, active }
    let PPhotography = { ...Photography, active }
    let PMacPC = { ...MacPC, active }

    return (
        <div className={s.LWBG} id='WORKS'>
            <div className={s.LWBox}>
                <div className={s.LWflexWrap}>
                    <div>
                        <div className={s.LWHeadline}>Latest Works</div>
                        <div className={s.LWProps}>
                            <div className={active === 0 ? s.LWActiveClass : s.LWNotActiveClass} onClick={() => { setActive(0) }}>All</div>
                            <div className={active === 1 ? s.LWActiveClass : s.LWNotActiveClass} onClick={() => { setActive(1) }}>WEB DESIGN</div>
                            <div className={active === 2 ? s.LWActiveClass : s.LWNotActiveClass} onClick={() => { setActive(2) }}>BRANDING</div>
                            <div className={active === 3 ? s.LWActiveClass : s.LWNotActiveClass} onClick={() => { setActive(3) }}>PHOTOGRAPHY</div>
                            <div className={active === 4 ? s.LWActiveClass : s.LWNotActiveClass} onClick={() => { setActive(4) }}>ILLUSTRATION</div>
                        </div>
                    </div>
                    <OneLW props={PKitty} />
                    <OneLW props={PButtonsPad} />
                </div>
                <div className={s.LWflexWrap}>
                    <OneLW props={PPhotography} />
                    <OneLW props={PMacPC} />
                </div>
            </div>
        </div>
    )
}

export default LatestWork