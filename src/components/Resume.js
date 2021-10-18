import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  resume: {
    marginTop: "30px",
  },
}));

export default function Resume() {
  const classes = useStyles();
  return (
    <div className={classes.resume}>
      <embed
        src="https://drive.google.com/file/d/1iu2xA6N2Oj01SZq-4-puZCiNV7-lOezI/preview"
        width="900"
        height="2320"
      />
    </div>
  );
}
