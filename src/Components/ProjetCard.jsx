import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ProjetCard({ title, image, description, url, appUrl }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader title={title} />
        <Link href={appUrl} target="_blank">
          <CardMedia className={classes.media} image={image} title={title} />
        </Link>
        <CardContent>
          <Typography variant="h5" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link href={url} target="_blank">
            <IconButton aria-label="add to favorites">
              <GitHubIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default ProjetCard;
