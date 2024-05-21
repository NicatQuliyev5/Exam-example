import React from "react";
import styles from "./index.module.scss";
import { getAll } from "../../services/index.js";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getAll().then((res) => {
      setMenus(res.data.response);
    });
  }, []);
  return (
    <main>
      <section id={styles["home"]}></section>
      <section id={styles["about"]}></section>
      <section id={styles["menu"]}>
        <div className="container">
          <div className="menu-header">
            <h4>OUR OFFERS</h4>
            <h2>Our Offer This Summer</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <Swiper
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {menus.length &&
              menus.map((menu) => {
                return (
                  <SwiperSlide>
                    <div className={styles.card}>
                      <div className={styles.cardImg}>
                        <img src={menu.imgSrc} alt="" />
                      </div>
                      <div className={styles.cardBody}>
                        <span>${menu.price}</span>
                        <h5>{menu.title}</h5>
                        <p>{menu.description}</p>
                      </div>
                      <div className={styles.cardFooter}>
                        <Button variant="contained" color="warning">
                          Order Now!
                        </Button>
                        <Button variant="contained">
                          <Link to={`/detail/${menu._id}`}>Read More</Link>
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
      <section id={styles["news"]}></section>
      <section id={styles["gallery"]}></section>
    </main>
  );
}

export default Home;
