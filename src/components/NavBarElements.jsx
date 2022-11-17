import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: grey;
`;
export const IconNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    `;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuItems = styled.li`
    height: 100%;
    font-size: 1.2rem;
    list-style: none;
    padding: 10px;
    &:hover{
        background-color: #5f5d5d;
        border-bottom: 0.3rem solid #b1b1b1;
        transition: 0.4s ease-in;
    }
`;