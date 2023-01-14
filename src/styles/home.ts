import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 1.6rem 3.43rem;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: 100vh;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 28px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 2rem;
`;
export const ContainerAppStatic = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ContainerInterviews = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const Flex = styled.div`
  display: flex;
  gap: 2rem;
`;
export const Header = styled.header`
  margin: 2.8rem 0 0.9rem 0;

  width: 100%;
  display: flex;
  justify-content: space-between;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
`;
export const HeaderBoard = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  width: 100%;
  display: flex;
  justify-content: space-between;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;

  div > svg {
    fill: ${(props) => props.theme.gray};
    margin-left: 0.6rem;
    margin-top: 0.5rem;
  }
`;
export const DeashbordItems = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding: 1.8rem 1.1rem;
`;
export const AplicationHeader = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    padding: 0rem 1.1rem;
    grid-row-gap: 0px;
  }
  li {
    list-style: none;
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 14px;

    color: ${(props) => props.theme.black};
  }
`;
