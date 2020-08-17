import React, { useState } from 'react';
import GlobalStyles from './styles/global';
import styled from 'styled-components';
import { GrClock, GrDocumentText } from 'react-icons/gr';

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px dotted black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PricingContainer = styled.div`
  width: 450px;
  height: 400px;
  border-radius: 5px;
  padding: 40px 50px;

  -webkit-box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
  -moz-box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
  box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
`;

const Title = styled.h3`
  font-size: 22px;
  color: #212223;
  margin: 10px 0;
  font-weight: 500;
`;

const Paragraph = styled.p`
  color: #afb3bb;
  margin: 10px 0;
  line-height: 150%;
`;

const PricingOptionContainer = styled.div`
  width: 100%;
  height: 100px;
  /* border: 1px solid black; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hourly = styled.button`
  width: 50%;
  height: 45px;
  margin-right: 15px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #5c5e60;
  background: #f2f5ff;
  border: 1px solid #5d82ff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
`;

const Fixed = styled.button`
  width: 50%;
  height: 45px;
  margin: 15px;
  border-radius: 5px;
  border: 1px solid #e9ecf0;
  background: none;
  font-weight: 500;
  font-size: 14px;
  color: #5c5e60;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;

  &:hover {
    background: #f2f5ff;
    border: 1px solid #5d82ff;
  }
`;

const Pricing = styled.h3`
  font-weight: 400;
  font-size: 36px;
  color: #343536;
  padding: 10px;

  &::before {
    content: '$';
    font-size: 16px;
    color: #a1aab7;
    float: inline-start;
    margin: 2px;
  }

  &::after {
    content: ' / hour';
    font-size: 16px;
    color: #a1aab7;
    margin: 2px;
  }
`;

const Range = styled.input``;

function App() {
  const [hourly, setHourly] = useState(true);
  const [fixed, setFixed] = useState(false);
  const [price, setPrice] = useState(45);

  const handleRangeChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Layout>
      <GlobalStyles />
      <PricingContainer>
        <Title>Set up your pricing</Title>
        <Paragraph>
          Please set up your hourly or fixed rate so that
          <br /> the client is aware of your pricing.
        </Paragraph>
        <PricingOptionContainer>
          <Hourly>
            <GrClock
              style={{ fontSize: '20px', color: '#5c5e60', margin: '5px' }}
            />
            Hourly
          </Hourly>
          <Fixed>
            <GrDocumentText
              style={{ fontSize: '20px', color: '#5c5e60', margin: '5px' }}
            />
            Fixed
          </Fixed>
        </PricingOptionContainer>
        <Pricing>{price}</Pricing>
        <Range
          type='range'
          min={25}
          max={180}
          value={price}
          onChange={handleRangeChange}
        />
      </PricingContainer>
    </Layout>
  );
}

export default App;
