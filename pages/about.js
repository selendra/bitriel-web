import {NextSeo} from 'next-seo'
import styled from 'styled-components'
import Header from '../components/Header'
import Image from 'next/image'
import { Row, Col, Button } from 'antd'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <Container>
      <NextSeo
        title="About | Bitriel"
        description="The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications, as simple as the web and mobile applications we use today."
      />
      <PageContainer>
        <Row>
          <Col>
            <Title>About</Title>
          </Col>
          <Col>
            <Text>
              The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications, as simple as the web and mobile applications we use today.
            </Text>
            <hr/>
            <Text>
              Selendra presents an innovative solution to the problem of mass-user adoption in blockchain applications.We are rethinking the nature of web and mobile application development, incorporating blockchain for both developer and user benefit.The coming digital economy will be profoundly molded and impacted by the great recent innovation of blockchain technology.Selendra is built upon blockchain technology as an add-on feature to KOOMPI, forming a new economic micro-community. Selendra leverages the power and scope of KOOMPI, while KOOMPI leverages the power and scope of Selendra to form a positive feedback loop.
            </Text>
          </Col>
        </Row>
      </PageContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 270px);
`
const PageContainer = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  @media (max-width: 76rem) {
    padding: 0 1em;
  }
`
const Title = styled.h1`
  font-size: 52px;
  color: #f5f5f5;
  @media (max-width: 500px) {
    font-size: 32px;
  }
`
const Text = styled.p`
  font-size: 24px;
  color: #f5f5f5;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`