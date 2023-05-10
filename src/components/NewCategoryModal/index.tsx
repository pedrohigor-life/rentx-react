import Modal from "react-modal";
import { useState } from "react";

interface ModalCreateCateogryProps {
  stateModalCreateCategory: boolean;
}

export function NewCategoryModal(props: ModalCreateCateogryProps) {
  const [createCategoryModal, setCreaetCategoryModal] = useState(false);

  const setStateModal = {
    open: () => {
      setCreaetCategoryModal(true);
    },

    close: () => {
      setCreaetCategoryModal(false);
    },
  };

  return (
    <>
      <Modal
        isOpen={createCategoryModal}
        onRequestClose={setStateModal.close}
      ></Modal>
    </>
  );
}
