import { useState } from "react";
import { Employer } from "../../models/employer.types.ts";
import { useAuthContext } from "../../contexts/auth/auth.context.tsx";
import SearchBoxComponent from "../../components/search-box/search-box.component.tsx";
import { EmployerCard } from "../../components/employer-card/employer-card.component.tsx";
import NameChangeModal from "../../components/modal/name-change/name-change-form.component.tsx";
import { SplitEmployerModal } from "../../components/modal/split-employer/split-employer.component.tsx";
import { ModalNames, useMultiModal } from "../../hooks/useMultiModal.ts";
import { MergeEmployersModal } from "../../components/modal/merge-employers/merge-employers.component.tsx";
import EmployerModal from "../../components/modal/employer-modal/employer-modal.component.tsx";
import { Icon } from "../../components/icon.component.tsx";
import { MaterialIcon } from "../../utils/icons.ts";
import "./employers.styles.css";
import { useEmployers } from "../../hooks/useEmployers.ts";
import { useEmployerActions } from "../../components/modal/employer-modal/useEmployerActions.ts";
import { YesNoModal } from "../../components/modal/yes-no/yes-no.component.tsx";

function Employers() {
  const [isModalOpen, openModal, closeModal, modalData] = useMultiModal<{
    employer: Employer;
  }>();

  const openModalByName = (modalName: ModalNames, employerId: number) => {
    openModal(modalName, {
      employer: employers.find(({ id }) => id === employerId)!,
    });
  };

  const { deleteEmployer } = useEmployerActions();

  const [search, setSearch] = useState("");
  const { employers } = useEmployers();
  const user = useAuthContext();

  function compareSearch(employer: Employer) {
    const matchesSearch =
      search.trim() === "" ||
      employer.name.toLowerCase().includes(search.toLowerCase());

    if (matchesSearch) {
      return (
        <EmployerCard
          employer={employer}
          key={employer.id}
          openModalByName={openModalByName}
        />
      );
    }

    return undefined;
  }

  const employerNodes = employers.map(compareSearch);

  const employerOptions = employers.map((employer) => ({
    text: employer.name,
    value: employer.id.toString(),
  }));

  return (
    <div className={"flex flex-col"} style={{ height: "calc(100% - 65px)" }}>
      <div className={"bg-gray-700 px-3 py-2 flex justify-center relative"}>
        <SearchBoxComponent
          placeholder={"Search employers"}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {user.isAdmin && (
          <button
            onClick={() => openModal(ModalNames.AddEmployer)}
            className={"add-employer-btn"}
          >
            <Icon name={MaterialIcon.Add} />
            New Employer
          </button>
        )}
      </div>
      {employerNodes.some((node) => node !== undefined) ? (
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            paddingInline: "calc(10vw * 0.5rem)",
          }}
          className="grid gap-3 p-3 overflow-x-hidden overflow-y-scroll"
        >
          {employerNodes}
        </div>
      ) : (
        <div className={"text-center pt-72 text-gray-500"}>
          No employers match the search
        </div>
      )}
      <EmployerModal
        isOpen={isModalOpen(ModalNames.AddEmployer)}
        close={closeModal}
      />
      {modalData?.employer && (
        <>
          <EmployerModal
            isOpen={isModalOpen(ModalNames.EditEmployer)}
            close={closeModal}
            prePopulate={modalData.employer}
          />
          <NameChangeModal
            isOpen={isModalOpen(ModalNames.NameChange)}
            close={closeModal}
            employer={modalData.employer}
          />
          <SplitEmployerModal
            isOpen={isModalOpen(ModalNames.Split)}
            close={closeModal}
            employer={modalData.employer}
            employersOptions={employerOptions}
          />
          <MergeEmployersModal
            isOpen={isModalOpen(ModalNames.Merge)}
            close={closeModal}
            employer={modalData.employer}
            employersOptions={employerOptions}
          />
          <YesNoModal
            bodyText={`Are you sure you want to remove ${modalData.employer.name}?`}
            isOpen={isModalOpen(ModalNames.YesNo)}
            close={() => closeModal()}
            onConfirm={async () => {
              await deleteEmployer(modalData.employer);
              //closeModal();
            }}
            successText={"Removed"}
          />
        </>
      )}
    </div>
  );
}

export default Employers;
