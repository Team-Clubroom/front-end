import { useState } from "react";

export const useMultiModal = <T>() => {
  const [openedModal, setOpenedModal] = useState<ModalNames | null>(null);
  const [data, setData] = useState<T | undefined>(undefined);

  const open = (modalName: ModalNames, modalData?: T) => {
    modalData && setData(modalData);
    setOpenedModal(modalName);
  };
  const close = () => {
    setOpenedModal(null);
    setData(undefined);
  };

  const isModalOpen = (modalName: ModalNames) => openedModal === modalName;

  return [isModalOpen, open, close, data] as const;
};

export enum ModalNames {
  Split = 0,
  Merge = 1,
  NameChange = 2,
  EditEmployer = 3,
  AddEmployer = 4,
  YesNo = 5,
}
