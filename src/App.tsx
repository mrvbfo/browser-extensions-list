import { useMemo, useState } from "react";
import { Header, Main } from "./app-layout";
import AppHeader from "./components/app-header";
import ButtonGroup from "./components/button-group";
import ExtensionCard from "./components/extensions-card";
import ExtensionsCards from "./components/extensions-cards";
import ExtensionsHeader from "./components/extensions-header";
import H1 from "./components/h-1";
import { data } from "./lib/data";
import type { ButtonFilters, Extension } from "./lib/types";

function App() {
  const [extensions, setExtensions] = useState<Extension[]>(data);
  const [activeFilter, setActiveFilter] = useState<ButtonFilters>("all");

  const filteredExtensions = useMemo(() => {
    switch (activeFilter) {
      case "active":
        return extensions.filter((extension) => extension.isActive);
      case "inactive":
        return extensions.filter((extension) => !extension.isActive);
      default:
        return extensions;
    }
  }, [extensions, activeFilter]);

  function handleFilterChange(filter: ButtonFilters) {
    setActiveFilter(filter);
  }

  function handleDeleteExtension(idToDelete: Extension["id"]) {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.id !== idToDelete)
    );
  }

  function handleToggleExtension(idToToggle: Extension["id"]) {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.id === idToToggle
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  }
  return (
    <>
      <Header>
        <AppHeader />
      </Header>
      <Main>
        <ExtensionsHeader>
          <H1 />
          <ButtonGroup
            onFilterChange={handleFilterChange}
            activeFilter={activeFilter}
          />
        </ExtensionsHeader>
        <ExtensionsCards>
          <ExtensionCard
            onDeleteExtension={handleDeleteExtension}
            onToggleExtension={handleToggleExtension}
            extensions={filteredExtensions}
          />
        </ExtensionsCards>
      </Main>
    </>
  );
}

export default App;
