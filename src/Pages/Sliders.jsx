import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
// import styled from "styled-components";

function ValueLabelComponent(props) {
  const { children, value } = props;
  // const Button = styled.button`
  //   background: transparent;
  //   border-radius: 3px;
  //   border: 2px solid #bf4f74;
  //   color: #bf4f74;
  //   margin: 0 1em;
  //   padding: 0.25em 1em;
  // `;
  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const Sliders = () => {
  const navigate = useNavigate();
  const PrettoSlider = styled(Slider)({
    color: "#7b2cbf",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#7b2cbf",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      FontFace: "Roboto",
      fontWeight: "bold",
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#7b2cbf",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  return (
    <>
      <div className="slider+login flex items-center h-screen background w-screen justify-between px-40 flex-col md:flex-row">
        <div className="w-60">
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
        </div>
        <div className="login-box w-96">
          <div className="w-full max-w-sm p-4 sm:p-6 md:p-8 card">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h5>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>

          {/* <span className="flex justify-evenly mt-5">
        <button
          type="submit"
          onClick={() => {
            navigate("/questions");
          }}
          className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Go Back
        </button>

        <button
          type="submit"
          onClick={() => {
            navigate("/thankyou");
          }}
          className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Submit
        </button>
      </span> */}
        </div>
      </div>
    </>
  );
};

export default Sliders;
