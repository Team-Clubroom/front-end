import { useAuthContext } from "../../../../../contexts/auth/auth.context.tsx";
import { useModal } from "../../../../../hooks/useModal.ts";
import AddEmployerForm from "../../../../../components/modal/add-employer/add-employer-form.component.tsx";

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
      <AddEmployerForm
        isOpen={isEmployerModalOpen}
        close={closeEmployerModal}
      />
    </>
  );
}

export default Dashboard;
