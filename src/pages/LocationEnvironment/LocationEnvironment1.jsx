import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "평택 고덕국제신도시 중심<br />높아지는 미래가치",
    contentText:
      "고덕국제화계획지구 A-63BL 핵심 입지<br />고덕신도시 아테라가 누리는 미래가치 프리미엄",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 생활 환경",
    contentText:
      "상업시설과 생활편의시설을 가까이 누리는 생활권<br />고덕국제신도시 중심 인프라를 누리는 프리미엄",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망 프리미엄<br />편리한 교통 환경",
    contentText:
      "광역도로망과 수도권 접근성이 우수한 교통 환경<br />평택 고덕국제신도시의 편리한 이동 프리미엄",
  },
  {
    img: section2Image4,
    titleText: "교육·생활 인프라<br />완성형 신도시 생활권",
    contentText:
      "학교와 공원, 상업시설이 조화를 이루는 생활권<br />가족 중심 라이프를 위한 고덕신도시 생활환경",
  },
  {
    img: section2Image5,
    titleText: "금호건설 아테라 브랜드<br />프리미엄 주거 가치",
    contentText:
      "고덕신도시 아테라만의 차별화된 설계와 상품성<br />실거주 만족도를 높이는 브랜드 프리미엄",
  },
  {
    img: section2Image6,
    titleText: "삼성 평택캠퍼스 직주근접<br />미래가치 프리미엄",
    contentText:
      "삼성 평택캠퍼스 배후 주거단지의 미래가치<br />고덕국제신도시와 함께 성장하는 프리미엄 입지",
  },
];


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>고덕신도시 아테라 | 입지환경</title>

  <meta
    name="description"
    content="고덕신도시 아테라 입지환경 안내. 평택 고덕국제화계획지구 A-63BL 고덕신도시 아테라의 생활 인프라, 광역 교통망, 교육환경, 공원·녹지 환경, 삼성 평택캠퍼스 직주근접 가치를 확인하세요."
  />

  <meta
    name="keywords"
    content="고덕신도시 아테라, 고덕신도시 아테라 입지환경, 평택 고덕신도시 아테라, 고덕국제신도시 아테라, 고덕국제화계획지구 A-63BL, A63BL 아테라, 평택 고덕 아파트, 고덕신도시 교통, 삼성 평택캠퍼스, 금호건설 아테라"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.godeok-athera.co.kr/LocationEnvironment/intro"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="고덕신도시 아테라" />

  <meta
    property="og:title"
    content="고덕신도시 아테라 | 입지환경"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 A-63BL 고덕신도시 아테라의 생활 인프라, 광역 교통망, 교육환경과 삼성 평택캠퍼스 직주근접 프리미엄을 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.godeok-athera.co.kr/LocationEnvironment/intro"
  />

  <meta
    property="og:image"
    content="https://www.godeok-athera.co.kr/img/og/location.jpg"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="고덕신도시 아테라 | 입지환경"
  />

  <meta
    name="twitter:description"
    content="고덕신도시 아테라의 교통, 교육, 생활 인프라와 평택 고덕국제신도시 주거환경을 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.godeok-athera.co.kr/img/og/location.jpg"
  />

  <meta
    name="twitter:url"
    content="https://www.godeok-athera.co.kr/LocationEnvironment/intro"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "고덕신도시 아테라 입지환경",
      "url": "https://www.godeok-athera.co.kr/LocationEnvironment/intro",
      "description":
        "고덕신도시 아테라 입지환경 페이지입니다. 평택 고덕국제화계획지구 A-63BL 고덕신도시 아테라의 생활 인프라, 광역 교통망, 교육환경, 공원·녹지 환경, 삼성 평택캠퍼스 직주근접 가치를 안내합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.godeok-athera.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://www.godeok-athera.co.kr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "입지환경",
            "item": "https://www.godeok-athera.co.kr/LocationEnvironment/intro"
          }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  고덕신도시 아테라 입지환경
</h1>

<p className={styles.screenReaderOnly}>
  고덕신도시 아테라 입지환경 페이지입니다.
  평택 고덕국제화계획지구 A-63BL에 조성되는 고덕신도시 아테라의
  생활 인프라와 광역 교통망, 교육환경, 공원·녹지 환경,
  삼성 평택캠퍼스 직주근접 가치 등 입지 프리미엄을 안내합니다.
  고덕신도시 아테라 입지환경과 평택 고덕국제신도시 주거 가치를 확인해 보세요.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제신도시 생활권에서</div>
  <div>삶의 가치가 높아지는 곳</div>
  <div>고덕신도시 아테라가 새로운 주거 가치로 찾아옵니다.</div>
</div>

<img
  src={page1}
  className={styles.image2}
  alt="고덕신도시 아테라 입지환경 평택 고덕국제화계획지구 A-63BL 생활권 이미지"
/>

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 고덕신도시 아테라사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
