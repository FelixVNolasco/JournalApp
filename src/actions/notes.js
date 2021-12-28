import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { doc, updateDoc, deleteDoc } from "@firebase/firestore"
import Swal from 'sweetalert2'
import { fileUpload } from "../helpers/fileUpload";

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
            dispatch( addNewNote(document.id, newNote));
            // console.log(document);
        } catch (error) {
            console.log(error);
        }        
    }
}

export const addNewNote = (id, note) => {
    return {
        type: types.notesAddNew,
        payload: {
            id, 
            ...note
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

export const startUploading = ( file ) => {
    return async( dispatch, getState ) => {

        const { active:activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
        console.log(fileUrl)

        activeNote.url = fileUrl;        
        dispatch( startSaveNote( activeNote ) )
        
        Swal.close();
    }
}


export const startDeleteNote = ( id ) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const noteRef = doc(db, `${uid}/journal/notes/${id}`)

        await deleteDoc(noteRef);
 
        dispatch(deleteNote(id));
    }
}

export const deleteNote = (id) => {
    return {
        type: types.notesDelete,
        payload: id
    }    
}


export const noteLogout = () => {
    return {
        type: types.notesLogoutCleaning        
    }
}

export const noAction = () => {
    return {
        type: types.notesNoAction
    }
}