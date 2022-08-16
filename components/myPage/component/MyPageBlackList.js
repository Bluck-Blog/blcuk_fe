import React from "react";
import * as S from "../../../styles/myPage/MyPageBlackListStyle";
import MyPageListItem from "./MyPageListItem";

const MyPageBlackList = () => {
  const dummyBlackList = [
    { id: 1, name: "발빠른 토깽이", date: "2022-08-16 16:00:00" },
    { id: 2, name: "정인아", date: "2022-08-16 16:00:00" },
    { id: 3, name: "추추", date: "2022-08-16 16:00:00" },
    { id: 4, name: "발빠른 토깽이", date: "2022-08-16 16:00:00" },
    { id: 5, name: "정인아", date: "2022-08-16 16:00:00" },
    { id: 6, name: "추추", date: "2022-08-16 16:00:00" },
    { id: 7, name: "발빠른 토깽이", date: "2022-08-16 16:00:00" },
    { id: 8, name: "정인아", date: "2022-08-16 16:00:00" },
    { id: 9, name: "추추", date: "2022-08-16 16:00:00" },
  ];
  return (
    <S.MyPageBlackListWrapper>
      <S.MyPageBlackListTitle>블랙리스트 총 10개</S.MyPageBlackListTitle>
      <S.MyPageBlackListBox>
        {dummyBlackList.map((item) => (
          <MyPageListItem key={item.id} item={item} />
        ))}
      </S.MyPageBlackListBox>
    </S.MyPageBlackListWrapper>
  );
};

export default MyPageBlackList;
