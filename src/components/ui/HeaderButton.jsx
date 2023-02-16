import styled, { css } from "styled-components";

function HeaderButton({ children, active, secondary, footer, ...props }) {
  return <Button primary={active} secondary={secondary} footer={footer} {...props}>{children}</Button>
}

export default HeaderButton;


const Button = styled('a')`
  /* border: 1px solid #6A8AFF; */
  border: 1px solid rgba(55, 99, 255, 0.4);
  text-decoration: none;
  color: #292D32;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 120%;
  padding: 0.625rem 1.25rem;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 1px 4px 1px rgba(55, 99, 255, 0.4);
  margin-left: 10px;
  &:hover{
    background: #6A8AFF;
    color: #fff;
    border: 1px solid #6A8AFF;
  }
  ${props => props.active && css`
    background: #6A8AFF;
    color: #fff;
    border: 1px solid #6A8AFF;
  `}
  ${props => props.primary && css`
    background: #6A8AFF;
    color: #fff;
    border: 1px solid #6A8AFF;
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