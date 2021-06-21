import styled from "styled-components";
import { IoIosArrowDropleft } from "react-icons/io";
const LeftArrow = styled(IoIosArrowDropleft)`
  color: #000;
  position: absolute;
  margin-right: 10%;
  margin-top: -5px;
  width: 25px;
  height: 25px;
  color: ${({ disabled }) => (disabled ? "#B2B2B2" : "#777")};
  left: 0px;
  top: calc(50% - 5px);
  border: 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    left: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid 2px
      ${({ disabled }) => (disabled ? "#B2B2B2" : "#000000")};
    border-right: solid 2px
      ${({ disabled }) => (disabled ? "#B2B2B2" : "#000000")};
    transform: rotate(-135deg);
  }
  :after {
    content: "";
    position: absolute;
  }
`;

export default LeftArrow;
