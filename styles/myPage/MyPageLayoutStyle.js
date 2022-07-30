import styled from "styled-components";
import { media } from "../common/media";

export const Wrapper = styled.div`
  width: 80%;
  height: 75vh;
  margin: 0 auto;
  margin-top: 30px;
`;

export const MyPageUserDataBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 30px;
  background: ${(props) => props.theme.input};
`;

export const MyPageProfileBox = styled.figure`
  width: 100px;
  height: 100px;
  position: relative;
`;

export const MyPageDescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
  height: 80px;
  width: 80%;
`;

export const MyPageUserName = styled.span`
  font-size: 20px;
`;

export const MyPageUserNickName = styled.span`
  font-size: 12px;
`;

export const MyPageMessage = styled.h3`
  font-size: 12px;
  margin-top: 5px;
`;

export const MyPageIntrodueText = styled.p`
  font-size: 12px;
  height: 22px;
  margin: 5px 0 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  opacity: 0.7;
`;
