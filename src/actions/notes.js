import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { doc, updateDoc } from "@firebase/firestore"
import Swal from 'sweetalert2'

export const createNewNote = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const {uid} = state.auth;    

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            const document = await addDoc(collection(db, `${uid}`, 'journal/notes'), newNote);
            dispatch(activeNote(document.id, newNote));
            // console.log('Documment written with ID:', document);
        } catch (error) {
            console.log(error);
        }        
    }
}

export const activeNote = (id, note) => {
    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
};

export const setLoadingState = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
};


export const startSaveNote = ( note ) => {
    return async(dispatch, getState) => {
 
        const { uid } = getState().auth
 
        if ( !note.url ) {
            delete note.url
        }
 
        const noteToFirestore = { ...note };
        delete noteToFirestore.id
 
        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
        await updateDoc(noteRef,noteToFirestore);
        
        dispatch( refreshNote(note.id, noteToFirestore) );
        Swal.fire('Saved', note.title, "success");
    }
};

export const refreshNote = (id, note) => {
    return {
        type: types.notesUpdate,
        payload: {
            id, 
            note: {
                id,
                ...note
            }
        }
    }
}