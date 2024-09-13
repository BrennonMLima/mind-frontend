import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: 0;
  background: var(--azul-escuro);
  border-radius: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;

  &:hover {
    background: var(--azul-claro);
  }

  &:focus {
    outline: none;
  }
`
;
