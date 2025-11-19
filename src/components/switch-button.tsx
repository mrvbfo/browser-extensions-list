type SwitchButtonProps = {
    checked: boolean
    onChange: (checked: boolean) => void
}

const SwitchButton = ({checked, onChange}: SwitchButtonProps) => {
  return (
    <label className="relative inline-block w-9 h-5 cursor-pointer">
      <input
        type="checkbox"
        aria-label="Toggle extension"
        className="opacity-0 w-0 h-0 peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-600 rounded-full transition duration-300 peer-checked:bg-red-700 dark:peer-checked:bg-red-400"></span>
      <span className="absolute left-[3px] bottom-[2px] h-4 w-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-[14px]"></span>
    </label>
  );
};

export default SwitchButton;
