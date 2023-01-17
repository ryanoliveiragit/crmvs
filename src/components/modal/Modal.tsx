import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";
import { ContainerModal, ModalContent, Header } from "./styles";

interface ModalProps {
  closeModal: (value: boolean) => void;
}

export function Modal({ closeModal }: ModalProps) {
  const { itens, setItens }: any = useContext(MyContext);
  const [newAction, setNewAction] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newPercentage, setNewPercentage] = useState("");

  function handleCreateContract() {
    closeModal(false);
  }
  function handleNewAction(event: any) {
    setNewAction(event.target.value);
  }
  function handleNewValue(event: any) {
    setNewValue(event.target.value);
  }
  function handleNewPercentage(event: any) {
    setNewPercentage(event.target.value);
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    const newId = Math.random();
    setItens([
      ...itens,
      {
        company: newAction,
        id: newId,
        value: newValue,
        percentage: newPercentage,
      },
    ]);
    setNewAction("");
    closeModal(false);
  }

  return (
    <ContainerModal>
      <ModalContent>
        <Header>
          <span>Cadastrar Ação</span>
          <button onClick={handleCreateContract}>x</button>
        </Header>
        <form onSubmit={handleSubmit}>
          <section>
            <span>Ação</span>
            <input
              required
              placeholder="Apple"
              type="text"
              value={newAction}
              onChange={handleNewAction}
            />
          </section>

          <section>
            <span>Valor</span>
            <input
              type="number"
              required
              value={newValue}
              onChange={handleNewValue}
            />
          </section>

          <section>
            <span>Porcentagem de lucro mensal</span>
            <input
              type="number"
              required
              value={newPercentage}
              onChange={handleNewPercentage}
            />
          </section>
          <section>
            <button type="submit">submit</button>
          </section>
        </form>
      </ModalContent>
    </ContainerModal>
  );
}
