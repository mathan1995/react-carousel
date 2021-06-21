import styled from "styled-components";
import { IoIosArrowDropright } from "react-icons/io";

const RightArrow = styled(IoIosArrowDropright)`
  color: #000;
  position: absolute;
  margin-left: 10%;
  margin-top: -5px;
  width: 25px;
  height: 25px;
  color: ${({ disabled }) => (disabled ? "#B2B2B2" : "#777")};
  right: 0px;
  top: calc(50% - 10px);
  border: 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  :before {
    content: "";
    position: absolute;
    right: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid 2px ${({ disabled }) => (disabled ? "#B2B2B2" : "#333")};
    border-right: solid 2px ${({ disabled }) => (disabled ? "#B2B2B2" : "#333")};
    transform: rotate(45deg);
  }
  :after {
    content: "";
    position: absolute;
  }
`;

export default RightArrow;
