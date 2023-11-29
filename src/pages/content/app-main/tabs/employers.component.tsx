import { useEffect, useState } from "react";
import { Employer } from "../../../../models/employer.types.ts";
import { useAuthContext } from "../../../../contexts/auth/auth.context.tsx";
import SearchBoxComponent from "../../../../components/search-box/search-box.component.tsx";
import { useFetch } from "../../../../models/useFetch.ts";
import { EmployerCard } from "../../../../components/employer-card/employer-card.component.tsx";
import { ApiRoutes } from "../../../../models/api.types.ts";
import NameChangeModal from "../../../../components/modal/name-change/name-change-form.component.tsx";
import { SplitEmployerModal } from "../../../../components/modal/split-employer/split-employer.component.tsx";
import { ModalNames, useMultiModal } from "../../../../hooks/useMultiModal.ts";
import { MergeEmployersModal } from "../../../../components/modal/merge-employers/merge-employers.component.tsx";
import { YesNoModal } from "../../../../components/modal/yes-no/yes-no.component.tsx";

function Employers() {
  const [isModalOpen, openModal, closeModal, modalData] = useMultiModal<{
    companyName: string;
  }>();

  const openModalByName = (modalName: ModalNames, companyName: string) => {
    openModal(modalName, { companyName });
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
    <div className="w-full h-full overflow-x-hidden overflow-y-scroll p-3">
      <div className={"w-[320px] m-auto pb-3"}>
        <SearchBoxComponent
          placeholder={"Search employers"}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      {employerNodes.some((node) => node !== undefined) ? (
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
          className="grid gap-3"
        >
          {employerNodes}
        </div>
      ) : (
        <div className={"text-center pt-72 text-gray-500"}>
          No employers match the search
        </div>
      )}
      <NameChangeModal
        isOpen={isModalOpen(ModalNames.NameChange)}
        close={closeModal}
        companyName={modalData?.companyName || ""}
      />
      <SplitEmployerModal
        companyName={modalData?.companyName || ""}
        isOpen={isModalOpen(ModalNames.Split)}
        close={closeModal}
      />
      <MergeEmployersModal
        companyName={modalData?.companyName || ""}
        isOpen={isModalOpen(ModalNames.Merge)}
        close={closeModal}
      />
      <YesNoModal
        bodyText={"Are you sure you want to delete *" + (modalData?.companyName || "") + "*?"}
        isOpen={isModalOpen(ModalNames.Delete)}
        close={closeModal}
        onConfirm={() => console.log("delete")}
      />
    </div>
  );
}

export default Employers;
