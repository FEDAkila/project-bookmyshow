import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

import { BsShare } from "react-icons/bs";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Details.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

export const Details = () => {
  const [param] = useSearchParams();
  const a = param.get("id");
  console.log(a);
  const state = useSelector(({ sample }) => sample);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [back, setBack] = useState({});
  const [castimg, setCastimg] = useState([]);
  console.log(state.Cast);

  let show = () => {
    console.log(state.Movie);
    console.log(state.Backimg);
    console.log(a);
    let check = state.Movie.find((v, i) => {
      return Number(a) === v.id;
    });
    console.log(check);
    setData(check);
  };
  const dis = () => {
    console.log(a);
    let display = state.Backimg.find((v, i) => {
      return Number(a) === v.id;
    });
    console.log(display);
    setBack(display);
  };

  console.log(data);
  console.log(back);

  console.log(castimg);
  var cast = () => {
    let det = state.Cast.find((v, i) => {
      return Number(a) === v.id;
    });
    console.log(det);
    var loop = det.cast;
    console.log(loop);

    setCastimg(loop);
  };

  useEffect(() => {
    show();
    dis();
    cast();
  }, []);
  console.log(castimg);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const m = useNavigate();
  let gotoTheater = (data) => {
    m(`/Theater?id=${data}`);
    console.log("hi");
    console.log(data);
  };

  return (
    <Box>
      <Box
        id="details"
        style={{
          backgroundImage: `linear-gradient(90deg, rgb(26,26,26)24.97%,
               rgb(26,26,26)38.3%, rgba(26, 26, 26, 0.0409746) 97.47%,rgb(26,26,26) 100%), url(${back.img})`,
          backgroundColor: "black",
          padding: "40px 10px",
          width: "100%",

          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        <Container>
          <Box>
            <div className="row">
              <div className="col-1">
                <div className="img">
                  <img src={data.img} />
                </div>
              </div>
              <div className="col-2">
                <div className="content">
                  <h1>{data.title}</h1>
                </div>
                <div className="alg">
                  <AiFillStar />
                  <span
                    style={{
                      fontSize: "30px",
                      padding: "0 10px",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    8.7/10{" "}
                  </span>
                  <span> 80.9K Votes</span>
                  <ArrowForwardIosIcon
                    color="error"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="flex">
                  <div>
                    <h3>Add your rating & review</h3>
                    <p>Your ratings matter</p>
                  </div>
                  <div className="btn">
                    <a href="#">Rate Now</a>
                  </div>
                </div>
                <div className="merge">
                  <div className="mov">
                    <a href="#">2D</a>
                  </div>

                  <div className="mov">
                    <a href="#">Tamil,English</a>
                  </div>
                </div>
                <div className="time">
                  <p>
                    1h 51m<span>.</span>
                    {data.name}
                    <span>.</span>A<span>.</span>7 Sep,2023
                  </p>
                </div>
                <div className="book">
                  <a href="#" onClick={() => gotoTheater(data.title)}>
                    Book tickets
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="share">
                  <div className="sha" onClick={handleClickOpen}>
                    <p>
                      <BsShare />

                      <h3>Share</h3>
                    </p>
                  </div>
                  <div>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                      sx={{ width: "100%", textAlign: "center" }}
                    >
                      <DialogTitle sx={{ width: "50%" }}></DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                          Share
                          <TiDeleteOutline onClick={handleClose} />
                        </DialogContentText>
                      </DialogContent>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                          Facebook
                          <ImFacebook />
                        </DialogContentText>
                      </DialogContent>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                          Twitter
                          <FaTwitter />
                        </DialogContentText>
                      </DialogContent>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                          Copy Link
                          <BiLinkAlt />
                        </DialogContentText>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
      <Box id="about">
        <Container>
          <Box className="title">
            <h2>About the Movie</h2>
            <p>
              The sequel to the worldwide smash hit follows Sister Irene as she
              once again comes face-to-face with Valak, the demon nun.
            </p>
          </Box>
          <Box sx={{ padding: "20px 0" }} className="t1">
            <h2>Cast</h2>
            <div className="row">
              {castimg.map((v, i) => {
                return (
                  <div className="col-img">
                    <img src={v.pic} />
                    <h4>{v.name}</h4>
                    <p>{v.title}</p>
                  </div>
                );
              })}
            </div>
          </Box>
          <Box>
            <h2 style={{ padding: "20px 0" }}>Reviews</h2>
            <div className="flex">
              <div>
                <h3>Watched? Add your rating & review</h3>
                <p>Your ratings matter</p>
              </div>
              <div className="btn">
                <a href="#">Rate Now</a>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
