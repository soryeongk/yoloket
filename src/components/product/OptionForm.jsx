import styled from "styled-components";

import { Selection } from ".";

const OPTION_DEFAULT = " 옵션을 선택해주세요";

export default function OptionForm({ optionFrameList, selectableOptionList, optionSelected, onSelectOptions }) {
  return (
    <StOptionWrapper>
      <StH3>옵션</StH3>
      {optionFrameList &&
        optionFrameList.map((options, idx) => {
          const ableSelect =
            Object.values(optionSelected).filter((value) => !value.includes(OPTION_DEFAULT)).length >= idx;

          return (
            <Selection
              key={idx}
              ableSelect={ableSelect}
              selectableOption={selectableOptionList}
              options={options}
              optionSelected={optionSelected}
              onSelectOptions={onSelectOptions}
            />
          );
        })}
    </StOptionWrapper>
  );
}

const StOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 1.5rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.white300};
`;

const StH3 = styled.h3`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.fonts.body200}
`;
