// lib
import React, { useState } from "react";

// styled
import * as S from "../../styles/myPage/MyPageLayoutStyle";
import MyPageBlackList from "./component/MyPageBlackList";
import MyPageMyContentList from "./component/MyPageMyContentList";
import MyPageNotification from "./component/MyPageNotification";

// component
import MyPageTabMenu from "./component/MyPageTabMenu";
import MyPageUserData from "./component/MyPageUserData";

const MyPageLayout = () => {
  const [activeTab, setActiveTab] = useState("myText");

  return (
    <S.Wrapper>
      <MyPageUserData />
      <S.MyPageTabAndContentBox>
        <MyPageTabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "myText" && <MyPageMyContentList />}
        {activeTab === "blackList" && <MyPageBlackList />}
        {activeTab === "notification" && <MyPageNotification />}
      </S.MyPageTabAndContentBox>
    </S.Wrapper>
  );
};

export default MyPageLayout;
