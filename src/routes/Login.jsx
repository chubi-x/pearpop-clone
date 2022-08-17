import React from "react";
import { Link } from "react-router-dom";

// ui components
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SubmitButton from "../components/SubmitButton";

// animation import
import { Fade } from "@mui/material";
import { Backdrop } from "@mui/material";
// icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AuthButtons from "../components/AuthButtons";

// modal styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--secondary-color)",
  border: "0px",
  borderColor: "black",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  fontFamily: "inherit",
};

//   password rest childmodal
function SentResetLink() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <SubmitButton onClick={handleOpen} />
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, width: 200 }}>
            <h2
              id="child-modal-title"
              style={{ display: "inline-block", marginRight: "95px" }}
            >
              Sent!
            </h2>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            />
            <p id="child-modal-description">
              A reset link has been sent to your email
            </p>
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}
export default function Login() {
  // handle modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="auth-container">
        <div className="auth-button-container">
          <AuthButtons target="register" selected={false} />
          <AuthButtons target="login" selected={true} />
        </div>
        <div className="form-container">
          <h2>Login to your account</h2>
          <p>get paid to make tiktok videos</p>
          <form>
            <input type="email" placeholder="email" required />
            <br />
            <input type="password" placeholder="password" required />
            <div style={{ cursor: "pointer" }} onClick={handleOpen}>
              forgot password?
            </div>
            {/* forgot password modal */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{ timeout: 500 }}
            >
              <Fade in={open}>
                <Box sx={style} className="forgot-password-modal">
                  <h2>Reset password</h2>
                  <p>we'll send you a link to reset your password</p>
                  <form>
                    <input type="text" placeholder="enter your email" />
                  </form>
                  <SentResetLink />
                </Box>
              </Fade>
            </Modal>
            <SubmitButton />
          </form>
          <div className="form-paragraph">
            <p>
              Not a member? <Link to="/register">join</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

