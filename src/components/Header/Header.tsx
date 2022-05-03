import React from 'react'
import Link from 'next/link'
import Search from '../../assets/icons/search.icon.svg'
import Bag from '../../assets/icons/bag.icon.svg'

import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Row>
        <S.Navigation>
          <span>
            <h3>Logo</h3>
          </span>
          <span>
            <Link href="/">
              <S.Category>Todos</S.Category>
            </Link>
          </span>
          <span>
            <Link href="/">
              <S.Category>Bolos de pote</S.Category>
            </Link>
          </span>
        </S.Navigation>

        <S.SearchContainer>
          <S.Search placeholder="Busque por produtos..." />
          <Search />
        </S.SearchContainer>

        <S.UserContainer>
          <S.ShoppingBag>
            <Bag />
          </S.ShoppingBag>

          <S.Avatar />
        </S.UserContainer>
      </S.Row>

      <S.SearchContainerMobile>
        <S.Search placeholder="Busque por produtos..." />
        <Search />
      </S.SearchContainerMobile>
    </S.HeaderContainer>
  )
}

export default Header
