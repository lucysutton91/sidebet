import React from 'react'

import Split from 'grommet/components/Split'
import Sidebar from 'grommet/components/Sidebar'
import LoginForm from 'grommet/components/LoginForm'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Footer from 'grommet/components/Footer'
import Logo from 'grommet/components/icons/Grommet'
import Button from 'grommet/components/Button'

export default class Login extends React.PureComponent {
  render() {
    return (
      <Split flex="left" separator>
        <Article>
          <Section
            full
            colorIndex="brand"
            pad="large"
            justify="center"
            align="center"
          >
            <Heading tag="h1"><strong>Welcome to sideBet</strong></Heading>
            <Paragraph>Please log in</Paragraph>
          </Section>
        </Article>

        <Sidebar justify="between" align="center" pad="none" size="large">
          <span />
          {/* <LoginForm
            align="start"
            logo={<Logo className="logo" colorIndex="brand" />}
            title="sideBet"
            rememberMe={true}
            onSubmit={}
          /> */}
          <Button
          onClick={() => console.log('clicked')}
          path="/Landing"
          label="Fake Login"
          primary={true}
          >
          </Button>
          <Footer
            direction="row"
            size="small"
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <span className="secondary">Change this</span>
          </Footer>
        </Sidebar>
      </Split>
    )
  }
}
