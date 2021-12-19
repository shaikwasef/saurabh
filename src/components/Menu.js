import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "./Menu.css";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import sidebar from "../assets/sidebar.jpeg";
import { useEffect, useState } from "react";

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
  const { option } = props;

  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();
  const classes = useStyles();
  const options = [
    {
      name: "Home",
      page: "/",
    },
    {
      name: "Publications",
      page: "/publications",
    },
    {
      name: "CV",
      page: "/resume",
    },
    {
      name: "Portfolio",
      page: "/portfolio",
    },
  ];

  const onOptionSelection = (itempage, itemName) => {
    navigate(itempage);
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  if (width >= 800) {
    return (
      <div className="menu-container">
        <div className={classes.options}>
          {options.map((item, index) => {
            return (
              <div
                className="menu-options"
                onClick={() => onOptionSelection(item.page, item.name)}
                key={index}
              >
                <Typography
                  variant="h6"
                  className={clsx(classes.menuOption, {
                    [classes.selectedOption]: item.name === option,
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
        {options.map((item, index) => {
          return (
            <div
              className="menu-options"
              onClick={() => onOptionSelection(item.page, item.name)}
              key={index}
            >
              <Typography
                variant="h6"
                className={clsx(classes.menuOption, {
                  [classes.selectedOption]: item.name === option,
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
