import styled from "styled-components";
import { media } from "../common/media";

export const MyPageBlackList = styled.li`
  height: 50px;
  border-radius: 10px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.navBgColor};
  opacity: ${(props) => (props.active ? "0.4" : "1")};
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
