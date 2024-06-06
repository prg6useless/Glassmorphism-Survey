import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = location.state || {};

  useEffect(() => {
    if (!name || !email) {
      navigate("/");
    }
  }, [name, email, navigate]);
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
