import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MuiSpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import { MODES, Pathers, Options } from '../types';
import OptionsDialog from './OptionsDialog';

const initialOptions: Options = {
  pather: 'dijkstra',
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

interface Props {
  mode: MODES;
  setMode: React.Dispatch<React.SetStateAction<MODES>>;
  runPather: (pather: Pathers) => void;
}

const SpeedDial = ({ mode, setMode, runPather }: Props) => {
  const classes = useStyles();
  const [speedDialOpen, setSpeedDialOpen] = React.useState(false);
  const [optionsOpen, setOptionsOpen] = React.useState(false);
  const [options, setOptions] = React.useState(initialOptions);

  const actions = [
    {
      icon: <PlayArrowRoundedIcon />,
      name: `Run ${options.pather}`,
      onClick: () => runPather(options.pather),
    },
    {
      icon: <TrackChangesRoundedIcon />,
      name: 'Place target node',
      onClick: () => setMode(MODES.TARGET_NODE_MODE),
    },
    {
      icon: <SettingsRoundedIcon />,
      name: 'Options',
      onClick: () => setOptionsOpen(true),
    },
  ];

  const handleOpen = () => {
    setSpeedDialOpen(true);
  };

  const handleClose = () => {
    setSpeedDialOpen(false);
  };

  return (
    <>
      <OptionsDialog
        open={optionsOpen}
        setOpen={setOptionsOpen}
        options={options}
        setOptions={setOptions}
      />
      <MuiSpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        icon={<SpeedDialIcon icon={<AddRoundedIcon />} openIcon={<CloseRoundedIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={speedDialOpen}
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
    </>
  );
};

export default SpeedDial;
