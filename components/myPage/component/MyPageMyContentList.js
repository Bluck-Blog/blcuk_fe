import React from "react";
import Image from "next/image";
import * as S from "../../../styles/myPage/MyPageMyContentListStyle";
import { content } from "../../../mok/contents";
import ContentCard from "../../main/component/ContentCard";

const MyPageMyContentList = () => {
  return (
    <S.MyPageContentBox>
      <S.MyPageMyContentTitle>내가 쓴 글 총 10개</S.MyPageMyContentTitle>
      <S.MyPageMyContentListBox>
        {content.map((item) => (
          <ContentCard item={item} />
        ))}
      </S.MyPageMyContentListBox>
    </S.MyPageContentBox>
  );
};

export default MyPageMyContentList;
