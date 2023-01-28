import styled, { css } from "styled-components";

function HeaderButton({ children, active, secondary, footer, ...props }) {
  return <Button primary={active} secondary={secondary} footer={footer} {...props}>{children}</Button>
}

export default HeaderButton;


const Button = styled('button')`
  border: 1px solid #6A8AFF;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  padding: 10px 20px;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  ${props => props.primary && css`
    background: #6A8AFF;
    color: #fff;
  `}
  ${props => props.secondary && css`
    padding: 4px 8px;
  `}
  ${props => props.footer && css`
    border: 1px solid #fff;
    color: #fff;
    /* &:hover{
      color: #000;
      background: #fff;
      font-weight: 600;
    } */
  `}
  ${props => props.footer && props.primary && css`
      color: #000;
      background: #fff;
      font-weight: 600;
  `}
`