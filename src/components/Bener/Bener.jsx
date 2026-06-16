import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="고덕신도시 아테라 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '고덕신도시 아테라') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕국제신도시에서 만나는 새로운 프리미엄 라이프.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          고덕신도시 아테라, 브랜드 가치와 미래 비전을 담은 새로운 주거공간.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·교육·생활·직주근접 프리미엄을 모두 누리는 고덕국제신도시 대표 아파트.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕국제신도시 중심 입지에 들어서는 고덕신도시 아테라.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          브랜드 프리미엄과 우수한 생활·교육·교통 환경을 함께 누릴 수 있는 주거단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          실거주 만족도와 미래가치를 모두 고려한 고덕국제신도시 대표 주거 선택.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          고덕신도시 아테라
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          삼성 평택캠퍼스와 고덕국제신도시 생활 인프라를 가까이 누리는 핵심 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          광역 교통망과 풍부한 생활 인프라, 미래가치를 모두 갖춘 프리미엄 라이프를 제공합니다.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          쾌적한 주거 환경과 효율적인 공간 설계를 담은 고덕신도시 아테라.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          다채로운 커뮤니티와 조경 특화 설계로 여유로운 일상을 선사합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          고덕신도시 아테라, 새로운 주거 가치를 완성합니다.
        </div>
      </>
    );
  }
};
