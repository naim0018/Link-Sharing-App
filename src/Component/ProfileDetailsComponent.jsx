// This component handles the profile details page, allowing users to view and edit their profile information
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import {
  FaChevronRight,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
// import { ChevronRight } from 'lucide-react'

export default function ProfileDetails() {
  // State variables for user profile information
  const [firstName, setFirstName] = useState("Ben");
  const [lastName, setLastName] = useState("Wright");
  const [email, setEmail] = useState("ben@example.com");
  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/150?img=3"
  );

  // Function to handle form submission
  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Implement save functionality
    // This function should send the updated profile information to the server
    // and handle any success or error responses
  };

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full p-5">
      <div className=" w-full space-y-8 rounded-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          {/* Phone Mockup */}
          <div className="hidden md:block w-full  mb-8 sm:mb-0 bg-white p-10 rounded-lg">
            <div
              className="bg-white border-2 border-gray-400 rounded-[40px] p-4 shadow-xl mx-auto"
              style={{ maxWidth: "300px", height: "600px" }}
            >
              <div className="bg-white border-2 border-gray-400 rounded-[32px] p-4 h-full flex flex-col items-center">
                <div className="mt-12 mb-4">
                  <img
                    className="w-28 h-28 rounded-full border-4 border-white"
                    src={profileImage}
                    alt="Profile"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">{`${firstName} ${lastName}`}</h2>
                <p className="text-sm text-gray-500 mb-8">{email}</p>
                <div className="space-y-4 w-full">
                  {/* Social media buttons */}
                  {["GitHub", "YouTube", "LinkedIn"].map((platform, index) => (
                    <button
                      key={platform}
                      className={`w-full ${
                        index === 0
                          ? "bg-gray-800"
                          : index === 1
                          ? "bg-red-600"
                          : "bg-blue-600"
                      } text-white rounded-lg py-3 px-4 flex items-center justify-between`}
                    >
                      <span className="flex items-center">
                        {platform === "GitHub" && <FaGithub className="mr-2" />}
                        {platform === "YouTube" && (
                          <FaYoutube className="mr-2" />
                        )}
                        {platform === "LinkedIn" && (
                          <FaLinkedin className="mr-2" />
                        )}
                        {platform}
                      </span>
                      <FaChevronRight />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details Form */}
          <div className="w-full bg-white  rounded-lg ">
            <form onSubmit={handleSave}>
              <div className="">
                <h1 className=" p-4 md:pt-10 rounded-lg sm:mb-10 text-2xl sm:text-3xl font-bold text-gray-900">
                  Profile Details
                </h1>
                <p className="text-gray-600 px-4  rounded-lg mb-10">
                  Add your details to create a personal touch to your profile.
                </p>
                <div className="bg-gray-100 p-4 m-4  rounded-lg mb-2 sm:mb-10">
                  {/* Profile picture upload section */}
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-sm font-medium text-gray-500 mb-2 sm:mb-0 w-1/2">
                      Profile picture
                    </label>
                    <div className="flex items-center">
                      <div className="relative w-40 h-40 sm:h-28 mr-4">
                        <img
                          className="w-full h-full rounded-lg object-cover sm:w-40 sm:h-28"
                          src={profileImage}
                          alt="Profile"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                          <label
                            htmlFor="profileImageInput"
                            className="text-white cursor-pointer flex flex-col items-center justify-center text-center"
                          >
                            <CiImageOn className="text-4xl" />
                            <span className="text-sm">Change Image</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        id="profileImageInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <p className="text-xs text-gray-500 mt-4">
                        Image must be below 1024x1024px.
                        <br />
                        Use PNG, JPG, or BMP format.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input fields for user information */}

              <div className="space-y-4 bg-gray-100 p-4 sm:p-10 m-4  rounded-lg mb-8 sm:mb-20">
                {[
                  {
                    id: "firstName",
                    label: "First name",
                    value: firstName,
                    setter: setFirstName,
                  },
                  {
                    id: "lastName",
                    label: "Last name",
                    value: lastName,
                    setter: setLastName,
                  },
                  {
                    id: "email",
                    label: "Email",
                    value: email,
                    setter: setEmail,
                    type: "email",
                  },
                ].map((field) => {
                  return (
                    <div
                      key={field.id}
                    className="flex flex-col sm:grid sm:grid-cols-3 sm:items-center sm:gap-4"
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-0"
                    >
                      {field.label}*
                    </label>
                    <input
                      type={field.type || "text"}
                      id={field.id}
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[1px] focus:ring-indigo-500 focus:border-indigo-400 text-sm sm:col-span-2 transition-all duration-300 ease-in-out focus:shadow-[0_0_20px_rgba(79,70,229,0.5)]"
                      required
                    />
                  </div>
                )})}
              </div>
 
              {/* Save button */}
              <div className="border-t border-gray-400 pt-5 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-fit bg-indigo-600 text-white mb-8 mx-5 sm:mr-8 px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
