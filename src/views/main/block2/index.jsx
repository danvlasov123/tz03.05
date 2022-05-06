import s from "./style.module.scss";
import img1 from "../../../components/img/main-pictures1.png";
import img2 from "../../../components/img/main-pictures2.png";
import picture from "../../../components/img/picture-our-products.jpg";
import pictureMenu from "../../../components/img/picture-our-products-menu.png";

export default function Block2() {
  const calcLeftImg = () => {
    if (window.innerWidth > 1235 && window.innerWidth < 1540) {
      return (window.innerWidth - 1221) / 2 - 7 + 'px'
    } else {
      return 0;
    }
  };
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.main_pictures}>
          <div className={s.main_pictures__wrapper}>
            <div className={s.main_pictures__wrapper_blockImg}>
              <img src={img1} alt="img1" />
            </div>
            <div className={s.main_pictures__wrapper_blockImg}>
              <img src={img2} alt="img1" />
            </div>
          </div>
        </div>

        <div className={s.ourProducts}>
          <div className={s.ourProducts_title}>
            <span className="text-blue">OUR PRODUCTS</span>
            <h2>We build fintech platforms for you</h2>
          </div>
          <div className={s.ourProducts_content}>
            <div className={s.ourProducts_content__tabs}>
              <ul>
                <li className={s.ourProducts_content__tabs__active}>
                  <div />
                  <span>Products portfolio</span>
                </li>
                <li
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add(
                      s.ourProducts_content__tabs__active
                    )
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove(
                      s.ourProducts_content__tabs__active
                    )
                  }
                >
                  <div />
                  <span>Communication</span>
                </li>
                <li
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add(
                      s.ourProducts_content__tabs__active
                    )
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove(
                      s.ourProducts_content__tabs__active
                    )
                  }
                >
                  <div />
                  <span>Analysing</span>
                </li>
                <li
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add(
                      s.ourProducts_content__tabs__active
                    )
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove(
                      s.ourProducts_content__tabs__active
                    )
                  }
                >
                  <div />
                  <span>Investment process</span>
                </li>
                <li
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add(
                      s.ourProducts_content__tabs__active
                    )
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove(
                      s.ourProducts_content__tabs__active
                    )
                  }
                >
                  <div />
                  <span>Investor center</span>
                </li>
                <li
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add(
                      s.ourProducts_content__tabs__active
                    )
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove(
                      s.ourProducts_content__tabs__active
                    )
                  }
                >
                  <div />
                  <span>Pitch creator</span>
                </li>
              </ul>
            </div>
            <div className={s.ourProducts_content__picture}>
              <div className={s.ourProducts_content__picture_wrapper} style={{
                marginLeft: calcLeftImg(),
                }}>
              <img src={pictureMenu} className={s.ourProducts_content__picture_menu} alt="menu img"/>
              <img
                src={picture}
                alt="img"
                />
              <span className={s.ourProducts_content__picture_blur}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
