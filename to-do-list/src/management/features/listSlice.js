import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [],
  doneList: [],
};

export const listSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    setDoneList: (state, action) => {
      state.doneList = [...state.doneList, action.payload];
    },
    undoDoneList: (state, action) => {
      state.doneList = state.doneList.filter(item => item !== action.payload);
    },
    editItem: (state, action) => {
      state.list.forEach((element, index) => {
        if (element === action.payload[0]) {
          state.list[index] = action.payload[1];
        }
      });
    },
    filterCompleted: (state, action) => {
      state.list = state.list.filter(
        item => state.doneList.indexOf(item) === -1,
      );
      state.doneList = action.payload;
    },
  },
});

export const {setList, setDoneList, undoDoneList, filterCompleted, editItem} =
  listSlice.actions;

export default listSlice.reducer;
