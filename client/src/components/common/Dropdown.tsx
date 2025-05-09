import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

interface DropdownProps {
  label: string;
  options: { id: number | null; name: string }[];
  selected: number | null | undefined;
  onSelect: (id: number | null) => void;
}

export function DropdownSelectUpdates({
  label,
  options,
  selected,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toogleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        onClick={toogleDropdown}
        className="bg-neutral rounded-md flex items-center justify-center gap-2 w-max h-full px-2 text-sm text-primary  cursor-pointer"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        {label}
        <FaCaretDown
          className={`${isOpen ? "rotate-x-180" : ""} transition-transform`}
          size={14}
        />
      </button>
      {isOpen && (
        <ul
          id="dropdown-menu"
          className="absolute bottom-12 left-0 shadow-lg rounded-md bg-base-300/90 dropdown-content menu p-2 w-52"
        >
          {options.map((option) => (
            <li key={option.id}>
              <label>
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={selected === option.id}
                  onChange={() => {
                    onSelect(option.id);
                    setIsOpen(false);
                  }}
                />
                {option.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
