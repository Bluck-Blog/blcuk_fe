import styled from "styled-components";
import { media } from "../common/media";

export const MyPageTabWrapper = styled.div`
  width: 15%;
  height: 100%;
`;

export const MyPageTabList = styled.li`
  width: 100%;
  cursor: pointer;
  height: 40px;
  line-height: 2.5;
  text-align: center;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${(props) => (props.active ? "white" : props.theme.textColor)};
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  background: ${(props) => (props.active ? props.theme.textColor : "none")};
  opacity: 0.9;
`;

export const MyPageTagWrapper = styled.div`
  width: 100%;
  height: 45vh;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 20px;
  padding: 10% 5%;
`;

export const MypageTag = styled.span`
  display: inline-block;
  background: ${(props) => props.theme.textColor};
  color: white;
  margin: 5px 5px;
  padding: 5px 8px;
  border-radius: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
`;
