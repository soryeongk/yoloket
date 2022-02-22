import styled from "styled-components";

import { logo } from "../../assets";

export default function Header() {
  return (
    <StHeader>
      <StLogo src={logo} alt="욜로켓 로고" />
    </StHeader>
  );
}

const StHeader = styled.header`
  padding: 2.5rem 2rem;
`;

const StLogo = styled.img`
  width: 32.1rem;
  height: 4rem;
`;
