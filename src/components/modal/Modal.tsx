import { useState } from "react";
import { ContainerModal, ModalContent, Header } from "./styles";

interface ModalProps {
  closeModal: (boolean: boolean) => void;
}

export function Modal({ closeModal }: ModalProps) {
    const [newAppStatistics, setNewAppStatistics] = useState()

    function handleCreateContract() {
    closeModal(false);
  }

  function handleNewStatistics(event: any){
    setNewAppStatistics(event.target.value)
    console.log(event.target.value)
  }


  return (
    <ContainerModal>
      <ModalContent>
        <Header>
          <span>NEW ROLE</span>
          <button onClick={handleCreateContract}>x</button>
        </Header>
        <form action="submit">
          <div>
            <h1>Company</h1>
            <input
                type="text"
                value={newAppStatistics}
                onChange={handleNewStatistics}    
            />
          </div>
        </form>
      </ModalContent>
    </ContainerModal>
  );
}
