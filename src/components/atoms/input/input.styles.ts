import styled from 'styled-components';

export const InputStyles = styled.input`
    background: #212528;
    border: 0.07rem solid var(--vermelho);
    border-radius: 10px;
    padding: 12px;

    &:focus {
        background: var(--preto);
    }
    
    &.filled {
        background: var(--preto);
    }

    &.date-input{
        width: 50%;
    }
    
`;

