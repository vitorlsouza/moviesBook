import React, { Component } from 'react';

import {
  Wrapper,
  Container,
  TopHeader,
  CenterHeader,
  BottomHeader,
  Brand,
  Search,
  User,
  Login,
  SignUp,
  BorderBottom,
  Types,
  Separator,
  Menu,
} from './styles';

class Header extends Component {
  state = {
    types: ['Drama', 'Suspense', 'Ação', 'Comédia', 'Terror'],
  };
  render() {
    return (
      <Wrapper>
        <Container>
          <TopHeader>
            <Brand>The Movie Book</Brand>
            <Search />
            <User>
              <Login>Login</Login>
              <SignUp>Sign Up</SignUp>
            </User>
          </TopHeader>
          <CenterHeader />
          <BottomHeader>
            <BorderBottom />
            <Menu>
              {this.state.types.map(type => (
                <>
                  <Types>{type}</Types>
                  <Separator />
                </>
              ))}
            </Menu>
          </BottomHeader>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
