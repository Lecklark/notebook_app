import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { OpenModalButton } from '@components/shared/open-modal-button';
import { FC } from 'react';

import { MODALS } from '@/types';

import { ControlsCellProps } from './types';

export const ControlsCell: FC<ControlsCellProps> = ({ contact }) => {
  return (
    <Box display='flex'>
      <OpenModalButton modal={MODALS.UPDATE_CONTACT_MODAL} modalProps={{ contact }}>
        <IconButton aria-label='deleteIcon' icon={<EditIcon />} variant='unstyled' />
      </OpenModalButton>
      <OpenModalButton modal={MODALS.DELETE_CONTACT_MODAL} modalProps={{ contact }}>
        <IconButton
          aria-label='deleteIcon'
          icon={<DeleteIcon color='red.500' />}
          variant='unstyled'
        />
      </OpenModalButton>
    </Box>
  );
};
