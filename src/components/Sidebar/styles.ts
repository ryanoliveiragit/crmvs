import styled from "styled-components";

export const ContainerSidebar = styled.nav`
  padding: 2.87rem 0.75rem;
  text-align: center;

  background-color: ${props => props.theme.blue};
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    margin-bottom: 2.3rem;
    list-style: none;
  }
`;
export const Avatar = styled.div`
  img {
    width: 3.81rem;
    border-radius: 100%;
    border: medium solid ${(props) => props.theme.white};
  }
  h1 {
    margin-top: 0.85rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;

    color: ${(props) => props.theme.white};
  }
`;
export const Items = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
`;
