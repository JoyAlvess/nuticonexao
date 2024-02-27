import styled from "styled-components";

export const ContainerDash = styled.div``;

export const ContentHeader = styled.div`
  background-color: #01bdb9;
  height: 200px;
  padding: 23px 4rem 0;
`;

export const ContentTitlePage = styled.div`
  span {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
  }
`;

export const HeaderDash = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 0.625rem 0 0;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export const BorderLeft = styled.span`
  border-left: 2px solid #fff;
  height: 28px;
`;
