import { NextSeo } from 'next-seo';
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Row, Col, Button, Card } from 'antd'
import BackgroundAnimation from '../components/BGanimation'

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Bitriel"
        description="Digital wallet management for cross-chain assets, staking and governance operations, collection and self-owned private key."
      />
      <Container>
        <FirstSection>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Title>Experience the <br/>power of DeFi <br/>with <span>Bitriel</span></Title>
              <Row justify='space-between'>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <ButtonStyled type='ghost'><a href='https://app.bitriel.com' target='_blank'>Launch App</a></ButtonStyled>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <ButtonStyled type='ghost'>Read More</ButtonStyled>
                </Col>
              </Row>
            </Col>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <BackgroundAnimation/>
            </Col>
          </Row>
        </FirstSection>
        <Section>
          <Row>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <Row justify='center'>
                <BridgeImg src='/images/sel-bridge.png' alt='sel-bridge' />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <SubTitle>A Bridge for DeFi</SubTitle>
              <Text>Bitriel offers DeFi and AMM projects a clear path for bridging platforms and liquidity with the evolved capabilities of any EVM compatibility echo system.</Text>
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <Row justify='center'>
                <BridgeImg src='/images/sel-bridge.png' alt='sel-bridge' />
              </Row>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <SubTitle>Decentralized App</SubTitle>
              <Text>Access on immutable money market protocol directly on-chain.</Text>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify='center'>
                <DecentralizeImg src='/images/decentralized.svg' alt='sel-bridge' />
              </Row>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <Row justify='center'>
                <ScalableImg src='/images/scalable.svg' alt='sel-bridge' />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <SubTitle>Scalable</SubTitle>
              <Text>Built on with Selendra Chain for fast, secure, and low cost transaction, Currently operating on Binance Smart Chain.</Text>
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <Row justify='center'>
                <ScalableImg src='/images/scalable.svg' alt='sel-bridge' />
              </Row>
            </Col>
          </Row>
        </Section>
        <Row>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <Row justify='center'>
              <ProductImg src='/images/app1.png' alt='app' />
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <SubTitle>Bitriel Wallet</SubTitle>
            <Text>Digital wallet management for cross-chain assets, staking and governance operations, collection and self-owned private key.</Text>
            <ButtonStyled type='ghost'><a href="https://play.google.com/store/apps/details?id=com.selendra.secure_wallet&hl=en&gl=US" target='_blank'>Download App</a></ButtonStyled>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <Row justify='center'>
              <ProductImg src='/images/app1.png' alt='app' />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Container = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  @media (max-width: 76rem) {
    padding: 0 1em;
  }
` 
const FirstSection = styled.div`
  height: 70vh;
  @media (max-width: 768px) {
    height: auto;
  }
`
const Section = styled.div`
  padding: 0 56px;
  padding-bottom: 200px;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`
const BridgeImg = styled.img`
  width: 520px;
  height: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`
const DecentralizeImg = styled.img`
  width: 320px;
  height: auto;
  @media (max-width: 500px) {
    width: 80%;
  }
`
const ScalableImg = styled.img`
  width: 520px;
  height: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`
const Title = styled.h1`
  font-size: 88px;
  font-weight: 700;
  color: #FFF;
  span {
    font-weight: 900;
    font-size: 88px;
    background: -webkit-linear-gradient(65deg, rgba(240,201,10,1) 15%, rgba(3,169,244,1) 73%, rgba(3,169,244,1) 100%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    font-size: 36px;
    span {
      font-size: 52px;
    }
  }
`
const SubTitle = styled.h1`
  font-size: 52px;
  font-weight: 900;
  color: #FFF;
  padding-top: 80px;
`
const Text = styled.p`
  color: #84879c;
  font-size: 20px;
`
const ButtonStyled = styled(Button)`
  width: 220px;
  height: 60px;
  color: #FFF;
  font-size: 20px;
  margin-top: 10px;
  border-radius: 4px;
  border-color: #5ac4be;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const ProductImg = styled.img`
  width: 280px;
  height: auto;
`