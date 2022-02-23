import styled, { css } from "styled-components";

import { arrow, arrowActive } from "../../assets";
import { toggleMenu } from "../../lib";

export default function Selection({ ableSelect, selectableOption, options, optionSelected, onSelectOptions }) {
  const { optionTitle, optionFrameValueList } = options;

  function handleOptionValue(isSoldOut, op) {
    if (!isSoldOut) {
      onSelectOptions(optionTitle, op);
    }
  }

  function handleClickSelect(e) {
    if (ableSelect) {
      toggleMenu(e);
    }
  }

  return (
    <StSelectWrapper ableselect={ableSelect} onClick={handleClickSelect}>
      <label>{optionSelected[optionTitle]}</label>
      <StSelect>
        {ableSelect &&
          optionFrameValueList &&
          optionFrameValueList.map((option, i) => {
            let isSoldOut = false;
            const priorOption = selectableOption[optionSelected["사이즈"]];

            if (optionTitle === "사이즈" && !selectableOption[option]) {
              isSoldOut = true;
            } else if (optionTitle !== "사이즈" && priorOption && !priorOption.includes(option)) {
              isSoldOut = true;
            }

            return (
              <StOption key={i} issoldout={isSoldOut} onClick={() => handleOptionValue(isSoldOut, option)}>
                {option}
                {isSoldOut && " (품절)"}
              </StOption>
            );
          })}
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

  cursor: pointer;

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

  ${({ issoldout }) =>
    issoldout
      ? css`
          color: ${({ theme }) => theme.colors.gray100};
        `
      : css`
          &:hover {
            background-color: ${({ theme }) => theme.colors.magenta100};
            color: ${({ theme }) => theme.colors.magenta300};
          }
        `}
`;
