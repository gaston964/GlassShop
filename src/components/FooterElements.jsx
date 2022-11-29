import styled from 'styled-components';

export const FooterContainer = styled.div`

`;
export const FooterNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`;
export const FooterRedes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const FooterNavLi = styled.li`
    height: 100%;
    font-size: 1.2rem;
    list-style: none;
    padding: 10px;
    font-weight: 300;
    &:hover{
        border-bottom: 0.1rem solid #2c2c2c;
        transition: 0.4s ease-in;
    }
`;
export const FooterNavUl = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;