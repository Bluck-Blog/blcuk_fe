// components
import { darkMode, loginState } from "../../state/atom";
import LinkTag from "../common/LinkTag";
import * as S from "../../styles/header/HeaderStyle";

// lib
import { useState } from "react";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

// img
import WhiteLogin from "../../styles/img/whiteLogin.png";
import BlackLogin from "../../styles/img/blackLogin.png";
import WhiteLogout from "../../styles/img/whiteLogout.png";
import BlackLogout from "../../styles/img/blackLogout.png";
import BlackBell from "../../styles/img/blackBell.png";
import WhiteBell from "../../styles/img/whiteBell.png";
import Link from "next/link";
import Title from "../common/Title";

export default function Header() {
  const [isLogged, setIsLogged] = useRecoilState(loginState);
  const isDark = useRecoilValue(darkMode);

  const logOutHandle = () => {
    sessionStorage.removeItem("accessToken");
    setIsLogged((prev) => false);
  };

  return (
    <S.HeaderWrapper>
      <LinkTag
        title={"BLUCK"}
        tabletSize={26}
        mobileSize={18}
        size={30}
        link={"/"}
      />
      <S.BtnBox isLogged={isLogged}>
        {!isLogged ? (
          <>
            <LinkTag
              title={"MY PAGE"}
              tabletSize={12}
              mobileSize={10}
              size={12}
              link={"/myPage"}
            />
            <LinkTag
              title={"LOG-OUT"}
              tabletSize={12}
              mobileSize={10}
              size={12}
              link={"/"}
            />
          </>
        ) : (
          <>
            <LinkTag
              title={"LOG-IN"}
              tabletSize={12}
              mobileSize={10}
              size={12}
              link={"/login"}
            />
            <LinkTag
              title={"JOIN"}
              tabletSize={12}
              mobileSize={10}
              size={12}
              link={"/signUp"}
            />
          </>
        )}
        <S.IconFigure size={20} tabletSize={20} mobileSize={15}>
          <Image
            style={{ cursor: "pointer" }}
            layout="fill"
            src={isDark ? WhiteBell : BlackBell}
            alt="bell"
          />
        </S.IconFigure>
      </S.BtnBox>
    </S.HeaderWrapper>
  );
}
