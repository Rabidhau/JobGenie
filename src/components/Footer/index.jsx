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
            <p className="text-gray-600 text-sm mt-2">info@company.com</p>
            <p className="text-gray-600 text-sm mt-2">+123 456 7890</p>
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Contact
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
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path>
</svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
               <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
               </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="29" height="29" viewBox="0 0 48 48">
<linearGradient id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"></path>
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
