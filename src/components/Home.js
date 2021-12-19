import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import profile from "../assets/profile.png";
import Menu from "./Menu";
import "./Page.css";

const useStyles = makeStyles(() => ({
  title: {
    margin: "30px 0 0 0 ",
    width: "fit-content",
    "@media (max-width:800px)": {
      margin: "auto",
    },
  },
  divider: {
    margin: "20px 0 0 0",
    maxWidth: "100%",
    height: "4px",
  },
  matter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "60px",
    "@media (min-width:800px)": {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  profile: {
    width: " 400px",
    height: "400px",
    "@media (max-width:800px)": {
      width: " 200px",
      height: "300px",
    },
  },
  introduction: {
    textAlign: "justify",
    marginLeft: "30px",
    "@media (max-width:800px)": {
      marginLeft: "0px",
      marginTop: "30px",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="portfolio-container">
      <Menu option="Home" />
      <div className="page-container">
        <div className="home-container">
          <Typography variant="h4" className={classes.title}>
            Saurabh Purohit
          </Typography>
          <Divider className={classes.divider} />
          <Box className={classes.matter}>
            <img src={profile} className={classes.profile} alt="profile" />
            <Typography variant="h6" className={classes.introduction}>
              I am a mathematics graduate from IIT Kanpur. I have been an
              analyst at Goldman Sachs and a research fellow at Microsoft
              Research India for past 2 years. I have worked on recommendation
              systems, extreme classification and have published in this area. I
              spend significant time reading books. The Incerto series by Nassim
              Taleb is among my absolute favourites. I enjoy going out to do
              just any fun activity.
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}
