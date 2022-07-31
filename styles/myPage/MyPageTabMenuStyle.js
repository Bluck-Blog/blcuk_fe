import styled from "styled-components";
import { media } from "../common/media";

export const MyPageTabWrapper = styled.div`
  width: 15%;
  height: 100%;
`;

export const MyPageTabList = styled.li`
  width: 100%;
  height: 40px;
  line-height: 2.5;
  text-align: center;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
`;
