import styled from "styled-components";
import { media } from "../common/media";

export const MyPageBlackListWrapper = styled.div`
  width: 80%;
  padding-top: 10px;
`;

export const MyPageBlackListTitle = styled.p`
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.textColor};
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

export const MyPageBlackListBox = styled.ul`
  height: 50vh;
  padding-right: 1%;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    background-clip: padding-box;
    border: 1px solid transparet;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
  }

  ${media.tablet`
    height: 72vh;
  `}
`;

export const MyPageBlackList = styled.li`
  height: 50px;
  border-radius: 10px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.navBgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const MyPageBlackListName = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
`;

export const MyPageDateBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MyPageBlackListCloseBox = styled.figure`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  position: relative;
  cursor: pointer;
`;
