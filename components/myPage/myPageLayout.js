// lib
import React from "react";

// styled
import * as S from "../../styles/myPage/MyPageLayoutStyle";

// component
import MyPageTabMenu from "./component/MyPageTabMenu";
import MyPageUserData from "./component/MyPageUserData";

const MyPageLayout = () => {
  return (
    <S.Wrapper>
      <MyPageUserData />
      <S.MyPageTabAndContentBox>
        <MyPageTabMenu />
        <S.MyPageContentBox>콘첸트</S.MyPageContentBox>
      </S.MyPageTabAndContentBox>
    </S.Wrapper>
  );
};

export default MyPageLayout;
