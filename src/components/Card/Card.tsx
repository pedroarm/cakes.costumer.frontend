import React from 'react'
import ProductModel from 'models/ProductModel'

import * as S from './styles'

interface CardProps {
  data: ProductModel
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { imageUrl, title, price } = data

  return (
    <S.CardContainer>
      <S.Image src={imageUrl} />
      <S.Informations>
        <S.Text>{title}</S.Text>
        <S.Text>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price / 100)}
        </S.Text>
      </S.Informations>
    </S.CardContainer>
  )
}

export default Card
