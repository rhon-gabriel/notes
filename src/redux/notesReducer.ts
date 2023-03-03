import {Action} from './actions'

export interface NotesState {
  id: string;
  title: string;
  text: string;
}

const initialState: NotesState[] = [];

export const notesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SUBMIT_NOTE":
      return [
        ...state,
        {
          ...action.note,
        },
      ];
      case "DELETE_NOTE":
        return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
};
