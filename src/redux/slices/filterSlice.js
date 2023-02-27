import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярністю',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.page);
      state.categoryId = Number(action.payload.category);
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategory, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
