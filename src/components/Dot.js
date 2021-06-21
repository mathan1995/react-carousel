import React from "react";
import styled from "styled-components";

const Dot = styled.li.attrs({
  children: ({ onClick }) => <span onClick={onClick} type="button" />, // eslint-disable-line react/prop-types
})`
  display: inline-block;
  pointer-events: none;
  span {
    padding: 2px;
    height: 1px;

    border-radius: 100px;
    cursor: pointer;
    font-size: 1.8em;
    line-height: 1.9em;
    margin: 0 5px;
    ${({ active }) =>
      active ? "padding: 5px 10px 0 10px;" : "padding: 2.5px "}
    ${({ active }) => (active ? "background: #777;" : "background: #E5E5E5;")}
    :hover {
      background: #000000;
    }
    :focus {
      outline: none;
    }
  }
  button {
    pointer-events: all;
    border: 0;
    background: 0 0;
  }
`;

export default Dot;
