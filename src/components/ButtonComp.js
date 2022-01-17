import styled from 'styled-components';

export const Button = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#ae9bda' : '#010106')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010106' : '#e6e6e6')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#e6e6e6' : '#ae9bda')};
        color: ${({primary}) => (primary ? '#000' : 'ae9bda')};
    }
`