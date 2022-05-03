import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.neutral.light.pure};
  min-height: 74px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
    rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Category = styled.a`
  color: ${props => props.theme.colors.neutral.dark[3]};
  font-family: ${props => props.theme.font.family.base};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.875rem;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutral.dark.pure};
  }
`

export const SearchContainer = styled.div`
  font-size: 0.9rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.neutral.light[3]};

  :focus-within {
    border: 1px solid ${props => props.theme.colors.neutral.dark[3]};
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export const SearchContainerMobile = styled.div`
  font-size: 0.9rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.neutral.light[3]};

  :focus-within {
    border: 1px solid ${props => props.theme.colors.neutral.dark[3]};
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 1rem;
  }

  @media (min-width: 700px) {
    display: none;
  }
`

export const Search = styled.input`
  width: 100%;
  background: ${props => props.theme.colors.neutral.light.pure};
  color: ${props => props.theme.colors.neutral.dark.pure};
  outline: 0;
  border: none;
  padding-right: 0.75rem;
  min-width: 30vw;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ShoppingBag = styled.div`
  transition: 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

export const Avatar = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 9999px;
  background: linear-gradient(120deg, #7ccaca, #cf7f7d50),
    url(https://grainy-gradients.vercel.app/noise.svg);
  transition: 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
