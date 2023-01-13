import styled from "styled-components";

export const AppStaticsContainer = styled.div`
  width: 100%;
  margin-top: 0.9rem;
  
  background-color: ${props => props.theme.white};
  padding: 1.25rem;

  border-radius: 8px;
  filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.25));
  height: 6rem;
`;
export const Count = styled.h1`
  color: ${props => props.theme.blue};
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 38px;
`;
export const Title = styled.p`
    margin-top: .25rem;
    font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: .8rem;
  line-height: 15px;
`

