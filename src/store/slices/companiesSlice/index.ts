import { createSlice } from '@reduxjs/toolkit';

export interface CompaniesState {
  selectedCompanies: string[]
  allCompanies: string[]
}

const initialState: CompaniesState = {
  selectedCompanies: [],
  allCompanies: [],
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addNewCompany: (state, { payload }) => {
      state.selectedCompanies = payload;
    },
  },
});

export const { addNewCompany } = companiesSlice.actions;

export default companiesSlice.reducer;
