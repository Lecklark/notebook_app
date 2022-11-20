import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company, Worker } from '../../../types';
import { createNewRandom } from '../../../features/helpers';
import { AddCompanyPayload, AddWorkerPayload } from './types';
import { initialData } from '../../../constants';

export interface CompaniesState {
  selectedCompanies: Company[]
  allCompanies: Company[]
  selectedWorkers: Worker[]
}

const initialState: CompaniesState = {
  selectedCompanies: [],
  selectedWorkers: [],
  allCompanies: initialData,
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
      companiesSlice.caseReducers.updateSelectedCompanies(state);
    },
    selectAllCompanies: (state) => {
      state.selectedCompanies = state.allCompanies;
      companiesSlice.caseReducers.updateSelectedWorkers(state);
    },
    deselectAllCompanies: (state) => {
      state.selectedCompanies = [];
      companiesSlice.caseReducers.updateSelectedWorkers(state);
    },
    selectCompany: (state, action: PayloadAction<Company>) => {
      state.selectedCompanies = [...state.selectedCompanies, action.payload];
      companiesSlice.caseReducers.updateSelectedWorkers(state);
    },
    deselectCompany: (state, action: PayloadAction<Company>) => {
      const companyId = action.payload.id;
      state.selectedCompanies = state.selectedCompanies.filter((item) => item.id !== companyId);
      companiesSlice.caseReducers.updateSelectedWorkers(state);
    },
    deleteSelectedCompanies: (state) => {
      const all = state.allCompanies;
      const selected = state.selectedCompanies;
      state.allCompanies = all.filter((el) => !selected.find((item) => item.id === el.id));
      state.selectedCompanies = [];
      companiesSlice.caseReducers.updateSelectedWorkers(state);
    },
    selectWorker: (state, action: PayloadAction<Worker>) => {
      state.selectedWorkers = [...state.selectedWorkers, action.payload];
    },
    deselectWorker: (state, action: PayloadAction<Worker>) => {
      const workerId = action.payload.id;
      state.selectedWorkers = state.selectedWorkers.filter((item) => item.id !== workerId);
    },
    updateWorker: (state, action: PayloadAction<Worker>) => {
      const updatedWorker = action.payload;
      const idOfCompany = updatedWorker.companyId;
      const indexOfWorkerCompany = state.allCompanies.findIndex((item) => item.id === idOfCompany);
      const company = state.allCompanies[indexOfWorkerCompany];
      const staffOfCompany = company?.staff?.map((item) => {
        if (item.id === updatedWorker.id) {
          return updatedWorker;
        }
        return item;
      });
      state.allCompanies[indexOfWorkerCompany].staff = staffOfCompany;
      companiesSlice.caseReducers.updateSelectedCompanies(state);
    },
    addWorker: (state, action: PayloadAction<AddWorkerPayload>) => {
      const workerData = action.payload.worker;
      const { companyId } = action.payload;
      const newWorker = { ...workerData, id: createNewRandom() };
      const indexOfCompany = state.allCompanies.findIndex((item) => item.id === companyId);
      const companyStaff = state.allCompanies[indexOfCompany]?.staff ?? [];
      companyStaff.push(newWorker);
      state.allCompanies[indexOfCompany].staff = companyStaff;
      companiesSlice.caseReducers.updateSelectedCompanies(state);
    },
    updateSelectedCompanies: (state) => {
      state.selectedCompanies = state.selectedCompanies.map((sCompany) => {
        const aCompany = state.allCompanies.find((item) => item.id === sCompany.id);
        if (aCompany) return aCompany;
        return sCompany;
      });
      companiesSlice.caseReducers.updateSelectedWorkers(state);
    },
    updateSelectedWorkers: (state) => {
      state.selectedWorkers = state.selectedWorkers.filter((worker) => {
        const { companyId } = worker;
        const findedSCompany = state.selectedCompanies.find((company) => company.id === companyId);
        return !!findedSCompany;
      });
    },
    selectAllWorkers: (state) => {
      let workers: Worker[] = [];
      state.selectedCompanies.forEach((company) => {
        workers = [...workers, ...company.staff];
      });
      state.selectedWorkers = workers;
    },
    deselectAllWorkers: (state) => {
      state.selectedWorkers = [];
    },
    deleteSelectedWorkers: (state) => {
      const sWorkers = state.selectedWorkers;
      state.allCompanies = state.allCompanies.map((company) => {
        const companyStaff = company.staff;
        const newStaff = companyStaff.filter((member) => !sWorkers.find((item) => {
          const eqId = item.id === member.id;
          const eqCompanies = item.companyId === member.companyId;
          return eqId && eqCompanies;
        }));
        return { ...company, staff: newStaff };
      });
      state.selectedWorkers = [];
      companiesSlice.caseReducers.updateSelectedCompanies(state);
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
  selectWorker,
  deselectWorker,
  updateWorker,
  addWorker,
  selectAllWorkers,
  deselectAllWorkers,
  deleteSelectedWorkers,
} = companiesSlice.actions;

export default companiesSlice.reducer;
