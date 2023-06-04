import { EffectCube } from 'swiper';
import "swiper/css";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from 'swiper/react';
import { slidess } from '../assets/data/data';
import s from './Comments.module.scss';
import Stars from './Stars/Stars';

const Comments = () => {

    return (
        <div className={s.CommBG}>
            <div className={s.ComBox}>
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube]}
                    className="mySwiper"
                >
                    {slidess.map((slide) => (
                        <SwiperSlide className={s.ComSlideBox} key={slide.key}>
                            <div className={s.ComText}>{slide.text}</div>
                            <div className={s.ComName}>{slide.name}</div>
                            <div><Stars stars={slide.stars} /></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Comments