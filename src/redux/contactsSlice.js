import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContactsState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    removeContact: {
      reducer(state, action) {
        return {
          items: state.items.filter(({ id }) => id !== action.payload),
        };
      },
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
