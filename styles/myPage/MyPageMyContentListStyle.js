import styled from "styled-components";
import { media } from "../common/media";

export const MyPageContentBox = styled.div`
  width: 80%;
  height: 55vh;
  padding-right: 1%;
  overflow-y: auto;
  display: flex;
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
