import styled from "styled-components";
import { media } from "../common/media";

export const Section = styled.div`
  width: 100%;
  height: 100%;
`;

export const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet``}
  ${media.mobile`
    flex-wrap: wrap;
  `}
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 67vh;
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

export const WriteButton = styled.button`
  background: none;
  border: none;
  border: 2px solid ${(props) => props.theme.textColor};
  width: 85px;
  height: 30px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  ${media.tablet`
  font-size: 12px;
  `}
  ${media.mobile`
  width: 80%;
  margin: 20px auto 0 auto;
  font-size: 10px;
  `}
`;
