import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
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
    height: "3px",
    backgroundColor: "black",
  },
  introduction: {
    textAlign: "justify",
    marginRight: "30px",
  },
}));

export default function Publications() {
  const classes = useStyles();

  return (
    <div className="portfolio-container">
      <Menu option="Publications" />
      <div className="page-container">
        <div>
          <Typography variant="h4" className={classes.title}>
            Publications
          </Typography>
          <Divider className={classes.divider} />
          <Box className={classes.matter}>
            <div>
              <ul>
                <li>
                  <Typography variant="h6" className={classes.introduction}>
                    Generalized Zero-Shot Extreme Multi-label Learning
                    Proceedings of the 27th ACM SIGKDD Conference on Knowledge
                    Discovery & Data Mining. 2021. <br />
                    <p style={{ fontStyle: "italic" }}>
                      <span style={{ fontWeight: "bold" }}>Authors </span>
                      : Nilesh Gupta (Microsoft Research India); Sakina Bohra
                      (Microsoft); Yashoteja Prabhu (Microsoft Research);
                      Saurabh Purohit (Microsoft Research); Manik Varma
                      (Microsoft Research)
                    </p>
                  </Typography>
                </li>
              </ul>
            </div>
          </Box>
          <Typography variant="h4" className={classes.title}>
            Articles
          </Typography>
          <Divider className={classes.divider} />
          <Box className={classes.matter}>
            <div>
              <ul>
                <li>
                  <Typography variant="h6" className={classes.introduction}>
                    <a
                      href="https://sites.google.com/view/agi-and-oe/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      On Artificial Intelligence and Open-Endedness{" "}
                    </a>
                     : Investigating the role of Open-Endedness in creating AGI
                    from first principles thinking. <br />
                    <p style={{ fontStyle: "italic" }}>
                      <span style={{ fontWeight: "bold" }}>Author</span>:
                      Saurabh Purohit
                    </p>
                  </Typography>
                </li>
              </ul>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
