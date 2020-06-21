import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Options } from '../types';
import PatherOptions from './OptionsDialog/PatherOptions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

enum Menus {
  pather,
}

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
}

const OptionsDialog = ({ open, setOpen, options, setOptions }: Props) => {
  const classes = useStyles();
  const [speculativeOptions, setSpeculativeOptions] = useState<Options>(options);
  const [currentMenu, setCurrentMenu] = useState<Menus>();

  const handleClose = (saveChanges = false) => {
    if (!saveChanges) {
      setSpeculativeOptions(options);
    }
    setCurrentMenu(undefined);
    setOpen(false);
  };

  const handleSave = () => {
    setOptions(speculativeOptions);
    console.log(speculativeOptions);
    handleClose(true);
  };

  return (
    <Dialog fullScreen open={open} onClose={() => handleClose()} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {currentMenu === undefined ? (
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => handleClose()}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setCurrentMenu(undefined)}
              aria-label="back"
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            Options
          </Typography>
          <Button autoFocus color="inherit" onClick={handleSave}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      {currentMenu === undefined && (
        <List>
          <ListItem button onClick={() => setCurrentMenu(Menus.pather)}>
            <ListItemText primary="Pather" secondary={speculativeOptions.pather} />
          </ListItem>
          <Divider />
        </List>
      )}
      <Box py={2} px={3}>
        {currentMenu === Menus.pather && (
          <PatherOptions options={speculativeOptions} setOptions={setSpeculativeOptions} />
        )}
      </Box>
    </Dialog>
  );
};

export default OptionsDialog;
