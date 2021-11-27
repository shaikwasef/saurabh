import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Home from "./Home";
import Publications from "./Publications";
import Resume from "./Resume";
import "./Menu.css";
import Portfolio from "./Portfolio";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import sidebar from "../assets/sidebar.jpeg";

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
  appBar: {
    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "#262626",
    },
  },
  drawer: {
    "&.MuiDrawer-root": {
      "& .MuiPaper-root": {
        paddingTop: "100px",
        backgroundImage: `url(${sidebar})`,
        color: "white",
      },
    },
  },
}));

const drawerWidth = 240;

export default function Menu(props) {
  const { onOptionSelect } = props;
  const [selectedOption, setSelectedOption] = useState("Home");
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

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
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  if (width >= 800) {
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
  return (
    <>
      <AppBar className={classes.appBar} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        anchor="left"
        open={open}
        className={classes.drawer}
        onClose={() => setOpen(false)}
      >
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
      </Drawer>
    </>
  );
}
