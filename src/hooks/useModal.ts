import { useState } from "react";

export const useModal = <T>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);

  const open = (modalData?: T) => {
    modalData && setData(modalData);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
    setData(undefined);
  };

  return [isOpen, open, close, data] as const;
};
