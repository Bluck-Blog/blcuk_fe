// lib
import React, { useEffect, useState } from "react";

// styled
import * as S from "../../../styles/myPage/MyPageTabMenuStyle";

const MyPageTabMenu = ({ activeTab, setActiveTab }) => {
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    const tagList = [
      { id: 1, active: false, tag: "a" },
      { id: 2, active: false, tag: "aa" },
      { id: 3, active: false, tag: "aaa" },
      { id: 4, active: false, tag: "aaaa" },
      { id: 5, active: false, tag: "aaaaa" },
      { id: 6, active: false, tag: "aaaaaaaaaaaaaa" },
      { id: 7, active: false, tag: "aaaa" },
      { id: 8, active: false, tag: "aa" },
    ];

    setTagList([...tagList]);
  }, []);

  const onTabMenuClick = (text) => {
    setActiveTab(text);
  };

  const onTagClick = (id) => {
    const newArray = [];
    tagList.forEach((item) => {
      if (item.id === id) {
        item.active = !item.active;
      }
      newArray.push(item);
    });

    setTagList([...newArray]);
  };

  return (
    <S.MyPageTabWrapper>
      <ul>
        <S.MyPageTabList
          active={activeTab === "myText"}
          onClick={() => onTabMenuClick("myText")}
        >
          내가 쓴 글
        </S.MyPageTabList>
        <S.MyPageTabList
          active={activeTab === "blackList"}
          onClick={() => onTabMenuClick("blackList")}
        >
          블랙리스트
        </S.MyPageTabList>
        <S.MyPageTabList
          active={activeTab === "notification"}
          onClick={() => onTabMenuClick("notification")}
        >
          모든 알림
        </S.MyPageTabList>
      </ul>
      {activeTab === "myText" && (
        <S.MyPageTagWrapper>
          {tagList.map((item) => (
            <S.MypageTag
              key={item.id}
              onClick={() => onTagClick(item.id)}
              active={item.active}
            >
              {item.tag}
            </S.MypageTag>
          ))}
        </S.MyPageTagWrapper>
      )}
    </S.MyPageTabWrapper>
  );
};

export default MyPageTabMenu;
