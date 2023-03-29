import React, { useState, ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { selectedCompaniesInState } from '@store/selectors';
import { useForm } from '@lib/hooks';
import {
  addNewCompany,
  deselectCompany,
  selectCompany,
  updateCompany,
} from '@store/slices/companies-slice';
import {
  ButtonsCell,
  TableCell,
  TableEditableCell,
  TableRow,
} from '@components/shared/table-components';
import { CompanyTableRowProps } from './types';

export type CompanyFormValues = {
  name: string
  address: string
}

export const CompanyTableRow:FC<CompanyTableRowProps> = ({ company }:CompanyTableRowProps) => {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const isSelected = !!selectedCompanies.find((selected) => selected.id === company?.id);
  const dispatch = useAppDispatch();
  const isAddCompanyRow = !company;

  const { values: state, changeFieldValue, resetForm } = useForm<CompanyFormValues>({
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
        {company?.staff?.length}
      </TableCell>
      <TableEditableCell isEditMode={isEditMode} value={state.address} onChange={changeFieldValue('address')} />
      <ButtonsCell isEditMode={isEditMode} onClick={buttonsCellClick} />
    </TableRow>
  );
};

export default CompanyTableRow;
