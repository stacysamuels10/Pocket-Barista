import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SavedCups from "./savedItems/SavedCups";
import blkandbold from "../assets/blkandbold.png";
import driftaway from "../assets/driftaway.jpeg";
import nostalgia from "../assets/nostalgia.png";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";

const Homepage = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const navigate = useNavigate();
  const cups = useSelector((state) => state.brewedCupReducer.pastBrews);

  return (
    <div>
      <div className="top-nav">
        <label htmlFor="add">Add New:</label>
        <button aria-describedby={id} type="button" onClick={handleClick}>
          Add
        </button>

        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                <select
                  name="add"
                  id=""
                  onChange={(e) => {
                    window.location.href = e.target.value;
                  }}
                >
                  <option>Add</option>
                  <option value="/addnewbrew"> New Brew</option>
                  <option value="/addnewcoffee">New Coffee</option>
                  <option value="/addnewbrewer">New Brewer</option>
                  <option value="/addnewgrinder">New Grinder</option>
                </select>
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
      <div className="welcome">
        <h1>Welcome to Pocket Barista</h1>
      </div>
      <div className="brewHistory">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Most Recent Brews</Typography>
          </AccordionSummary>
          {cups
            .filter((cup, index) => index < 5)
            .map((cup, index) => (
              <Card className="past-cup">
                <div className="left-side">
                  <p>{cup.brewedCup.setup.brewer}</p>
                  <p>{cup.brewedCup.setup.coffee}</p>
                </div>
                <div className="right-side">
                  <p>{cup.brewedCup.brew.waterAmount}</p>
                  <p>{cup.brewedCup.setup.dateOfBrew}</p>
                </div>
                <Rating
                  name="read-only"
                  value={cup.brewedCup.brew.rating}
                  readOnly
                />
                <p>{cup.brewedCup.brew.rating}</p>
                <Button
                  variant="outlined"
                  disableElevation
                  onClick={() => navigate(`/cups/${index}`)}
                >
                  More Info
                </Button>
              </Card>
            ))}
        </Accordion>
      </div>
      <div className="brewGuides">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Brew Guides</Typography>
          </AccordionSummary>
          <div className="brewguidescards">
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/aeropressguide")}
              >
                Aeropress
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/chemexguide")}
              >
                Chemex
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/coldbrewguide")}
              >
                Cold Brew
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/espressoguide")}
              >
                Espresso
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/staggguide")}
              >
                Fellow Stagg Pour Over
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/frenchpressguide")}
              >
                French Press
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/mokapotguide")}
              >
                Moka Pot
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/v60guide")}
              >
                V60 Pour Over
              </Button>
            </Card>
          </div>
        </Accordion>
      </div>
      <div className="coffeeOfTheMonth">
        <h2>Coffees of the Month</h2>
        <a href="https://blkandbold.com/">
          <img src={blkandbold} alt="Black and Bold coffee" />
        </a>
        <img src={driftaway} alt="Driftaway coffee" />
        <img src={nostalgia} alt="nostalgia coffee" />
      </div>
    </div>
  );
};

export default Homepage;
