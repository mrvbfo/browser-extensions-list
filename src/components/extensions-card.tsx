import type { Extension } from "../lib/types";
import SwitchButton from "./switch-button";

type ExtensionsCardProps = {
  extensions: Extension[],
  onDeleteExtension: (id: Extension["id"]) => void
  onToggleExtension: (id: Extension["id"]) => void
};

export default function ExtensionCard({ extensions, onDeleteExtension, onToggleExtension }: ExtensionsCardProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
      {extensions.map((extension) => (
        <article className="border border-neutral-200 dark:border-neutral-600 rounded-[1.25rem] p-5 bg-neutral-0 dark:bg-neutral-800 h-[200px] flex flex-col justify-between">
          {/* card content */}
          <div className="flex items-start gap-4">
            <img
              src={extension.logo}
              alt={`${extension.name} logo`}
              width={60}
              height={60}
            />
            <div>
              <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-0 mb-2">
                {extension.name}
              </h2>
              <p>{extension.description}</p>
            </div>
          </div>
          {/* card footer */}
          <div className="flex items-center justify-between">
            <button onClick={() => onDeleteExtension(extension.id)} className="border border-neu  dark:border-neutral-600 rounded-full py-2 px-4 cursor-pointer hover:text-neutral-0 hover:bg-red-700 dark:hover:text-neutral-900 dark:hover:bg-red-400 hover:border-transparent duration-300">
              Remove
            </button>
            <SwitchButton checked={extension.isActive} onChange={() => onToggleExtension(extension.id)} />
          </div>
        </article>
      ))}
    </div>
  );
}
