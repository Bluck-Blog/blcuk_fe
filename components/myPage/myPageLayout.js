// lib
import Image from "next/image";
import React from "react";

// styled
import * as S from "../../styles/myPage/MyPageLayoutStyle";

// img
import Profile from "../../styles/img/blackProfile.png";

const MyPageLayout = () => {
  return (
    <S.Wrapper>
      <S.MyPageUserDataBox>
        <S.MyPageProfileBox>
          <Image src={Profile} layout="fill" alt="porfile" />
        </S.MyPageProfileBox>
        <S.MyPageDescriptionBox>
          <div>
            <span>발빠른 토깽이</span> | <span>별명 나타나는 곳</span>
          </div>
          <div>
            <h3>상태 메세지</h3>
            <p>자기소개</p>
          </div>
          <a>회원 정보 변경</a>
        </S.MyPageDescriptionBox>
      </S.MyPageUserDataBox>
    </S.Wrapper>
  );
};

export default MyPageLayout;
