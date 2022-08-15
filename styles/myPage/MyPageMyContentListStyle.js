import styled from "styled-components";
import { media } from "../common/media";

export const MyPageContentBox = styled.div`
  width: 80%;
  padding-top: 10px;
`;

export const MyPageMyContentTitle = styled.p`
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.textColor};
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

export const MyPageMyContentListBox = styled.div`
  height: 50vh;
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
