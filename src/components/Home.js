import React from 'react'
import styled from "styled-components";
import Section from "./Section"

function Home() {
  return (
    
      <Container>
        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgrountImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existion Inventory"
        />
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgrountImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existion Inventory"/>
        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgrountImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existion Inventory"/>
        <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgrountImg="model-X.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existion Inventory"/>
        <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgrountImg="solar-panel.jpg"
        leftBtnText="Oder-Now"
        rightBtnText="Learn more"/>
        <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgrountImg="solar-roof.jpg"
        leftBtnText="Oder-Now"
        rightBtnText="Learn more"/>
        <Section 
        title="Accessories"
        description=""
        backgrountImg="accessories.jpg"
        leftBtnText="Shop-Now"
        />
        </Container>
    
  )
}

export default Home;

const Container = styled.div`
    height:100vh;
`


