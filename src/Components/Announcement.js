import React from 'react'
import styled from 'styled-components'



const Containers = styled.div `
 background-color: teal;
 height: 40px;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 14px;
 font-weight: 500
`


function Announcement() {
  return (
    <div>
      <Containers>
        Super Deal!!! Free shipping on orders over $50..!!
      </Containers>
    </div>
  )
}

export default Announcement;