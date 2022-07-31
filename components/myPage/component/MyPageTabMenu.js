// lib
import React, { useState } from "react";

// styled
import * as S from "../../../styles/myPage/MyPageTabMenuStyle";

const MyPageTabMenu = () => {
  const [activeTab, setActiveTab] = useState("myText");

  const onTabMenuClick = (text) => {
    setActiveTab(text);
  };

  return (
    <S.MyPageTabWrapper>
      <ul>
        <S.MyPageTabList
          active={activeTab === "myText"}
          onClick={() => onTabMenuClick("myText")}
        >
          내가 쓴 글
        </S.MyPageTabList>
        <S.MyPageTabList
          active={activeTab === "blackList"}
          onClick={() => onTabMenuClick("blackList")}
        >
          블랙리스트
        </S.MyPageTabList>
        <S.MyPageTabList
          active={activeTab === "notification"}
          onClick={() => onTabMenuClick("notification")}
        >
          모든 알림
        </S.MyPageTabList>
      </ul>
      <div>카테고리</div>
    </S.MyPageTabWrapper>
  );
};

export default MyPageTabMenu;
