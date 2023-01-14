import { useState } from "react";
import { ContainerModal, ModalContent, Header } from "./styles";

interface ModalProps {
  closeModal: (value: boolean) => void;
  newItens: string;
}

export function Modal({ closeModal }: ModalProps) {
  const [newApplication, setNewApplication] = useState({ name: '', id: 0 });
  function handleCreateContract() {
    closeModal(false);
  }
  function handleNewApplication(event: any) {
    const value = event.target.value;
    setNewApplication({ name: value, id: newApplication.id + 1 });
  }

  return (
    <ContainerModal>
      <ModalContent>
        <Header>
          <span>NEW ROLE</span>
          <button onClick={handleCreateContract}>x</button>
        </Header>
            <h1>Company</h1>
            <input
              type="text"
              value={newApplication.name}
              onChange={handleNewApplication}
            />
            <button>submit</button>
      </ModalContent>
    </ContainerModal>
  )
}
