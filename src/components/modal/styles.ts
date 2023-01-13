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
  background-color: ${(props) => props.theme.background};
  margin: auto;

  width: 48rem;
  margin-top: 1.5rem;

  padding: 1.4rem 1rem 8.1rem 3.6rem;

  form>div {
    width: 100%;
    background-color: red;
    justify-items: flex-start;
    display: flex;
    flex-direction: column;
  }
`;
export const Header = styled.header`
  justify-content: space-between;
  padding: 0rem 1rem;
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
