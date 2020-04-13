import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MuiSpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import { MODES } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  }),
);

interface Props {
  mode: MODES;
  setMode: React.Dispatch<React.SetStateAction<MODES>>;
  runDijkstra: any;
}

const SpeedDial = ({ mode, setMode, runDijkstra }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const actions = [
    {
      icon: <TrackChangesRoundedIcon />,
      name: 'Place target node',
      onClick: () => setMode(MODES.TARGET_NODE_MODE),
    },
    {
      icon: <PlayArrowRoundedIcon />,
      name: 'run dijkstra',
      onClick: runDijkstra,
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiSpeedDial
      ariaLabel="SpeedDial openIcon example"
      className={classes.speedDial}
      icon={<SpeedDialIcon icon={<AddRoundedIcon />} openIcon={<CloseRoundedIcon />} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => {
            handleClose();
            action.onClick();
          }}
        />
      ))}
    </MuiSpeedDial>
  );
};

export default SpeedDial;
