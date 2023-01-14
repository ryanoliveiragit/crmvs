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
          <section>
            <span>Company</span>
            <input
              required
              placeholder="Apple"
              type="text"
              value={newICompany}
              onChange={handleNewCompany}
            />
          </section>

          <section>
            <span>Position</span>
            <select
              required
              value={newPosition}
              onChange={handleNewPosition}
              name="pets"
              id="pet-select"
            >
              <option value="">Select position</option>
              <option value="Visual Designer">Visual Designer</option>
              <option value="Product Designer">Product Designer</option>
              <option value="Interactive Designer">Interactive Designer</option>
              <option value="UX / UI Designer">UX / UI Designer</option>
            </select>
          </section>

          <section>
            <span>Duration</span>
            <select
              required
              value={newDuration}
              onChange={handleNewDuration}
              name="pets"
              id="pet-select"
            >
              <option value="">Select duration</option>
              <option value="Full time">Full time</option>
              <option value="12-months">12-months</option>
              <option value="6-months">6-months</option>
            </select>
          </section>

          <section>
            <span>JobID</span>
            <input
              required
              type="text"
              value={newJobID}
              onChange={handleNewJobID}
            />
          </section>

          <section>
            <span>Status</span>
            <select
              required
              value={newStatus}
              onChange={handleNewStatus}
              name="pets"
              id="pet-select"
            >
              <option value="">Select status</option>
              <option value="Online">Online</option>
              <option value="Offile">Offline</option>
              <option value="Progress">In Progress</option>
            </select>
          </section>
          <section>
            <button type="submit">submit</button>
          </section>
        </form>
      </ModalContent>
    </ContainerModal>
  );
}
