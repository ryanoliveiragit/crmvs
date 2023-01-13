import styled from "styled-components";

export const InterviewsStaticsContainer = styled.div`
  width: 12.5rem;
  margin-top: 0.9rem;

  background-color: ${(props) => props.theme.blue};
  padding: 1.25rem;

  border-radius: 8px;
  filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.25));
  height: 6rem;
`;
export const Count = styled.h1`
  color: ${(props) => props.theme.white};
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 38px;
`;
export const Title = styled.p`
  margin-top: 0.25rem;
  color: ${(props) => props.theme.white};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 15px;
`;
