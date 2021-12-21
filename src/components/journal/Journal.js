import React from "react";
import { EmptyContent } from "./EmptyContent";
import { Sidebar } from "./Sidebar";
import { NotesScreen } from '../notes/NotesScreen'
import { useSelector } from "react-redux";
export const Journal = () => {

  const { active } = useSelector( state => state.notes );
  return (
    <div className="journal__main-content">     
    <Sidebar />
    <main>
      { 
        active ?  
        (
          <NotesScreen />        
        ) 
        : 
        (          
          <EmptyContent />        
        ) 
      }
    </main>
    </div>
  );
};
