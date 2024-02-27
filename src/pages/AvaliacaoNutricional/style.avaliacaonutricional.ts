import styled from 'styled-components'

import bgImg from "../../assets/001.jpg";

export const BackgroundImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${bgImg});
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 5rem;
`;

export const Background = styled.div`
  background: #ffffff73;
  border-radius: 12px;
  padding: 2rem 1.8rem;
  position: absolute;

  .contentInputsClass {
    &:first-child {
      margin-right: 30px;
    }
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 28px;
    font-weight: 600;
  }

  span:last-child {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const WrapperInputs = styled.form`
  margin: 2rem 0 0;
`;

export const ContainerInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const ContentRadios = styled.div`
  width: 100%;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
