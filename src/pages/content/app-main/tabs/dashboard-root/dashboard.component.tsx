import { useAuthContext } from "../../../../../contexts/auth/auth.context.tsx";
import { useModal } from "../../../../../hooks/useModal.ts";
import EmployerModal from "../../../../../components/modal/employer-modal/employer-modal.component.tsx";

function Dashboard() {
  const user = useAuthContext();
  const [isEmployerModalOpen, openEmployerModal, closeEmployerModal] =
    useModal();

  return (
    <>
      <div>
        <h1>Private Dashboard</h1>
        <p>Welcome {user.email}</p>
      </div>
      <button
        type={"button"}
        onClick={openEmployerModal}
        className={"bg-blue-400 rounded-lg w-fit m-4 p-[0.65rem]"}
      >
        Add Employer
      </button>
      <EmployerModal isOpen={isEmployerModalOpen} close={closeEmployerModal} />
    </>
  );
}

export default Dashboard;
