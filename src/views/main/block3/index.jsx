import s from "./style.module.scss";
import img1 from "../../../components/img/mutual1.jpg";
import img2 from "../../../components/img/mutual2.jpg";

export default function Block3() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.content}>
          <div className={s.content__blocktext}>
            <p className="text-blue">mutual benefit</p>
            <h2>Full FinTech Transformation for Wealth & Asset Managers </h2>
            <span>
              The platform solutions of Alphanect are designed to connect wealth
              and asset managers with investors. Allow your clients to
              experience the investment process at its best using simple and
              intuitive tools.
            </span>
          </div>
          <div className={s.content__img}>
            <img src={img1} alt="img 1" />
            <img src={img2} alt="img 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
