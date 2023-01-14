import styled from "styled-components";

export const ContainerApplications = styled.div`
`;
export const ApplicationsContent = styled.div`
  border-bottom: 1px solid ${props => props.theme.gray};
  ul {
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 1.1rem;
  }
  li {
    list-style: none;
    font-style: normal;
    font-weight: 500;
    font-size: .75rem;
    line-height: 14px;

    color: ${props => props.theme.gray};
  }
`;
