import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 15rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  :hover {
    cursor: pointer;

    @media (min-width: 700px) {
      & img {
        transform: scale(1.01);
      }
    }
  }
`

export const Image = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  transition: 0.5s;
  border-radius: 2px;
`

export const Informations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.p`
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`
