import s from "./style.module.scss";
import Button from "../../../components/common/buttons";
export default function Block1() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.section__wrapper}>
          <div className={s.hero}>
            <div className={s.hero__lead}>
              <h1>
                Your Business. <br /> We Make it Fintech.
              </h1>
              <p className={s.hero__lead_subtitle}>
                Alphanect equips you with the financial technology to grow your
                Wealth and Asset Management business while staying up-to-date
                with changing investor demands.
              </p>
            </div>
            <div className={s.hero__actions}>
              <Button padding='12px 24px'>Block a demo</Button>
              <div>or</div>
              <Button role="secondary">Explore more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
