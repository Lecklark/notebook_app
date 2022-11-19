import React, { useState, ChangeEvent } from 'react';
import { Company } from '../../../../../types';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { selectedCompaniesInState } from '../../../../../store/selectors';
import {
  addNewCompany,
  deselectCompany,
  selectCompany,
  updateCompany,
} from '../../../../../store/slices/companiesSlice';
import TableCell from '../../../../common/TableComponents/TableCell';
import TableRow from '../../../../common/TableComponents/TableRow';
import TableEditableCell from '../../../../common/TableComponents/TableEditableCell';
import useForm from '../../../../../features/hooks/useForm';
import { IForm } from '../../StaffTable/StaffTableRow';

export interface CompanyTableRowProps {
  company?: Company
}

export interface ICompanyForm {
  name: string
  address: string
}

function CompanyTableRow({ company }:CompanyTableRowProps) {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const isSelected = !!selectedCompanies.find((selected) => selected.id === company?.id);
  const dispatch = useAppDispatch();
  const isAddCompanyRow = !company;

  const { values: state, changeFieldValue, resetForm } = useForm<ICompanyForm>({
    name: company?.name ? company.name : '',
    address: company?.address ? company.address : '',
  });

  const [isEditMode, setEditMode] = useState<boolean>(isAddCompanyRow);

  function checkboxClickHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked;
    if (isAddCompanyRow) return;
    if (value) {
      dispatch(selectCompany(company));
    } else {
      dispatch(deselectCompany(company));
    }
  }

  function buttonsCellClick() {
    if (isAddCompanyRow) {
      const newCompany = {
        ...state,
        staff: [],
      };
      dispatch(addNewCompany(newCompany));
      resetForm();
      return;
    }
    if (isEditMode) {
      const updatedCompany = {
        ...company,
        ...state,
      };
      dispatch(updateCompany(updatedCompany));
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }

  return (
    <TableRow selected={isSelected}>
      <TableCell>
        {!isAddCompanyRow && (
          <input type="checkbox" checked={isSelected} onChange={checkboxClickHandler} />
        )}
      </TableCell>
      <TableEditableCell isEditMode={isEditMode} value={state.name} onChange={changeFieldValue('name')} />
      <TableCell>
        {company?.staff?.length ?? 0}
      </TableCell>
      <TableEditableCell isEditMode={isEditMode} value={state.address} onChange={changeFieldValue('address')} />
      <TableCell onClick={buttonsCellClick}>
        {isEditMode ? 'Сохранить' : 'Редактировать'}
      </TableCell>
    </TableRow>
  );
}

export default CompanyTableRow;
