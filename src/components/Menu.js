import { Divider, makeStyles, Typography } from "@material-ui/core";
import Home from "./Home";
import Publications from "./Publications";
import Resume from "./Resume";
import "./Menu.css";
import Portfolio from "./Portfolio";

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
}));
export default function Menu(props) {
  const { onOptionSelect } = props;
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

  return (
    <div className="menu-container">
      <div className={classes.options}>
        {options.map((item) => {
          return (
            <div
              className="menu-options"
              onClick={() => onOptionSelect(item.element)}
            >
              <Typography variant="h6" className={classes.menuOption}>
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
