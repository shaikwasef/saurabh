import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  resume: {
    width: "fit-content",
    margin: "30px auto",
    "@media (max-width:800px)": {
      margin: "-40px -25px",
    },
  },
}));

export default function Resume() {
  const classes = useStyles();
  return (
    <div className={classes.resume}>
      <embed
        style={{
          maxWidth: "100vw",
          height: "90vh",
          overflowY: "scroll",
        }}
        src="https://drive.google.com/file/d/1JhvvycrjlJGRGkYBfpKD2TOlQp68oSTb/preview"
        width="900"
        height="2320"
      />
    </div>
  );
}
