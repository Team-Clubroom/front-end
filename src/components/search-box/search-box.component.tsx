import React, { useRef } from "react";

interface SearchBoxProps {
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSearch?: (value: string) => void;
}

function SearchBoxComponent({
  placeholder,
  onSearch,
  onChange,
}: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={"relative max-w-lg min-w-[20rem]"}>
      <span
        className={`material-symbols-outlined absolute translate-y-1/2 bottom-1/2 pl-2 text-gray-300`}
      >
        device_hub
      </span>
      <input
        type={"text"}
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
        className={
          "outline-0 py-2 rounded-full border border-gray-300 placeholder-gray-300 focus:bg-gray-700 hover:bg-gray-400 bg-gray-400 text-white w-full transition-colors"
        }
        style={{ paddingInline: "36px" }}
      />
      <button
        onClick={() => onSearch && onSearch(inputRef.current?.value || "")}
        className={
          "absolute translate-y-1/2 bottom-1/2 right-0 pr-2 flex border-0 outline-0"
        }
      >
        <span className={`material-symbols-outlined text-gray-300`}>
          search
        </span>
      </button>
    </div>
  );
}

export default SearchBoxComponent;
