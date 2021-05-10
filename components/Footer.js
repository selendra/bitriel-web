import Image from 'next/image'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import Link from 'next/link'

export default function Footer() {
  return (
    <Container>
      <PageContainer>
        <Row justify='space-between'>
          <Col xs={24} sm={24} md={8} lg={10} xl={14}>
            <Image 
              src="/images/bitriel.png"
              alt="bitriel"
              width={160}
              height={60}
            />
          </Col>
          <Col xs={24} sm={24} md={16} lg={14} xl={10}>
            <FooterContainer justify='space-between'>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Title>Company</Title>
                <Link href='/about'><SubTitle>About Us</SubTitle></Link>
                <Link href='/termofuse'><SubTitle>Term of use</SubTitle></Link>
                <Link href='/privacy'><SubTitle>Privacy & Policy</SubTitle></Link>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Title>Connect with us</Title>
                <Row>
                  <Col>
                  <ListStyled>
                    <Link href='https://www.facebook.com/selendraio'>
                      <ListItem>
                        <img 
                          src="/images/facebook.svg"
                          alt="facebook"
                          width={32}
                          height={32}
                        />
                        <Text>Facebook</Text>
                      </ListItem> 
                    </Link>
                    <Link href='https://twitter.com/SelendraOrg'>
                      <ListItem>
                        <img 
                          src="/images/twitter.svg"
                          alt="twitter"
                          width={32}
                          height={32}
                        />
                        <Text>Twitter</Text>
                      </ListItem>
                    </Link>
                    <Link href='https://www.linkedin.com/company/selendra'>
                      <ListItem>
                        <img 
                          src="/images/linkedin.svg"
                          alt="linkedin"
                          width={32}
                          height={32}
                        />
                        <Text>Linkedin</Text>
                      </ListItem>
                    </Link>
                  </ListStyled>
                  </Col>
                  <Col offset={2}>
                  <ListStyled>
                    <Link href='https://t.me/selendraorg'>
                      <ListItem>
                        <img 
                          src="/images/telegram.svg"
                          alt="telegram"
                          width={32}
                          height={32}
                        />
                        <Text>Telegram</Text>
                      </ListItem> 
                    </Link>
                    <Link href='https://medium.com/selendra'>
                      <ListItem>
                        <img 
                          src="/images/medium.svg"
                          alt="medium"
                          width={32}
                          height={32}
                        />
                        <Text>Medium</Text>
                      </ListItem>
                    </Link>
                  </ListStyled>
                  </Col>
                </Row>
              </Col>
            </FooterContainer>
          </Col>
        </Row>
      </PageContainer>
      <FooterCopyright align='middle' justify='center'>
        <p style={{margin: 0}}>Copyright © 2020 Selendra</p>
      </FooterCopyright>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  background: #182b36;
  position: sticky;
  top: 100%;
`
const PageContainer = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  padding: 4em 0;
  @media (max-width: 76rem) {
    padding: 0 1em;
  }
`
const Title = styled.h3`
  font-size: 32px;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 24px;
  }
  @media (max-height: 500px) {
    font-size: 24px;
  }
`
const Text = styled.p`
  margin: 0;
  margin-left: 10px;
  font-size: 16px;
`
const FooterContainer = styled(Row)`
  min-width: 300px;
  max-width: 500px;
`
const SubTitle = styled.h2`
  font-size: 24px;
  color: #f5f5f5;
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-height: 500px) {
    font-size: 16px;
  }
`
const FooterCopyright = styled(Row)`
  background: #122029;
  height: 40px;
`
const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItem = styled.li`
  padding: 10px 0;
  display: flex;
  align-items: center;
`