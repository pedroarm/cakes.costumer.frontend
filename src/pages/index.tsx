import React, { useState } from 'react'
import Head from 'next/head'

import Header from 'components/Header'
import Card from 'components/Card'
import MockedProducts from 'shared/utils/products.mock'

import * as S from 'styles/pages/Home'

const Home: React.FC = () => {
  const [products] = useState(MockedProducts)
  return (
    <S.Container>
      <Head>
        <title>Home</title>
      </Head>

      <Header />

      <S.Main>
        {products.map(product => (
          <Card key={product.title} data={product} />
        ))}
      </S.Main>
    </S.Container>
  )
}

export default Home
