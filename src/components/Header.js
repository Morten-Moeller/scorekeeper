import styled from 'styled-components'

export default function Header({ children }) {
  return <Heading>{children}</Heading>
}

const Heading = styled.h2`
  font-weight: 300;
  font-size: 1.25rem;
  text-align: center;
`
