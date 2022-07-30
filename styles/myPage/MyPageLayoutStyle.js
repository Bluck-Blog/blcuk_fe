import styled from "styled-components";
import { media } from "../common/media";

export const Wrapper = styled.div`
  width: 80%;
  height: 75vh;
  margin: 0 auto;
  margin-top: 30px;
  background: red;
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
  margin-left: 20px;
`;

export const MyPageUserName = styled.span`
  font-size: 20px;
`;
