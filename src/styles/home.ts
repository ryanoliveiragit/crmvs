import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 1.6rem 3.43rem;
  background-color: ${(props) => props.theme.background};
  width: 100%;

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
  margin-top: .75rem;
  margin-bottom: 1rem;

  width: 100%;
  display: flex;
  justify-content: space-between;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
`;
