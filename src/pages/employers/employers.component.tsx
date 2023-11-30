import { useEffect, useState } from "react";
import { Employer } from "../../models/employer.types.ts";
import { useAuthContext } from "../../contexts/auth/auth.context.tsx";
import SearchBoxComponent from "../../components/search-box/search-box.component.tsx";
import { useFetch } from "../../models/useFetch.ts";
import { EmployerCard } from "../../components/employer-card/employer-card.component.tsx";
import { ApiRoutes } from "../../models/api.types.ts";
import NameChangeModal from "../../components/modal/name-change/name-change-form.component.tsx";
import { SplitEmployerModal } from "../../components/modal/split-employer/split-employer.component.tsx";
import { ModalNames, useMultiModal } from "../../hooks/useMultiModal.ts";
import { MergeEmployersModal } from "../../components/modal/merge-employers/merge-employers.component.tsx";
import EmployerModal from "../../components/modal/employer-modal/employer-modal.component.tsx";
import { Icon } from "../../components/icon.component.tsx";
import { MaterialIcon } from "../../utils/icons.ts";

function Employers() {
  const [isModalOpen, openModal, closeModal, modalData] = useMultiModal<{
    employer: Employer;
  }>();

  const openModalByName = (modalName: ModalNames, employerId: number) => {
    openModal(modalName, {
      employer: employers.find(({ id }) => id === employerId)!,
    });
  };

  const [search, setSearch] = useState("");
  const [employers, setEmployers] = useState<Employer[]>([]);
  const { customFetch } = useFetch();
  const user = useAuthContext();
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await customFetch<Employer[]>(
        ApiRoutes.Employers,
        "GET",
      );
      return response.data;
    };

    fetchEmployees()
      .then((employers) => {
        setEmployers(employers);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user]);

  function compareSearch(employer: Employer) {
    if (search.trim() !== "") {
      if (employer.name.toLowerCase().includes(search.toLowerCase())) {
        return (
          <EmployerCard
            employer={employer}
            key={employer.id}
            openModalByName={openModalByName}
          />
        );
      }
      // TODO: add other search filters when needed
    } else {
      return (
        <EmployerCard
          employer={employer}
          key={employer.id}
          openModalByName={openModalByName}
        />
      );
    }
  }

  const employerNodes = employers.map(compareSearch);

  return (
    <div className={"flex flex-col"} style={{ height: "calc(100% - 65px)" }}>
      <div className={"bg-gray-400 px-3 py-2 flex justify-center relative"}>
        <SearchBoxComponent
          placeholder={"Search employers"}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button
          className={
            "transition-colors absolute right-2 bg-green-700 hover:bg-green-600 active:bg-green-500 text-white rounded border-0 outline-0 shadow flex items-center py-2 px-3 gap-1"
          }
        >
          <Icon name={MaterialIcon.Add} />
          New Employer
        </button>
      </div>
      {employerNodes.some((node) => node !== undefined) ? (
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
            companyName={modalData.employer.name}
          />
          <SplitEmployerModal
            companyName={modalData.employer.name}
            isOpen={isModalOpen(ModalNames.Split)}
            close={closeModal}
          />
          <MergeEmployersModal
            companyName={modalData.employer.name}
            isOpen={isModalOpen(ModalNames.Merge)}
            close={closeModal}
          />
        </>
      )}
    </div>
  );
}

export default Employers;