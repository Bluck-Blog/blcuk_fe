import React from "react";
import * as S from "../../../styles/myPage/MyPageMyContentListStyle";
import { content } from "../../../mok/contents";
import ContentCard from "../../main/component/ContentCard";

const MyPageMyContentList = () => {
  console.log(content);
  return (
    <S.MyPageContentBox>
      {content.map((item) => (
        <ContentCard item={item} />
      ))}
    </S.MyPageContentBox>
  );
};

export default MyPageMyContentList;
