import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";
import { ContainerModal, ModalContent, Header } from "./styles";

interface ModalProps {
  closeModal: (value: boolean) => void;
}

export function Modal({ closeModal }: ModalProps) {
  const { itens, setItens }: any = useContext(MyContext);
  const [newICompany, setNewCompany] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newJobID, setNewJobID] = useState("");
  const [newStatus, setNewStatus] = useState("");

  function handleCreateContract() {
    closeModal(false);
  }

  function handleNewCompany(event: any) {
    setNewCompany(event.target.value);
  }

  function handleNewPosition(event: any) {
    setNewPosition(event.target.value);
  }

  function handleNewDuration(event: any) {
    setNewDuration(event.target.value);
  }

  function handleNewJobID(event: any) {
    setNewJobID(event.target.value);
  }

  function handleNewStatus(event: any) {
    setNewStatus(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const newId = Math.random();
    setItens([
      ...itens,
      {
        company: newICompany,
        id: newId,
        position: newPosition,
        duration: newDuration,
        jobID: newJobID,
        status: newStatus,
      },
    ]);
    setNewCompany("");
    closeModal(false);
  }

  return (
    <ContainerModal>
      <ModalContent>
        <Header>
          <span>NEW ROLE</span>
          <button onClick={handleCreateContract}>x</button>
        </Header>
        <form onSubmit={handleSubmit}>
          <h1>Company</h1>
          <input type="text" value={newICompany} onChange={handleNewCompany} />

          <input type="text" value={newPosition} onChange={handleNewPosition} />

          <input type="text" value={newDuration} onChange={handleNewDuration} />

          <input type="text" value={newJobID} onChange={handleNewJobID} />

          <input type="text" value={newStatus} onChange={handleNewStatus} />
          <button type="submit">submit</button>
        </form>
      </ModalContent>
    </ContainerModal>
  );
}
