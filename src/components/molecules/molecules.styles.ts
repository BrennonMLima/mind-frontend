import styled from 'styled-components';

export const HeaderStyled = styled.div`
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    background-color: var(--cinza-escuro);
    color: #fff;
    padding: 15px 35px; 
`
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--cinza-escuro);
    gap: 6px;
    cursor: pointer;
`
export const FooterStyled = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    justify-content: center;
    background-color: var(--cinza-escuro);
    color: #fff;
    gap: 10px;
    padding: 10px 25px; 
`
export const SearchBoardlStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--cinza-escuro);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 30px;
    min-width: 70%;
    padding: 5px 30px;
    margin-top: 20px;
      &:focus-within {
    border-bottom: 2px solid ;
    background-color: var(--preto);
  }
`
export const TextArea = styled.textarea`
    display:flex;
    resize:none;
    height: 50px;
    align-items: center;
    font-size: 40px;
    width: 89%;
    background-color: var(--cinza-escuro);
    border-right: 1px #666 solid;
    margin-right: 1px;
    &:focus{
      background-color: var(--preto);
    }
`

export const TableHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--null);
    border-bottom: 0.07rem dotted #e3e3e3;
    min-width: 70%;
    padding: 10px 30px;
    margin-top: 0px;
    
    table tr:nth-child(odd) {
        background-color: #f0f0f0;
    }

  table tr:nth-child(even) {
        background-color: #fff;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  background: var(--azul-escuro);
  border-radius: 5px;
  margin-top: 70px;
  margin-right: 10px;
  border: solid 1px black;
  &:hover{
    background: var(--azul-claro);
}
`;

export const ModalHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ModalLabelStyled = styled.div`
`
