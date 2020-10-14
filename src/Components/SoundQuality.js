import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [state, setState] = React.useState("");
  // const [open, setOpen] = React.useState(false);

  const handleChange = name => event => {
    if(event.target.value >= 20) {
        props.parentFun({drop: false})
    } if (event.target.value < 20){
        props.parentFun({drop: true})
    }

    setState({
    ...state,
    [name]: event.target.value,
    });
};

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      {/* <Button className={classes.button} onClick={handleOpen}>
        Sound Quality
      </Button> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Quality</InputLabel>
        <Select
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          native
          value={state.state}
          onChange={handleChange("")}
        >
      <option value="" />
      <option value={10}>Low</option>
      <option value={20}>Med</option>
      <option value={30}>High</option>
        </Select>
      </FormControl>
    </div>
  );
}

// return (
//   <div className={classes.root}>
//       <FormControl className={classes.formControl}>
//       <InputLabel htmlFor="age-native-simple">Sound Quality</InputLabel>
//           <Select
//           native
//           value={state.state}
//           onChange={handleChange('age')}
//           inputProps={{
//           name: 'age',
//           id: 'age-native-simple',
//       }}
//           >
//               <option value="" />
//               <option value={10}>Low</option>
//               <option value={20}>Med</option>
//               <option value={30}>High</option>
//           </Select>
//       </FormControl>
//       </div>
//       )}