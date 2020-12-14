/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Nav() {
  return (
    <nav className="bg-spr-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12"
                src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
                alt="Workflow"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="bg-spr-white text-spr-black px-4 py-2 h-12 text-sm font-bold uppercase border-t-4 border-spr-green"
              >
                Home
              </a>

              <a
                href="#"
                className="text-spr-black hover:bg-spr-white px-4 py-2 h-12 text-sm font-bold uppercase border-t-4 border-spr-green-light  hover:border-spr-green"
              >
                Owners
              </a>

              <a
                href="#"
                className="text-spr-black hover:bg-spr-white px-4 py-2 h-12 text-sm font-bold uppercase border-t-4 border-spr-green-light  hover:border-spr-green"
              >
                Veterinarians
              </a>
              <a
                href="#"
                className="text-spr-black hover:bg-spr-white px-4 py-2 h-12 text-sm font-bold uppercase border-t-4 border-spr-green-light  hover:border-spr-green"
              >
                Specialities
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!--
  Mobile menu, toggle classes based on menu state.

  Open: "block", closed: "hidden"
--> */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Reports
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: bell --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Your Profile
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Settings
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-spr-black">
          Spring
        </h1>
      </div>
    </header>
  );
}

function Table() {
  return (
    <Section>
      <Heading>10 Owners found</Heading>
      <table className="w-full">
        <thead>
          <tr>
            <td className="border-b pr-1 py-3.5 font-bold">Name</td>
            <td className="border-b pr-1 py-3.5 font-bold">Address</td>
            <td className="border-b pr-1 py-3.5 font-bold">City</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b pr-1 py-3.5">
              <a className="text-spr-blue hover:text-spr-gray-dark" href="#">
                Lorem
              </a>
            </td>
            <td className="border-b pr-1 py-3.5">Ipsum</td>
            <td className="border-b pr-1 py-3.5">tra-la-la-la</td>
          </tr>
          <tr>
            <td className="border-b pr-1 py-3.5">Lorem</td>
            <td className="border-b pr-1 py-3.5">Ipsum</td>
            <td className="border-b pr-1 py-3.5">
              <button className="bg-spr-black text-spr-white uppercase py-1 px-3.5 hover:bg-spr-green font-helvetica">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}

type PageProps = {
  children?: React.ReactNode;
};

type SectionProps = {
  children: React.ReactNode;
};
function Section({ children }: SectionProps) {
  return <div className="px-4 pt-8 sm:px-0">{children}</div>;
}

type HeadingProps = {
  children: React.ReactNode;
  level?: "2" | "3";
};

function Heading({ children, level = "2" }: HeadingProps) {
  const className = "pb-2 text-xl font-metro font-semibold";

  return level === "2" ? (
    <h2 className={className}>{children}</h2>
  ) : (
    <h3 className={className}>{children}</h3>
  );
}

function Form() {
  return (
    <Section>
      <Heading>Add Owner</Heading>

      <div className="">
        <div className="py-3.5 ">
          <div className="col-span-3 sm:col-span-2">
            <label
              htmlFor="company_website"
              className="block text-sm font-medium text-gray-700"
            >
              Website
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="company_website"
                id="company_website"
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ExamplePage() {
  return (
    <PageLayout>
      <Table />
      <Form />
    </PageLayout>
  );
}

function PageLayout({ children }: PageProps) {
  return (
    <div>
      <Nav />
      <Header />

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>

        {/* <!-- /End replace --> */}
      </main>
    </div>
  );
}

function App() {
  return <ExamplePage />;
  // return (
  //   <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  //     <div className="text-center space-y-2 sm:text-left ">
  //       <div className="space-y-0.5">
  //         <p className="text-lg text-black font-semibold font-sans-va">
  //           Erin Lindford (VA)
  //         </p>
  //         <p className="text-gre font-sans-mo">Product Engineer</p>
  //       </div>
  //       <button className="text-pink">Message</button>
  //     </div>
  //   </div>
  // );
}

export default App;
