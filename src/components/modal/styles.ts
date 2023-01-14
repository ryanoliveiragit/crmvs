import styled from "styled-components";

export const ContainerModal = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.7);
`;
export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.modal};
  margin: auto;
  border-radius: 5px;

  width: 39rem;
  margin-top: 1.5rem;

  padding: 1.4rem 1rem 3rem 3.6rem;
  form > section {
    width: 100%;
    margin-top: 1.75rem;
    justify-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    font-size: 1rem;
    font-weight: 500;
  }
  form > section > input {
    padding: 0.8rem;
    margin-top: 0.87rem;
    font-size: 0.85rem;
    width: 31rem;
    height: 2.6rem;
    border: none;
    color: ${(props) => props.theme.black};
    background-color: #ebecef;
  }
  form > section > button {
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.blue};
    padding: 0.6rem 2rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  select {
    cursor: pointer;
    margin-top: 0.87rem;
    font-size: 0.85rem;
    width: 31rem;
    height: 2.6rem;
    padding: 2px 5px;
  }
`;
export const Header = styled.header`
  justify-content: space-between;
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  button {
    background-color: transparent;
    color: ${(props) => props.theme.black};
    font-size: 1.8rem;
    padding: 0.1rem 0.5rem;
    border: none;
    cursor: pointer;
  }
`;
