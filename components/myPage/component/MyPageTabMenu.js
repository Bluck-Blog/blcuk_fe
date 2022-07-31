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
        <S.MyPageTabList>내가 쓴 글</S.MyPageTabList>
        <S.MyPageTabList>블랙리스트</S.MyPageTabList>
        <S.MyPageTabList>모든 알림</S.MyPageTabList>
      </ul>
      <div></div>
    </S.MyPageTabWrapper>
  );
};

export default MyPageTabMenu;
