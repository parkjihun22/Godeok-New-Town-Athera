import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "공급안내", url: "/BusinessGuide/documents" },
		{ title: "모집공고안내", url: "/SalesInfo/announcement" },
		// { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
		// { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
		// { title: "청약안내문", url: "/SalesInfo/guide" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// 이미지 표시 여부를 변경하는 로직 추가 (예시)
	useEffect(() => {
		const handleImageVisibility = () => {
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려갔을 때
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
			}
		};

		window.addEventListener('scroll', handleImageVisibility);

		return () => {
			window.removeEventListener('scroll', handleImageVisibility);
		};
	}, []);

	return (
		<div className={styles.container}>

<Helmet>
  {/* 필수 메타 */}
  <title>고덕신도시 아테라 | 공급안내</title>

  <meta
    name="description"
    content="고덕신도시 아테라 공급안내. 평택 고덕국제화계획지구 A-63BL에 공급되는 고덕신도시 아테라의 공급정보, 주택형 구성, 청약 절차, 모집공고 및 계약 관련 주요 내용을 확인하세요."
  />

  <meta
    name="keywords"
    content="고덕신도시 아테라, 고덕신도시 아테라 공급안내, 평택 고덕신도시 아테라, 고덕국제신도시 아테라, 고덕신도시 청약, 고덕신도시 모집공고, 평택 고덕 아파트, A63BL 아테라, 금호건설 아테라, 고덕신도시 분양"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.diarivalencia.com/BusinessGuide/documents"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="고덕신도시 아테라" />

  <meta
    property="og:title"
    content="고덕신도시 아테라 | 공급안내"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 A-63BL 고덕신도시 아테라의 공급정보, 청약 절차, 모집공고 및 계약 관련 내용을 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.diarivalencia.com/BusinessGuide/documents"
  />

  <meta
    property="og:image"
    content="https://www.diarivalencia.com/Main1.png"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="공급안내" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  고덕신도시 아테라 공급안내
</h1>

<p className={styles.screenReaderOnly}>
  고덕신도시 아테라 공급안내 페이지입니다.
  평택 고덕국제화계획지구 A-63BL에 공급되는 고덕신도시 아테라의
  공급정보와 주택형 구성, 청약 절차, 모집공고, 특별공급, 일반공급,
  제출서류 및 계약 관련 주요 사항을 한눈에 확인할 수 있습니다.
  고덕신도시 아테라 공급안내와 청약 정보를 확인해 보세요.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제신도시의 새로운 주거 가치</div>
  <div>고덕신도시 아테라 공급정보를 확인하세요.</div>
</div>

<img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="고덕신도시 아테라 공급안내 평택 고덕국제화계획지구 A-63BL 청약 및 공급정보 이미지"
/>




			<Footer /> 
		</div>
	);
};

export default BusinessGuide2;
