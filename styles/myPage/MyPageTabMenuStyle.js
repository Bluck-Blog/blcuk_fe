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
