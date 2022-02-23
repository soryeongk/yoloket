import { useState } from "react";
import styled, { css } from "styled-components";

import { arrow, arrowActive } from "../../assets";
import { toggleMenu } from "../../lib";

export default function Selection({ ableSelect, options, soldOutList, optionSelected, onSelectOptions }) {
  const { optionTitle, optionFrameValueList } = options;
  const [optionValue, setOptionValue] = useState(`${optionTitle}를 선택해주세요`);

  function handleOptionValue(op) {
    setOptionValue(op);
    onSelectOptions(optionTitle, op);
  }

  function handleClickSelect(e) {
    if (ableSelect) {
      toggleMenu(e);
    } else {
      return;
    }
  }

  return (
    <StSelectWrapper ableselect={ableSelect} onClick={handleClickSelect}>
      <label>{optionValue}</label>
      <StSelect>
        {optionFrameValueList &&
          optionFrameValueList.map((option, i) => (
            <StOption key={i} onClick={() => handleOptionValue(option)}>
              {option}
            </StOption>
          ))}
      </StSelect>
    </StSelectWrapper>
  );
}

const StSelectWrapper = styled.div`
  position: relative;

  ${({ ableselect }) =>
    ableselect
      ? css`
          border: 0.05rem solid ${({ theme }) => theme.colors.gray200};
        `
      : css`
          border: 0.05rem solid ${({ theme }) => theme.colors.gray100};
          color: ${({ theme }) => theme.colors.gray100};
        `}

  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.white100};
  width: 100%;
  ${({ theme }) => theme.fonts.caption200}

  &::after {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    content: url(${({ ableselect }) => (ableselect ? arrowActive : arrow)});
    /* content: url(${arrow}); */
  }

  & + & {
    margin-top: 1rem;
  }
`;

const StSelect = styled.ul`
  visibility: hidden;

  position: absolute;
  top: 3.95rem;
  left: 0;
  z-index: 5;

  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.white200};

  width: 100%;
`;

const StOption = styled.li`
  padding: 0.5rem 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.magenta100};
    color: ${({ theme }) => theme.colors.magenta300};
  }
`;
