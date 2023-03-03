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
    default:
      return state;
  }
};
