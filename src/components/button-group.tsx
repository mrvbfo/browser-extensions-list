import type { ButtonFilters } from "../lib/types";

const buttons: { label: string; value: ButtonFilters }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

type ButtonGroupProps = {
  onFilterChange: (filter: ButtonFilters) => void;
  activeFilter: ButtonFilters;
};

export default function ButtonGroup({
  onFilterChange,
  activeFilter,
}: ButtonGroupProps) {
  return (
    <div className="space-x-3">
      {buttons.map((button) => (
        <button
          onClick={() => onFilterChange(button.value)}
          key={button.value}
          className={
            activeFilter === button.value
              ? "text-preset-3 bg-red-700 text-neutral-0 dark:text-neutral-900 dark:bg-red-400 border border-transparent rounded-full pt-2 pb-2.5 px-5 cursor-pointer"
              : "text-preset-3 text-neutral-900 dark:text-neutral-0 border border-neutral-200 dark:border-neutral-600 rounded-full bg-neutral-0 dark:bg-neutral-700 pt-2 pb-2.5 px-5 cursor-pointer"
          }
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
