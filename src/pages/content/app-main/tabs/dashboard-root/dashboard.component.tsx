import { useAuthContext } from "../../../../../contexts/auth/auth.context.tsx";
import AddEmployerForm from "../../../../../components/add-forms/add-employer-form.component.tsx";
import { useState } from "react";
import { Modal } from "../../../../../components/modal/modal.component.tsx";

function Dashboard() {
  const user = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTest, setModalTest] = useState(true);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <h1>Private Dashboard</h1>
        <p>Welcome {user.email}</p>
      </div>
      <button
        type={"button"}
        onClick={handleModalOpen}
        className={"bg-blue-400 rounded-lg w-fit m-4 p-[0.65rem]"}
      >
        Add Employer
      </button>
      <AddEmployerForm isModalOpen={isModalOpen} />
      <Modal close={() => setModalTest(false)} isOpen={modalTest}>
        daijdsfjlkadfjl
      </Modal>
    </>
  );
}

export default Dashboard;
