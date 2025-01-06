import PropTypes from 'prop-types';
import {
  Button,
  DialogActions,
  DialogContent,
  Dialog as MuiDialog,
} from '@mui/material';
import { useEffect, useState } from 'react';

const Dialog = ({ children, openDialog, playAgain }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(openDialog);
  }, [openDialog]);

  const handleClose = () => {
    setIsOpen(false);
    playAgain();
  };

  return (
    <MuiDialog open={isOpen}>
      <DialogContent>{children}</DialogContent>
      <DialogActions style={{ justifyContent: 'center', marginBottom: '20px' }}>
        <Button onClick={handleClose} variant={'outlined'}>
          Play again!
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

Dialog.propTypes = {
  children: PropTypes.any.isRequired,
  openDialog: PropTypes.bool.isRequired,
  playAgain: PropTypes.func.isRequired,
};

export default Dialog;
