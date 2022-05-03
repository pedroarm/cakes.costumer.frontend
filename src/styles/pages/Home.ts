import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  background: ${props => props.theme.colors.neutral.light.pure};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;
  max-width: 80%;
  background: ${props => props.theme.colors.neutral.light.pure};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  justify-items: center;
  align-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`
