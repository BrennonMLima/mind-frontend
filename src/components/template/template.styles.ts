import styled from 'styled-components';

export const Main = styled.div`
    height: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 80px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background: var(--cinza-escuro);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    min-height: 300px;
    width: 30%;
    border-radius: 30px;
    padding: 5px 30px;
    margin-top: 20px;
    box-sizing: border-box; 
`
export const ContainerGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
`
export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 30px;
`

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--cinza-escuro);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
    width: 100%;
`;

export const TaskDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    div {
        font-size: 16px;
        line-height: 1.5;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`