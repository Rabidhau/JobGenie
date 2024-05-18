export const About = () => {
  return (
    <section className="bg-gray-900 pt-40 pb-40 px-4 sm:px-8 lg:px-16 xl:px-24"> 
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8">About Our Job Portal</h1> 
        <p className="text-lg lg:text-xl text-white mb-8"> 
          Welcome to our job portal! We are dedicated to connecting job seekers with opportunities
          and helping employers find the perfect candidates.
        </p>
        <p className="text-lg lg:text-xl text-white mb-8"> 
          Our mission is to simplify the job search process by providing a user-friendly platform
          where candidates can explore job listings, create profiles, and apply for positions
          effortlessly. Employers can efficiently manage their hiring process by posting jobs,
          reviewing applications, and communicating with candidates.
        </p>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-6">Key Features</h2> 
        <ul className="list-disc text-white text-lg lg:text-xl mb-8 ml-6"> {/* Adjust font size */}
          <li className="mb-4">Search and filter job listings based on various criteria.</li> 
          <li className="mb-4">Create a personalized profile to showcase your skills and experience.</li> 
          <li className="mb-4">Apply to job listings directly through our platform.</li> 
          <li className="mb-4">Receive notifications about new job openings matching your preferences.</li> 
          <li className="mb-4">Manage job postings and applications efficiently as an employer.</li> 
          <li className="mb-4">Communicate with candidates seamlessly throughout the hiring process.</li> 
        </ul>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-6">Our Team</h2> {/* Adjust font size */}
        <p className="text-lg lg:text-xl text-white mb-8"> {/* Adjust font size */}
          Behind our job portal is a team of dedicated professionals passionate about revolutionizing
          the recruitment industry. We strive to provide the best possible experience for both job
          seekers and employers, continually innovating and improving our platform.
        </p>
        <p className="text-lg lg:text-xl text-white mb-8"> {/* Adjust font size */}
          Meet some of the key members of our team:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjust grid gap */}
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center"> {/* Adjust padding */}
            <img src="1.webp" alt="John Doe" className="mb-4 rounded-full w-28 h-28" />
            <h3 className="text-xl lg:text-2xl font-semibold mb-2">Kriti Tamang</h3> 
            <p className="text-lg">Co-founder & CEO</p> {/* Adjust font size */}
            <p className="text-gray-600 text-center mt-2"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center"> 
            <img src="1.webp" alt="Jane Smith" className="mb-4 rounded-full w-28 h-28" /> 
            <h3 className="text-xl lg:text-2xl font-semibold mb-2">Prakash Shrestha</h3> 
            <p className="text-lg">Head of Product</p> 
            <p className="text-gray-600 text-center mt-2"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center"> 
            <img src="1.webp" alt="Michael Johnson" className="mb-4 rounded-full w-28 h-28" /> 
            <h3 className="text-xl lg:text-2xl font-semibold mb-2">Ravi</h3> 
            <p className="text-lg">Lead Developer</p> 
            <p className="text-gray-600 text-center mt-2"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
