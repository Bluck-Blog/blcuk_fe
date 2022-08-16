import React from "react";
import Image from "next/image";
import Close from "../../../styles/img/close.png";
import moment from "moment";
import * as S from "../../../styles/myPage/MyPageListItemStyle";

const MyPageListItem = ({ item }) => {
  return (
    <S.MyPageBlackList>
      <S.MyPageBlackListName>{item.name}</S.MyPageBlackListName>
      <S.MyPageDateBox>
        <span>{moment(item.date).format("YYYY.MM.DD")}</span>
        <S.MyPageBlackListCloseBox>
          <Image src={Close} alt="ex" layout="fill" />
        </S.MyPageBlackListCloseBox>
      </S.MyPageDateBox>
    </S.MyPageBlackList>
  );
};

export default MyPageListItem;
