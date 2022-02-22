import styled from "styled-components";

import { arrow } from "../../assets";
import { toggleMenu } from "../../lib";

export default function Selection({ options }) {
  const { optionTitle, optionFrameValueList } = options;

  return (
    <StSelectWrapper onClick={toggleMenu}>
      <label>{optionTitle}를 선택해주세요</label>
      <StSelect>
        {optionFrameValueList && optionFrameValueList.map((option, i) => <StOption key={i}>{option}</StOption>)}
      </StSelect>
    </StSelectWrapper>
  );
}

const StSelectWrapper = styled.div`
  position: relative;
  border: 0.05rem solid ${({ theme }) => theme.colors.gray200};
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.white100};
  width: 100%;
  ${({ theme }) => theme.fonts.caption200}

  &::after {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    content: url(${arrow});
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
