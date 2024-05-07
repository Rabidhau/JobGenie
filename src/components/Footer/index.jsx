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
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
<radialGradient id="TGwjmZMm2W~B4yrgup6jda_119026_gr1" cx="32" cy="32.5" r="31.259" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#efdcb1"></stop><stop offset="0" stop-color="#f2e0bb"></stop><stop offset=".011" stop-color="#f2e0bc"></stop><stop offset=".362" stop-color="#f9edd2"></stop><stop offset=".699" stop-color="#fef4df"></stop><stop offset="1" stop-color="#fff7e4"></stop></radialGradient><path fill="url(#TGwjmZMm2W~B4yrgup6jda_119026_gr1)" d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"></path><radialGradient id="TGwjmZMm2W~B4yrgup6jdb_119026_gr2" cx="18.51" cy="66.293" r="69.648" gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)" gradientUnits="userSpaceOnUse"><stop offset=".073" stop-color="#eacc7b"></stop><stop offset=".184" stop-color="#ecaa59"></stop><stop offset=".307" stop-color="#ef802e"></stop><stop offset=".358" stop-color="#ef6d3a"></stop><stop offset=".46" stop-color="#f04b50"></stop><stop offset=".516" stop-color="#f03e58"></stop><stop offset=".689" stop-color="#db359e"></stop><stop offset=".724" stop-color="#ce37a4"></stop><stop offset=".789" stop-color="#ac3cb4"></stop><stop offset=".877" stop-color="#7544cf"></stop><stop offset=".98" stop-color="#2b4ff2"></stop></radialGradient><path fill="url(#TGwjmZMm2W~B4yrgup6jdb_119026_gr2)" d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"></path><path fill="#fff" d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"></path><path fill="#fff" d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"></path><circle cx="41" cy="25" r="2" fill="#fff"></circle>
</svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
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
