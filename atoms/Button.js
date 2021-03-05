import React from 'react'
import styled from 'styled-components'

const PrimaryButton = ({ children }) => {
  return <Button>{children}</Button>
}

const Button = styled.button`
  padding: 0.3rem 0.7rem;
  border: 2px solid var(--primary-color);
  background-color: var(--primary-color);
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
  color: var(--white-color);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: var(--white-color);
    color: var(--primary-color);
  }
`

export default PrimaryButton
