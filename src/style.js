import styled from '@emotion/styled';

const colors = {
  primary: {
    basic: '#1976d2',
    hover: '#115293',
  },
  secondary: {
    basic: '#dc004e',
    hover: '#9a0036',
  },
  default: {
    basic: '#e0e0e0',
    hover: '#d5d5d5',
  },
};


export const Button = styled.button`
    color: #fff;
    background-color: ${(props) => (colors[props.color].basic)};
    padding: 6px 16px;
    margin:5px;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;

    &:hover {
    background-color: ${(props) => (colors[props.color].hover)};
    }
    
    `;


export const ListWrapper = styled.ul`
display:flex;
flex-direction:row;
margin: 15px 0 ;
`;
