import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";

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

