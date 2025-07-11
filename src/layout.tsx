import LeftSidebar from "./components/sidebar/left";
import { Button } from "./components/ui/button";
import Workspace from "./components/workspace/workspace";
import { useDataStore } from "./stores/data.store";

const Layout = () => {
  const { activeId, createNote, notes } = useDataStore();

  const note = notes.find((m) => m.id == activeId);

  return (
    <div className="grid min-h-screen grid-cols-5">
      <div className="border-r p-4">
        <LeftSidebar />
      </div>
      <div className="col-span-3 p-6">
        {note ? (
          <Workspace note={note} />
        ) : (
          <div className="flex h-full w-full justify-center items-center">
            <Button onClick={createNote}>Create new note</Button>
          </div>
        )}
      </div>
      <div className="border-l"></div>
    </div>
  );
};

export default Layout;
