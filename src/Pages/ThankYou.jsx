import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="rounded-3xl shadow-2xl">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Your response has been saved
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Thank you for filling the survey!
          </h2>
          <button
            type="submit"
            onClick={() => {
              navigate("/");
            }}
            className="rounded-lg bg-indigo-600 mt-5 px-5 py-3 text-sm font-medium text-white"
          >
            Take The Survey Again
          </button>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
