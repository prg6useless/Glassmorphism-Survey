// import { useState } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-5 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
        <div className="mx-auto max-w-3xl py-32 sm:py-38 lg:py-46">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Exploring Glassmorphism
            </h1>
            <h3 className="text-2xl font-semibold py-4">Research Survey</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
              Thank you sincerely for participating in our research survey on
              glass morphism. Your contribution is invaluable to our study, and
              we greatly appreciate the time you&apos;ve taken to share your
              insights with us. Please rest assured that all responses provided
              are strictly confidential and will only be used for research
              purposes. Your input will help us gain a deeper understanding of
              glass morphism, its usage, and its impact on user experience. By
              analyzing the data gathered from participants like you, we aim to
              enhance our comprehension of this design trend and its
              applications, ultimately leading to improved practices and
              innovations in the field. This survey is estimated to take around
              10 minutes to complete, and your cooperation is immensely valuable
              in advancing our research efforts. Thank you once again for your
              participation and for contributing to the advancement of knowledge
              in this area.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/email"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
