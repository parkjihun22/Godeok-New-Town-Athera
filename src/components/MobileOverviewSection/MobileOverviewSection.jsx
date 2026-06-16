// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>고덕신도시 아테라</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>
            경기도 평택시 고덕국제화계획지구
            <br />
            A-63BL
          </span>
        </li>

        <li>
          <strong>건축규모</strong>
          <span>
            지하 1층 ~ 지상 27층
            <br />
            총 6개동, 630세대
          </span>
        </li>

        <li>
          <strong>세대정보</strong>
          <span>전용 74㎡ · 84㎡</span>
        </li>

        <li>
          <strong>사업주체</strong>
          <span>LH 한국토지주택공사</span>
        </li>

        <li>
          <strong>시공사</strong>
          <span>
            금호건설 · 우미건설 · 신동아건설 ·
            <br />
            신흥디앤씨 컨소시엄
          </span>
        </li>

        <li>
          <strong>입주예정</strong>
          <span>2028년 10월 예정</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="고덕신도시 아테라 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="고덕국제신도시 수자인풍경채 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            고덕국제신도시 생활 인프라와 미래가치를 누리는<br />
            고덕신도시 아테라 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "고덕국제신도시 핵심 입지",
      desc:
        "평택 고덕국제신도시의 풍부한 생활 인프라<br/>미래 성장가치를 품은 신도시 중심 입지<br/>쾌적한 주거환경을 누리는 고덕신도시 아테라",
    },
    {
      img: slide2,
      title: "74㎡·84㎡ 실거주 중심 설계",
      desc:
        "선호도 높은 중소형 평면 구성<br/>실용성과 공간 활용을 높인 혁신 설계<br/>실거주 만족도를 높이는 아테라만의 주거 가치",
    },
    {
      img: slide3,
      title: "편리한 광역 교통망",
      desc:
        "SRT·1호선·광역도로망 이용이 편리한 입지<br/>수도권 주요 지역으로 빠른 이동 환경<br/>출퇴근과 생활을 더욱 편리하게 누리는 교통 프리미엄",
    },
    {
      img: slide4,
      title: "교육·생활 인프라를 누리는 생활권",
      desc:
        "학교와 공원, 상업시설이 가까운 생활환경<br/>풍부한 생활편의시설을 갖춘 고덕국제신도시<br/>가족 중심 라이프를 위한 쾌적한 주거 환경",
    },
    {
      img: slide5,
      title: "금호건설 아테라 브랜드 프리미엄",
      desc:
        "아테라 브랜드의 차별화된 설계와 상품성<br/>커뮤니티와 조경 특화로 완성되는 단지 가치<br/>일상을 더욱 품격 있게 만드는 프리미엄 라이프",
    },
    {
      img: slide6,
      title: "삼성 평택캠퍼스 직주근접 프리미엄",
      desc:
        "삼성 평택캠퍼스 배후 주거지의 미래가치<br/>풍부한 산업 수요와 함께 성장하는 입지<br/>실거주와 투자가치를 함께 기대하는 프리미엄",
    },
  ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
