import Head from 'next/head'
import Link from 'next/link'  
import Image from 'next/image'
import styled from 'styled-components'
import { Row, Col, Button } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Container>
      <Head>
        
      </Head>
      <Header />
      <PageContainer>
        <SectionOne>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Spacing />
            <Title>Bitriel Wallet</Title>
            <SubTitle>
              Digital wallet management for cross-chain assets, staking and governance operations, collection and self-owned private key.
            </SubTitle>
            <Row align='middle'>
              <ButtonStyled><Link href='https://play.google.com/store/apps/details?id=com.selendra.secure_wallet&hl=en&gl=US' target='_blank'>Get Android App</Link></ButtonStyled>
              <Text>Coming soon on IOS...</Text>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row justify='center'>
              <Image 
                src="/images/app1.png"
                alt="Picture of the author"
                width={280}
                height={560}
              />
            </Row>
          </Col>
        </SectionOne>
      </PageContainer>
      <Section>
        <PageContainer>
            <Row>
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                <Row justify='start' align='bottom' style={{height: '100%'}}>
                  <Image 
                    src="/images/mobile.png"
                    alt="Picture of the author"
                    width={565}
                    height={592}
                  />
                </Row>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Spacing />
                <Image 
                  src="/images/logo.png"
                  alt="Picture of the author"
                  width={80}
                  height={90}
                />
                <TitleB>Get Started with Bitriel</TitleB>
                <SubTitleB>
                  Bitriel Wallets are used to store and transact SEL tokens and multiple other cryptocoins. Wallets can be integrated into any application where a use case exists, connecting the application to the Selendra main chain.
                </SubTitleB>
                <ButtonStyled><Link href='https://play.google.com/store/apps/details?id=com.selendra.secure_wallet&hl=en&gl=US' target='_blank'>Get Android App</Link></ButtonStyled>
              </Col>
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <Row justify='start' align='bottom' style={{height: '100%'}}>
                  <Image 
                    src="/images/mobile.png"
                    alt="Picture of the author"
                    width={565}
                    height={592}
                  />
                </Row>
              </Col>
            </Row>
        </PageContainer>
      </Section>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
`
const PageContainer = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  @media (max-width: 76rem) {
    padding: 0 1em;
  }
`
const SectionOne = styled(Row)`
  padding: 4em 0;
  @media (max-width: 500px) {
    padding: 2em 0;
  }
`
const Title = styled.h1`
  font-size: 52px;
  font-weight: 600;
  color: #F5F5F5;
  @media (max-width: 500px) {
    font-size: 32px;
  }
`
const TitleB = styled.h1`
  font-size: 52px;
  font-weight: 600;
  color: #000;
  @media (max-width: 500px) {
    font-size: 32px;
  }
  @media (max-height: 500px) {
    font-size: 32px;
  }
`
const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`
const SubTitleB = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #000;
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-height: 500px) {
    font-size: 16px;
  }
`
const Spacing = styled.div`
  padding: 2rem 0;
  @media (max-width: 500px) {
    padding: .2rem 0;
  }
  @media (max-height: 500px) {
    padding: .2rem 0;
  }
`
const ButtonStyled = styled(Button)`
  width: 180px;
  height: 56px;
  background: #03A9F4;
  font-size: 16px;
  border-radius: 64px;
  border: none;
  color: #fff;
  font-weight: 600;
  margin: 10px 0;
  &:hover {
    background: #0080ba;
    color: #fff;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    width: 160px;
    height: 40px;
  }
`
const Section = styled.div`
  background: #f3f5f7;
  padding-top: 4em;
  @media (max-width: 500px) {
    padding-top: 2em;
  }
`
const Text = styled.p`
  font-size: 16px;
  margin: 0 1rem;
`