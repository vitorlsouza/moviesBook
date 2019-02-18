import styled from 'styled-components';

import image from '../../assets/img/back4.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0 60px;
  background-image: url(${image});
  background-size: cover;
`;

export const TopHeader = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Brand = styled.span`
  font-size: 30px;
  font-weight: 900;
  color: #ffffff;
  width: 250px;
  height: 37.5px;
`;

export const Search = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  text-align: center;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

export const Login = styled.button`
  width: 110px;
  height: 40px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border: none;
`;

export const SignUp = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  background-color: #ff0079;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border: none;
`;

export const CenterHeader = styled.div`
  flex: 3;
`;

export const BottomHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const BorderBottom = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Types = styled.span`
  font-size: 18px;
  color: #fff;
`;

export const Separator = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.4);
`;
