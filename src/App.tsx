import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Title } from "./components/Title";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [isCreateCategoryModal, setIsCreateCategoryModal] = useState(false);

  function openModal() {
    setIsCreateCategoryModal(true);
  }

  function closeModal() {
    setIsCreateCategoryModal(false);
  }

  return (
    <>
      <Title open={openModal} />
      <Modal isOpen={isCreateCategoryModal} onRequestClose={closeModal}>
        <h1>Nova categoria</h1>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </Modal>
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
