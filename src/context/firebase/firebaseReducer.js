import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../types"

const handlers = {
    [SHOW_LOADER]: state => {
        console.log("I AM SHOW")
        return {...state, loading: true}}, 
    [ADD_NOTE]: (state, {payload}) => {
        console.log("I AM ADD")
        return {
        ...state,
        notes: [...state.notes, payload]
    }},
    [FETCH_NOTES]: (state, {payload}) => {
        console.log(" I AM FETCH")
        return {...state, notes: payload, loading: false}},
    [REMOVE_NOTE]: (state, {payload}) => {
        console.log("I AM REMOVE")
        return {
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }},
    DEFAULT: state => { 
        console.log("I AM DEFAULT")
        return state
    }
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}