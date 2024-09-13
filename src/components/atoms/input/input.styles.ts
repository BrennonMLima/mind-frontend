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

    &.number-input {
        background: --var(cinza-escuro);
        border: 0.07rem solid #e3e3e3;
        border-radius: 10px;
        margin-right: 15px;
        padding: 10px 10px;
        max-width: 80px;
    }

`;

export const RadioStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    label{
        font-size: 15px;
    }
`