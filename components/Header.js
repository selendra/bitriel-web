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
              <img
                src="/images/bitriel.png"
                alt="bitriel"
                width={160}
                height={60}
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
              drawerStyle={{background: '#1D3442'}}
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
                  width={360}
                  height={120}
                />
                <Link href='/about'>
                  <HeaderItem>About Us</HeaderItem>
                </Link>
                <Spacing/>
                <ButtonStyled type='ghost'><Link href='https://play.google.com/store/apps/details?id=com.selendra.secure_wallet&hl=en&gl=US' target='_blank'>Get APP</Link></ButtonStyled>
              </Row>
            </DrawerStyled>
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <Row align='middle' justify='end'>
              <Link href='/about'>
                <HeaderItem>About</HeaderItem>
              </Link>
              <ButtonStyled type='ghost'>
                <Link href='https://play.google.com/store/apps/details?id=com.selendra.secure_wallet&hl=en&gl=US'>
                  Get APP
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
  @media (max-width: 500px) {
    padding-right: 20px;
  }
  @media (max-width: 76rem) { 
    padding: 0 1em;
  }
`
const ButtonStyled = styled(Button)`
  width: 160px;
  height: 40px;
  border-radius: 64px;
  color: #03A9F4;
  font-size: 14px;
  font-weight: 600;
  border-width: 2px;
  border-color: #03A9F4;
  &:hover {
    background: #03A9F4;
    color: #fff;
  }
`
const HeaderItem = styled.p`
  color: #03A9F4;
  font-size: 16px;
  font-weight: 600;
  margin: 0 4rem;
  cursor: pointer;
`
const DrawerStyled = styled(Drawer)`
  color: #03A9F4;
`
const Spacing = styled.div`
  margin: 2em 0;
`