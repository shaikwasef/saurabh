import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import profile from "../assets/profile.png";

const useStyles = makeStyles(() => ({
  title: {
    margin: "30px 0 0 0 ",
  },
  divider: {
    margin: "20px 0 0 0",
    height: "4px",
  },
  matter: {
    display: "flex",
    flexDirection: "col",
    alignItems: "center",
    marginTop: "60px",
  },
  profile: {
    width: " 400px",
    height: "400px",
  },
  introduction: {
    textAlign: "justify",
    marginRight: "30px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className="home-container">
      <Typography variant="h4" className={classes.title}>
        Saurabh Purohit
      </Typography>
      <Divider className={classes.divider} />
      <Box className={classes.matter}>
        <Typography variant="h6" className={classes.introduction}>
          I am a mathematics graduate from IIT Kanpur. I have been an analyst at
          Goldman Sachs and a research fellow at Microsoft Research India for
          past 2 years. I have worked on recommendation systems, extreme
          classification and have published in this area. I spend significant
          time reading books. The Incerto series by Nassim Taleb is among my
          absolute favourites. I enjoy going out to do just any fun activity.
        </Typography>
        <img src={profile} className={classes.profile} alt="profile" />
      </Box>
    </div>
  );
}
