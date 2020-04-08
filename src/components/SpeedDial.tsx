import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MuiSpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import TrackChangesRoundedIcon from "@material-ui/icons/TrackChangesRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: "absolute",
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  })
);

const actions = [
  { icon: <TrackChangesRoundedIcon />, name: "Place target node" },
];

const SpeedDial = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
      icon={
        <SpeedDialIcon
          icon={<AddRoundedIcon />}
          openIcon={<CloseRoundedIcon />}
        />
      }
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </MuiSpeedDial>
  );
};

export default SpeedDial;
