// lib
import React from "react";

// styled
import * as S from "../../styles/myPage/MyPageLayoutStyle";

import MyPageUserData from "./component/MyPageUserData";

const MyPageLayout = () => {
  return (
    <S.Wrapper>
      <MyPageUserData />
      <div>
        <div>탭메뉴</div>
        <div>콘첸트</div>
      </div>
    </S.Wrapper>
  );
};

export default MyPageLayout;
