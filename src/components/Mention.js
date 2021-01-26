import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import psl from "psl";
import {extractHostname} from "../utils";
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "60%",
    maxHeight: "200px",
    marginLeft: "20%",
    marginTop: '0.5%'
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%"
  },
  title: {
    overflowX: "hidden",
    textOverflow: "ellipsis",
    maxWidth: '750px',
    whiteSpace: 'nowrap',
    fontWeight: "bold"
  },
  description: {
    lineHeight: "1.5em",
    height: "3em",       /* height is 2x line-height, so two lines will display */
    overflow: "hidden"
  },
  host: {
    color: "grey",
    fontSize: "x-large"
  },
  date: {
    color: "grey",
    fontSize: "x-large"
  }
}));

const addImageDefaultSrc = (e) => {
  e.target.src = 'mention.webp';
};

const changeUrl = (url) => {
  console.debug("url", url)
  window.open(url, "_blank")
};

const Mention = ({mention}) => {
  const classes = useStyles();
  if(mention.description && !mention.description.match(/mention/i)) { return null; }
  const publishedDate = moment(mention.published_at).format("DD MMM");
  const host = psl.get(extractHostname(mention.original_url));
  const description = mention.description.replace(/mention/ig, '<span style="background-color: #FFFF00">$&</span>');
  const onClick = () => {
    changeUrl(mention.clickable_url);
  };
  return (
      <div className={classes.root} onClick={onClick}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            {mention.picture_url && (
                <Grid item>
                  <div className={classes.image}>
                    <img
                        className={classes.img}
                        alt="complex"
                        src={mention.picture_url}
                        onError={addImageDefaultSrc}
                    />
                  </div>
                </Grid>
            )}
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" className={classes.host}>
                    {host}
                  </Typography>
                  <Typography
                      variant="h4"
                      gutterBottom
                      className={classes.title}
                  >
                    {mention.title}
                  </Typography>
                  <Typography variant="h5" color="textSecondary" className={classes.description}>
                    {ReactHtmlParser(description)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" className={classes.date}>{publishedDate}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
  );
};

export default Mention;
