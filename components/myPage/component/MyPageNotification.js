import React from "react";
import * as S from "../../../styles/myPage/MyPageNotificationStyle";
import MyPageListItem from "./MyPageListItem";

const MyPageNotification = () => {
  const dummyBlackList = [
    { id: 1, name: "발빠른 토깽이", date: "2022-08-16 16:00:00", status: true },
    { id: 2, name: "정인아", date: "2022-08-16 16:00:00", status: true },
    { id: 3, name: "추추", date: "2022-08-16 16:00:00", status: false },
    { id: 4, name: "발빠른 토깽이", date: "2022-08-16 16:00:00", status: true },
    { id: 5, name: "정인아", date: "2022-08-16 16:00:00", status: false },
    { id: 6, name: "추추", date: "2022-08-16 16:00:00", status: true },
    {
      id: 7,
      name: "발빠른 토깽이",
      date: "2022-08-16 16:00:00",
      status: false,
    },
    { id: 8, name: "정인아", date: "2022-08-16 16:00:00", status: true },
    { id: 9, name: "추추", date: "2022-08-16 16:00:00", status: true },
  ];

  return (
    <S.MyPageNotificationWrapper>
      <S.MyPageNotificationTitle>알림 총 10개</S.MyPageNotificationTitle>
      <S.MyPageNotificationBox>
        {dummyBlackList.map((item) => (
          <MyPageListItem key={item.id} item={item} />
        ))}
      </S.MyPageNotificationBox>
    </S.MyPageNotificationWrapper>
  );
};

export default MyPageNotification;
