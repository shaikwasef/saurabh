import { Divider, makeStyles, Typography } from "@material-ui/core";
import Home from "./Home";
import Publications from "./Publications";
import Resume from "./Resume";
import "./Menu.css";
import Portfolio from "./Portfolio";
import { useState } from "react";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  divider: {
    "&.MuiDivider-root": {
      backgroundColor: "white",
      margin: "0 10px",
    },
  },
  menuOption: {
    margin: "0 10px",
    padding: "15px 0",
  },
  options: {
    paddingTop: "200px",
  },
  selectedOption: {
    color: "purple",
  },
}));
export default function Menu(props) {
  const { onOptionSelect } = props;
  const [selectedOption, setSelectedOption] = useState("Home");
  const classes = useStyles();
  const options = [
    {
      name: "Home",
      element: <Home />,
    },
    {
      name: "Publications",
      element: <Publications />,
    },
    {
      name: "CV",
      element: <Resume />,
    },
    {
      name: "Portfolio",
      element: <Portfolio />,
    },
  ];

  const onOptionSelection = (itemElement, itemName) => {
    setSelectedOption(itemName);
    onOptionSelect(itemElement);
  };

  return (
    <div className="menu-container">
      <div className={classes.options}>
        {options.map((item) => {
          return (
            <div
              className="menu-options"
              onClick={() => onOptionSelection(item.element, item.name)}
            >
              <Typography
                variant="h6"
                className={clsx(classes.menuOption, {
                  [classes.selectedOption]: item.name === selectedOption,
                })}
              >
                {item.name}
              </Typography>
              <Divider className={classes.divider} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
