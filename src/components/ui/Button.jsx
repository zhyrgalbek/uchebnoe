import styled, { css } from "styled-components";

function HeaderButton({ children, active, secondary }) {
  return <Button primary={active} secondary={secondary}>{children}</Button>
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
`