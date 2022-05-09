import { useState } from "react";

import s from "./style.module.scss";
import img1 from "../../../components/img/main-pictures1.png";
import img2 from "../../../components/img/main-pictures2.png";
import picture from "../../../components/img/picture-our-products.jpg";
import pictureMenu from "../../../components/img/picture-our-products-menu.png";

export default function Block2() {
  const data = [
    {
      title: "Communication",
      img: picture,
      img1: pictureMenu,
    },
    {
      title: "Analysing",
      img: "https://pixabay.com/get/gd8007e339d1eb67acf755c0433aa66f6dcd12271b0bc9ddb79723505ac4023c6d7f4b8aa4fc868d7012eda8c91e15571_1280.jpg",
    },
    {
      title: "Investment process",
      img: "https://pixabay.com/get/g4eee86f315c294561da9c6ee93212436de5569ee23f7bfdc2c630c4d87208ce0808b0d58022a09b9d296b47a51011f95_1280.jpg",
    },
    {
      title: "Investor center",
      img: "https://pixabay.com/get/g046a8b985a04deba493c2b4fcd6260bde8152df7f13818aa9f75a1c707fd873e61b10d92e45868787431fb9d58f51dbd_1280.jpg",
    },
    {
      title: "Pitch creator",
      img: "https://pixabay.com/get/gd25ab34e6b6b957be3d2bc4b0e0570e337a1b813b1d84251731c704737c60d1ce2d11071ce88c728f51c131d54ca9501_1280.png",
    },
  ];

  const [img, setImg] = useState([data[0].img, data[0].img1]);

  const onClickTabs = (e, i) => {
    console.log(i);
    for (let i = 0; i < e.target.parentElement.childNodes.length; i++) {
      e.target.parentElement.childNodes[i].classList.remove(
        `${s.ourProducts_content__tabs__active}`
      );
    }
    e.target.classList.add(`${s.ourProducts_content__tabs__active}`);

    if (i === 0) {
      setImg([data[0].img, data[0].img1]);
    } else {
      console.log(i);
      setImg(data[i].img);
    }
  };

  const calcLeftImg = () => {
    if (window.innerWidth > 1235 && window.innerWidth < 1540) {
      return (window.innerWidth - 1221) / 2 - 7 + "px";
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
                {data.map((el, i) => {
                  if (i === 0) {
                    return (
                      <li
                        className={s.ourProducts_content__tabs__active}
                        onClick={(e) => onClickTabs(e, i)}
                      >
                        {el.title}
                      </li>
                    );
                  } else {
                    return (
                      <li onClick={(e) => onClickTabs(e, i)}>{el.title}</li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className={s.ourProducts_content__picture}>
              <div
                className={s.ourProducts_content__picture_wrapper}
                style={{
                  marginLeft: calcLeftImg(),
                }}
              >
                {img.length === 2 ? (
                  <>
                    <img
                      src={img[1]}
                      className={s.ourProducts_content__picture_menu}
                      alt="menu img"
                    />
                    <img src={img[0]} alt="img" />
                  </>
                ) : (
                  <img src={img} alt="img" />
                )}
                <span className={s.ourProducts_content__picture_blur} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
