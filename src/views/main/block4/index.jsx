import s from "./style.module.scss";
import img from "../../../components/img/testimonials.png";
import quotes from "../../../components/img/icons/quotes.svg";
import avatar from "../../../components/img/icons/avatar.svg";
import video from "../../../components/img/icons/video.svg";
import Button from "../../../components/common/buttons";

export default function Block4() {
  return (
    <section className={s.section}>
      <div className="container h100">
        <div className={s.section__wrapper}>
          <div className={s.testimonials}>
            <img src={img} alt="img" />
            <div className={s.testimonials__block}>
              <div className={s.testimonials__block_wrapper}>
                <img
                  src={quotes}
                  alt="quotes"
                  className={s.testimonials__block_wrapper__quotes}
                />
                <p className={s.testimonials__block_wrapper__text}>
                  Alphanect became an essential part of DLE‘s fundraising
                  powerhouse and gave us a strong competitive edge in a
                  traditional field like Real Estate.
                </p>
                <div className={s.testimonials__block_wrapper__user}>
                  <img src={avatar} alt="avatar user" />
                  <div>
                    <span>Maria Giulia Nasi</span>
                    <p>Head of Marketing at DLE Group AG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.content}>
            <p className="text-blue">CASE STUDY</p>
            <h2>Investor Platform for DLE Group AG </h2>
            <hr />
            <div className={s.content__block}>
              <div className={s.content__block_info}>
                <span className={s.content__block_info__title}>€2.5BN</span>
                <p className={s.content__block_info__subtitle}>
                  fund volume on Alphanect
                </p>
              </div>
              <div className={s.conten__block_info}>
                <span className={s.content__block_info__title}>8 funds</span>
                <p className={s.content__block_info__subtitle}>
                  managed via the platform{" "}
                </p>
              </div>
            </div>
            <Button>
              <img
                src={video}
                alt="video icon"
                style={{
                  marginRight: 14,
                }}
              />
              Watch video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
