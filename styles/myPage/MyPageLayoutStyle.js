import styled from "styled-components";
import { media } from "../common/media";

export const Wrapper = styled.div`
  width: 80%;
  height: 75vh;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
`;

export const MyPageTabAndContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 25px;
  height: 70%;
`;

export const MyPageContentBox = styled.div`
  width: 80%;
  background: blue;
`;
