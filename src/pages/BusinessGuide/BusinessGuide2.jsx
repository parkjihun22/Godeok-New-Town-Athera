import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/calendar.jpg";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "공급안내", url: "/BusinessGuide/documents" }
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>고덕신도시 아테라 | 분양일정 안내</title>

  <meta
    name="description"
    content="고덕신도시 아테라 분양일정 안내. 평택 고덕국제화계획지구 A-63BL 고덕신도시 아테라의 특별공급, 일반공급, 당첨자 발표, 계약일정 등 주요 분양 일정을 확인하세요."
  />

  <meta
    name="keywords"
    content="고덕신도시 아테라, 고덕신도시 아테라 분양일정, 평택 고덕신도시 아테라, 고덕국제신도시 아테라, 평택 고덕 분양일정, 고덕신도시 청약, A63BL 아테라, 평택 고덕 아파트, 고덕신도시 분양, 금호건설 아테라"
  />

  <link
    rel="canonical"
    href="https://www.diarivalencia.com/BusinessGuide/plan"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="분양일정" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  고덕신도시 아테라 분양일정
</h1>

<p className={styles.screenReaderOnly}>
  고덕신도시 아테라 분양일정 안내 페이지입니다.
  평택 고덕국제화계획지구 A-63BL에 공급되는 고덕신도시 아테라의
  특별공급, 일반공급, 당첨자 발표, 계약일정 등 주요 청약 일정을
  확인할 수 있습니다. 고덕신도시 아테라 분양일정과 청약 정보를
  빠르게 확인해 보세요.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제신도시의 새로운 주거 가치</div>
  <div>고덕신도시 아테라 분양일정을 확인하세요.</div>
</div>

<img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="고덕신도시 아테라 분양일정 평택 고덕국제화계획지구 A-63BL 청약 일정 안내"
/>

<div className={styles.readyContainer}>
  {/* 필요한 경우 Ready 또는 분양 카운트 컴포넌트 삽입 */}
</div>


            <Footer />
        </div>
    );
};

export default BusinessGuide2;
