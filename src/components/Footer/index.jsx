export const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-10">
      <div className="container max-w-[80vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-gray-800 text-lg font-semibold mb-4">
              Company Name
            </h2>
            <p className="text-gray-600 text-sm">123 Street, City, Country</p>
            <p className="text-gray-600 text-sm mt-2">JobGenie@company.com</p>
            <p className="text-gray-600 text-sm mt-2">+123 456 7890</p>
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  href="./Home"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="./About"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
              
                >
                  About
                </a>
              </li>
              <li>
              </li>
              <li>
                <a
                  href="./Help"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  FAQ / Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.2 6.75l-.95.45c-.6-.4-1.35-.65-2.25-.65-2.04 0-3.7 1.63-3.7 3.65 0 .3.03.6.1.9H8.4v2.75h1.6v7h2.75v-7h1.85l.25-2.75h-2.1v-1.75c0-.6.15-1 .95-1 .2 0 .4.05.55.1v1.85h1.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.2 2H3.8C2.8 2 2 2.8 2 3.8v16.4c0 1 .8 1.8 1.8 1.8h16.4c1 0 1.8-.8 1.8-1.8V3.8c0-1-.8-1.8-1.8-1.8zM7 17H5V9h2v8zm1-10.5c-.7 0-1.3-.6-1.3-1.3S7.3 4 8 4s1.3.6 1.3 1.3S8.7 6.5 8 6.5zm9 10.5h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v-8h2v1c.5-.7 1.5-1.5 3-1.5 2.2 0 4 1.8 4 4v4z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 2H7c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-3.9 15.7c-1.4.8-3 .8-4.5 0-.4-.2-.8-.3-1.1-.5-.4-.3-.7-.8-.7-1.3v-5.7c0-.5.3-1 .7-1.3.4-.2.8-.3 1.1-.5.4-.2.7-.7.7-1.2 0-.4-.1-.8-.4-1.1-.3-.3-.7-.4-1.1-.4-.8 0-1.5.4-1.9 1.1-.5.8-.5 1.8 0 2.6.4.6 1 1.1 1.7 1.4 1.1.5 2.5.4 3.6-.2.4-.2.8-.2 1.2 0 .3.2.5.5.5.8 0 .4-.1.8-.4 1.1zm4.9-5.7c-.3-.2-.8-.3-1.3-.3-.5 0-1 .1-1.3.3-.4.2-.7.6-.7 1V15c0 .6.3 1 .7 1.3.4.2.8.3 1.3.3.5 0 1-.1 1.3-.3.4-.3.7-.7.7-1.3v-4c0-.4-.3-.8-.7-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm mt-8">
          © 2024 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
