import React from 'react'
import {popularProducts} from './data';
import Product from './Product';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
function Products() {
  return (
    <div>
      <Container>
        {popularProducts.map(item=>(
            <Product item = {item} key={item.id}/>
        ))}
      </Container>
    </div>
  )
}

export default Products;