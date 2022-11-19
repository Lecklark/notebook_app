import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company, ID } from '../../../types';
import { createNewRandom } from '../../../features/helpers';
import { AddCompanyPayload } from './types';

export interface CompaniesState {
  selectedCompanies: Company[]
  allCompanies: Company[]
}

const initialState: CompaniesState = {
  selectedCompanies: [],
  allCompanies: [
    {
      name: 'sda',
      address: 'ada',
      id: 1,
      staff: [{
        firstName: 'fas', lastName: 'as', id: 1, position: 'asd',
      }],
    },
    {
      name: 'sda',
      address: 'ada',
      id: 2,
      staff: [{
        firstName: 'fas', lastName: 'as', id: 1, position: 'asd',
      }],
    }],
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addNewCompany: (state, action: PayloadAction<AddCompanyPayload>) => {
      const newCompany = { ...action.payload, id: createNewRandom() };
      state.allCompanies = [...state.allCompanies, newCompany];
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      state.allCompanies = state.allCompanies.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    selectAllCompanies: (state) => {
      state.selectedCompanies = state.allCompanies;
    },
    deselectAllCompanies: (state) => {
      state.selectedCompanies = [];
    },
    selectCompany: (state, action: PayloadAction<Company>) => {
      state.selectedCompanies = [...state.selectedCompanies, action.payload];
    },
    deselectCompany: (state, action: PayloadAction<Company>) => {
      const companyId = action.payload.id;
      state.selectedCompanies = state.selectedCompanies.filter((item) => item.id !== companyId);
    },
    deleteSelectedCompanies: (state) => {
      const all = state.allCompanies;
      const selected = state.selectedCompanies;
      state.allCompanies = all.filter((el) => !selected.find((item) => item.id === el.id));
      state.selectedCompanies = [];
    },
  },
});

export const {
  addNewCompany,
  updateCompany,
  selectAllCompanies,
  deselectAllCompanies,
  selectCompany,
  deselectCompany,
  deleteSelectedCompanies,
} = companiesSlice.actions;

export default companiesSlice.reducer;
