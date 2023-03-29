import { ChangeEvent } from 'react';
import styled from 'styled-components';

export type TableEditableCellProps = {
  isEditMode: boolean
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

