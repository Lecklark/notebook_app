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
import TableRow from '../../../../common/TableComponents/TableRow';
import TableCell from '../../../../common/TableComponents/TableCell';
import TableEditableCell from '../../../../common/TableComponents/TableEditableCell';

export interface CompanyTableRowProps {
  company?: Company
}

function StaffTableRow({ company }:CompanyTableRowProps) {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const isSelected = !!selectedCompanies.find((selected) => selected.id === company?.id);
  const dispatch = useAppDispatch();
  const isAddCompanyRow = !company;
  const initialState = {
    name: company?.name ? company.name : '',
    address: company?.address ? company.address : '',
  };

  const [state, setState] = useState(initialState);
  const [isEditMode, setEditMode] = useState<boolean>(isAddCompanyRow);

  function changeCompanyField(fieldName: string) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({ ...prev, [fieldName]: e.target.value }));
    };
  }

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
        name: state.name,
        address: state.address,
      };
      dispatch(addNewCompany(newCompany));
      setState(initialState);
      return;
    }
    if (isEditMode) {
      const updatedCompany = {
        ...company,
        name: state.name,
        address: state.address,
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
      <TableEditableCell isEditMode={isEditMode} value={state.name} onChange={changeCompanyField('name')} />
      <TableCell>
        {company?.staff?.length ?? '0'}
      </TableCell>
      <TableEditableCell isEditMode={isEditMode} value={state.address} onChange={changeCompanyField('address')} />
      <TableCell onClick={buttonsCellClick}>
        {isEditMode ? 'Сохранить' : 'Редактировать'}
      </TableCell>
    </TableRow>
  );
}

export default StaffTableRow;
