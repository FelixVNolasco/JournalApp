import React from "react";
import { EmptyContent } from "./EmptyContent";
import { Sidebar } from "./Sidebar";
import { NotesScreen } from '../notes/NotesScreen'
export const Journal = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        <EmptyContent />
        {/* <NotesScreen /> */}
      </main>
    </div>
  );
};
