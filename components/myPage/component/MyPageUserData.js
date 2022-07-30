// lib
import React from "react";
import Image from "next/image";

// style
import * as S from "../../../styles/myPage/MyPageUserDataStyle";

// img
import Profile from "../../../styles/img/blackProfile.png";
import LinkTag from "../../common/LinkTag";

const MyPageUserData = () => {
  return (
    <S.MyPageUserDataBox>
      <S.MyPageProfileBox>
        <Image src={Profile} layout="fill" alt="porfile" />
      </S.MyPageProfileBox>
      <S.MyPageDescriptionBox>
        <div>
          <S.MyPageUserName>발빠른 토깽이</S.MyPageUserName> |{" "}
          <S.MyPageUserNickName>별명 나타나는 곳</S.MyPageUserNickName>
        </div>
        <div>
          <S.MyPageMessage>상태 메세지는 한줄로 나타납니다.</S.MyPageMessage>
          <S.MyPageIntrodueText>
            자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개
            자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개
          </S.MyPageIntrodueText>
        </div>
        <LinkTag
          title={"회원 정보 변경"}
          tabletSize={12}
          mobileSize={10}
          size={12}
          link={"/myPage"}
        />
      </S.MyPageDescriptionBox>
    </S.MyPageUserDataBox>
  );
};

export default MyPageUserData;
