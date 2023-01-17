import styled from "styled-components";

export const ContainerApplications = styled.div``;
export const ApplicationsContent = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.gray};
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0px;
    padding: 1.8rem 1.1rem;
    grid-row-gap: 0px;
  }
  li {
    list-style: none;
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 14px;
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${(props) => props.theme.gray};
  }
`;
