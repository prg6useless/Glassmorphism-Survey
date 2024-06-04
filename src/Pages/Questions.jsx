import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; //
import { questions } from "../Pages/data";

const Questions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = location.state || {};

  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (groupIndex, subIndex, option) => {
    setSelectedOptions((prev) => {
      const key = `${groupIndex}-${subIndex}`;
      if (prev[key] === option) {
        const newState = { ...prev };
        delete newState[key];
        return newState;
      } else {
        return {
          ...prev,
          [key]: option,
        };
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    let isValid = true;

    questions.forEach((item, groupIndex) => {
      item.subquestion.forEach((sub, subIndex) => {
        const key = `${groupIndex}-${subIndex}`;
        if (!selectedOptions[key]) {
          newErrors[key] = true;
          isValid = false;
        }
      });
    });
    if (!isValid) {
      setErrors(newErrors);
      alert("Please answer all the questions.");
    } else {
      const answers = Object.keys(selectedOptions).map((key) => {
        const [groupIndex, subIndex] = key.split("-");
        return {
          question: questions[groupIndex].subquestion[subIndex].heading,
          answer: selectedOptions[key],
        };
      });
      try {
        const docRef = await addDoc(collection(db, "surveyResponses"), {
          name,
          email,
          answers,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      console.log("Selected Options:", answers);
      navigate("/sliders");
    }
  };

  return (
    <>
      {" "}
      <form
        action="#"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        onSubmit={handleSubmit}
      >
        {questions.map((item, groupIndex) => {
          return (
            <div key={groupIndex}>
              <h2 className="text-left text-2xl font-bold text-indigo-600 sm:text-3xl">
                {item.title}
              </h2>
              {item.subquestion.map((data, subIndex) => {
                return (
                  <div key={subIndex}>
                    <h5 className=" mt-4 max-w-md text-left font-bold ">
                      {data.heading}
                    </h5>
                    {data.options.map((values, optionIndex) => {
                      return (
                        <div key={optionIndex}>
                          <fieldset>
                            <legend className="sr-only">Checkboxes</legend>

                            <div className="space-y-2">
                              <label
                                htmlFor={`option-${groupIndex}-${subIndex}-${optionIndex}`}
                                className="flex cursor-pointer items-start gap-4"
                              >
                                <div className="flex items-center">
                                  &#8203;
                                  <input
                                    type="checkbox"
                                    className="size-4 rounded border-gray-300"
                                    id={`option-${groupIndex}-${subIndex}-${optionIndex}`}
                                    name={`group-${groupIndex}-${subIndex}`}
                                    checked={
                                      selectedOptions[
                                        `${groupIndex}-${subIndex}`
                                      ] === values
                                    }
                                    onChange={() =>
                                      handleChange(groupIndex, subIndex, values)
                                    }
                                  />
                                </div>

                                <div>
                                  <strong className="font-medium text-gray-900">
                                    {values}
                                  </strong>
                                </div>
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      );
                    })}
                    {errors[`${groupIndex}-${subIndex}`] && (
                      <p className="text-red-500">
                        Please select at least one option.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default Questions;
