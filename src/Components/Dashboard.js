import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputSlider from "./Slider";
// import Switch from "./Switch";
import SoundQuality from "./SoundQuality";
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const classes = useStyles;

class Dashboard extends Component {
  state = {
    slider: false,
    // notifications: [], 
    switch: false, 
    drop: false
  };



  // componentDidUpdate() {
  //   if(this.state.slider >= 80) {
  //     this.setState({volumeNotification: "Listening to music at a high volume could cause long-term hearing loss."})
  //   };
  //   if(this.state.checkedC === false) {
  //     this.setState({offlineNotification: "Your application is offline. You won't be able to share or stream music to other devices."})
  //   };
  //   if(this.state.formControl.value === 10) {
  //     this.setState({qualityNotification: "Music quality is degraded. Increase quality if your connection allows it."})
  //   }
  // }

  handleState = (x)  => {
    const k = Object.keys(x)[0]
    const newState = {}
    newState[k] = x[k] 
    this.setState(newState)
}

  switch = () => {
    this.setState({switch: !this.state.switch})
    console.log(this.state.switch)
  }

  render() {
    return (
      <div>
        <h1 classname="title-container">Welcome User!</h1>
        <div id="card-container">
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Online Mode
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Is this application connected to the internet?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Switch onClick={this.switch} />
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Master Volume
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Overrides all other sound settings in this application
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <InputSlider parentFun={this.handleState} />
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sound Quality
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manually control the music quality in event of poor
                    connection
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <SoundQuality parentFun={this.handleState} />
              </CardActions>
            </Card>
            <div classname= "notifications">
              <h1>System Notifications</h1>
              {this.state.slider ? (<p>"Listening to music at a high volume could cause long-term hearing loss."</p>) : <p></p>}
              {this.state.switch ? (<p>"Your application is offline. You won't be able to share or stream music to other devices."</p>) : <p></p>}
              {this.state.drop ? (<p>"Music quality is degraded. Increase quality if your connection allows it."</p>) : <p></p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
