import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import styledC from "styled-components";
import { useState } from "react";
import { SketchPicker } from "react-color";
import "../styles/Sliders.css";
import Stack from "@mui/material/Stack";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const PrettoSlider = styled(Slider)({
  color: "#4f46e5",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#4f46e5",
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
    backgroundColor: "#4f46e5",
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

const Sliders = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = location.state || {};

  useEffect(() => {
    if (!name || !email) {
      navigate("/");
    }
  }, [name, email, navigate]);

  const [transparency, setTransparency] = useState(0.5);
  const [blur, setBlur] = useState(16);
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 17, g: 25, b: 40 },
  });
  const [saturation, setSaturation] = useState(200);

  const Card = styledC.div`
    backdrop-filter: blur(${blur}px) saturate(${saturation}%);
    -webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);
    background-color: rgba(${backgroundcolor.rgb.r}, ${backgroundcolor.rgb.g}, ${backgroundcolor.rgb.b}, ${transparency});
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, ${transparency});
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.9);
  `;

  const handleSubmit = async () => {
    try {
      // Check if there is an existing survey response document for the current user's email
      const querySnapshot = await getDocs(
        query(collection(db, "surveyResponses"), where("email", "==", email))
      );

      if (!querySnapshot.empty) {
        // If a document exists, update the first found document
        const docRef = querySnapshot.docs[0].ref;

        // Update the existing document with the new slider values
        await updateDoc(docRef, {
          transparency,
          blur,
          backgroundcolor: backgroundcolor.rgb,
          saturation,
        });

        console.log("Document updated with ID: ", docRef.id);
        navigate(
          "/questions",
          {
            state: {
              name,
              email,
              transparency,
              blur,
              backgroundcolor: backgroundcolor.rgb,
              saturation,
            },
          },
          {
            replace: true,
          }
        );
      } else {
        // If no document exists, create a new one
        const responseRef = await addDoc(collection(db, "surveyResponses"), {
          name,
          email,
          transparency,
          blur,
          backgroundcolor: backgroundcolor.rgb,
          saturation,
        });
        console.log("New document written with ID: ", responseRef.id);
        navigate(
          "/questions",
          {
            state: {
              name,
              email,
              transparency,
              blur,
              backgroundcolor: backgroundcolor.rgb,
              saturation,
            },
          },
          {
            replace: true,
          }
        );
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div
        className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <h1 className="m-5 py-5 text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        Play with the sliders to get the glassy effect that you like and submit
        the values
      </h1>
      <div className="background">
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-5 lg:p-20 gap-10 lg:gap-20">
          <div className="login-box">
            <Card className=" max-w-sm p-4 sm:p-6 md:p-8">
              <form className="space-y-6">
                <h5 className="text-2xl font-medium text-white dark:text-white">
                  Sign in to our platform
                </h5>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    disabled
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    disabled
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
                        disabled
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <span className="ms-auto text-sm text-indigo-700 hover:underline dark:text-indigo-500">
                    Forgot Password?
                  </span>
                </div>
                <button
                  disabled
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-500 hover:cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <span
                    href="#"
                    className="text-indigo-600 hover:underline dark:text-indigo-500"
                  >
                    Create account
                  </span>
                </div>
              </form>
            </Card>
          </div>

          <div className="editor flex flex-col gap-7">
            <div className="transparency">
              <h5 className="text-xl font-medium text-white dark:text-white">
                Transparency
              </h5>
              <Stack
                direction="row"
                alignItems="center"
                className="flex w-auto bg-white p-1 rounded-2xl font-bold gap-2 md:p-3 md:gap-3"
              >
                0
                <PrettoSlider
                  min={0}
                  max={1}
                  step={0.1}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={transparency}
                  onChange={(e, v) => {
                    setTransparency(v);
                  }}
                />
                1
              </Stack>
            </div>

            <div className="setblur">
              <h5 className="text-xl font-medium text-white dark:text-white">
                Blur
              </h5>
              <Stack
                direction="row"
                alignItems="center"
                className="flex w-auto bg-white p-1 rounded-2xl font-bold gap-2 md:p-3 md:gap-3"
              >
                0
                <PrettoSlider
                  min={0}
                  max={50}
                  step={1}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={blur}
                  onChange={(e, v) => {
                    setBlur(v);
                  }}
                />
                50
              </Stack>
            </div>

            <div className="transparency">
              <h5 className="text-xl font-medium text-white dark:text-white">
                Saturation
              </h5>
              <Stack
                direction="row"
                alignItems="center"
                className="flex w-auto bg-white p-1 rounded-2xl font-bold gap-2 md:p-3 md:gap-3"
              >
                0
                <PrettoSlider
                  min={0}
                  max={200}
                  step={1}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={saturation}
                  onChange={(e, v) => {
                    setSaturation(v);
                  }}
                />
                200
              </Stack>
            </div>

            <div>
              <h5 className="text-xl font-medium text-white dark:text-white">
                Background Color
              </h5>
              <SketchPicker
                color={backgroundcolor.rgb}
                onChange={(color) => setbackgroundcolor(color)}
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-lg self-center bg-indigo-600 hover:bg-indigo-500 mt-5 px-5 py-3 text-sm font-medium text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Sliders;
