import Image from 'next/image'
import styled from 'styled-components'
import { Row, Col, Button, Drawer } from 'antd'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Container>
      <PageContainer>
        <Row align='middle' justify='space-between'>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Link href='/'>
              <HeaderLogo
                src="/images/bitriel.png"
                alt="bitriel"
                width={220}
                height={80}
                style={{cursor: 'pointer'}}
              />
            </Link>
          </Col>
          <Col xs={12} sm={12} md={0} lg={0} xl={0}>
            <Row justify='end'>
              <img 
                src="/images/menu.svg"
                alt="bitriel"
                width={32}
                height={32}
                onClick={showDrawer}
              />
            </Row>
          </Col>
          <Col xs={12} sm={12} md={0} lg={0} xl={0}>
            <DrawerStyled
              drawerStyle={{background: '#131a35'}}
              title=""
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Row justify='center'>
                <Image 
                  src="/images/bitriel.png"
                  alt="bitriel"
                  width={180}
                  height={60}
                />
                <Link href='/about'>
                  <HeaderItem>About Us</HeaderItem>
                </Link>
                <Spacing/>
                <a href="https://play.google.com/store/apps/details?id=com.selendra.secure_wallet&hl=en&gl=US" target='_blank'>
                  <HeaderItem>Wallet</HeaderItem>
                </a>
                <Spacing/>
                <ButtonStyled type='ghost'><Link href='https://app.bitriel.com' target='_blank'>Launch App</Link></ButtonStyled>
              </Row>
            </DrawerStyled>
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <Row align='middle' justify='end'>
              <Link href='/about'>
                <HeaderItem>About</HeaderItem>
              </Link>
              <a href="https://play.google.com/store/apps/details?id=com.selendra.secure_wallet&hl=en&gl=US" target='_blank'>
                <HeaderItem>Wallet</HeaderItem>
              </a>
              <ButtonStyled type='ghost'>
                <Link href='https://app.bitriel.com' target='_blank'>
                  Launch App
                </Link>
              </ButtonStyled>
            </Row>
          </Col>
        </Row>
      </PageContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
`
const PageContainer = styled.div`
  max-width: 76rem;
  height: 80px;
  margin: 0 auto;
  padding-bottom: 170px;
  padding-top: 20px;
  @media (max-width: 500px) {
    padding-right: 20px;
  }
  @media (max-width: 76rem) { 
    padding: 0 1em;
  }
`
const HeaderLogo = styled.img`
  width: 220px;
  height: 80px;
  @media (max-width: 500px) {
    width: 110px;
    height: 40px;
  }
`
const ButtonStyled = styled(Button)`
  width: 180px;
  height: 50px;
  border-radius: 4px;
  color: #03A9F4;
  font-size: 20px;
  font-weight: 600;
  border-width: 2px;
  border-color: #03A9F4;
  &:hover {
    background: #03A9F4;
    color: #fff;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`
const HeaderItem = styled.p`
  color: #03A9F4;
  font-size: 20px;
  font-weight: 600;
  margin: 0 4rem;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`
const DrawerStyled = styled(Drawer)`
  color: #03A9F4;
`
const Spacing = styled.div`
  margin: 2em 0;
`