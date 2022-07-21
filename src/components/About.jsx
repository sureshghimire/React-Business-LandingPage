import React from "react";

function About() {
  return (
    <div class="bg-white dark:bg-gray-800 overflow-hidden relative">
      <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block">ABOUT US</span>
          <span class="block text-indigo-500">We're the game changer</span>
        </h2>
        <p class="text-xl mt-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore,
          possimus minus ut, tenetur, quia quidem neque odit provident
          voluptates cumque natus rem veritatis illum voluptas incidunt hic
          porro esse.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <a href="signup">Get started</a>
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        class="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
      />
    </div>
  );
}

export default About;
