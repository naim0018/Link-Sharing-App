import { IoReorderTwoOutline } from "react-icons/io5"
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from "react"

const Links = () => {
  // State to manage the list of links
  const [links, setLinks] = useState([
    { id: 1, platform: "GitHub", url: "" },
    { id: 2, platform: "YouTube", url: "" }
  ])

  // Available platform options with their respective icons and colors
  const platformOptions = [
    { name: "YouTube", icon: FaYoutube, color: "text-red-600" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
    { name: "LinkedIn", icon: FaLinkedin, color: "text-blue-600" }
  ]

  // Function to add a new link
  const addNewLink = () => {
    const newLink = {
      id: links.length + 1,
      platform: "GitHub",
      url: ""
    }
    setLinks([...links, newLink])
  }

  // Function to remove a link
  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id))
  }

  // Function to update a link's details
  const updateLink = (id, field, value) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    ))
  }

  // Function to get the icon for a given platform
  const getPlatformIcon = (platform) => {
    const option = platformOptions.find(opt => opt.name === platform)
    return option ? option.icon : null
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full p-5">
      {/* Main Content */}
      <main className="flex-grow w-full">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Phone Mockup */}
            <div className= "hidden lg:block bg-white p-6 lg:p-10 rounded-lg w-full">
              <div className="bg-white border-2 border-gray-400 rounded-3xl p-4 shadow-lg mx-auto w-full" style={{ maxWidth: '308px', height: '632px' }}>
                <div className="bg-white relative rounded-3xl p-4 h-full flex flex-col border-2 border-gray-400 w-full">
                    <div className="absolute border-b-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg border-t-0 border border-gray-400 -top-[2px] left-1/2 -translate-x-1/2 w-20 h-4 bg-white rounded-bl-lg rounded-br-lg"></div>
                      <div className="bg-gray-200 mt-10 rounded-full w-24 h-24 mx-auto mb-4"></div>
                      <div className="bg-gray-200 rounded-full w-36 h-3 mx-auto mb-4"></div>
                      <div className="bg-gray-200 w-24 h-2 rounded-full mx-auto mb-4"></div>
                  <div className="space-y-4 mt-8 w-full">
                    {links.slice(0, 5).map((link,index) => {
                      const Icon = getPlatformIcon(link.platform);
                      return (
                        <div key={index} className={`${link.platform === 'GitHub' ? 'bg-gray-800' : link.platform === 'YouTube' ? 'bg-red-500' : 'bg-blue-600'} text-white rounded-lg p-4 flex items-center justify-between w-full`} style={{height: '48px'}}>
                          <span className="flex items-center">
                            {Icon && <Icon className="w-6 h-6 mr-2" />}
                            {link.platform}
                          </span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                      );
                    })}
                    {[...Array(Math.max(0, 5 - links.length))].map((_, index) => (
                      <div key={index} className="bg-gray-200 rounded-lg p-4 w-full" style={{height: '48px'}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Customize Links Form */}
            <div className="bg-white rounded-lg w-full">
                <div className="p-6 lg:p-10 w-full">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Customize your links</h1>
              <p className="text-gray-600 mb-8">Add/edit/remove links below and then share all your profiles with the world!</p>
              <button onClick={addNewLink} className="w-full border-2 border-purple-600 text-purple-600 font-medium py-3 rounded-lg mb-6 hover:bg-purple-50 transition-colors">
                + Add new link
              </button>
              <div className="space-y-6 mb-5 w-full">
                {links.map((link, index) => (
                  <div key={link.id} className="bg-white p-4 lg:p-6 rounded-lg border border-gray-200 w-full">
                    <div className="flex justify-between items-center mb-4 w-full">
                      <span className="text-gray-600 font-medium flex items-center justify-center"><span className=""><IoReorderTwoOutline /></span> Link #{index + 1}</span>
                      <button onClick={() => removeLink(link.id)} className="text-gray-600 hover:text-gray-900">Remove</button>
                    </div>
                    <div className="space-y-4 w-full">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                        <div className="relative border-[1px] border-gray-300 rounded-md w-full">
                          <select 
                            value={link.platform}
                            onChange={(e) => updateLink(link.id, 'platform', e.target.value)}
                            className="w-full pl-3 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md appearance-none"
                          >
                            {platformOptions.map(option => (
                              <option key={option.name} value={option.name}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#6a53c8]">
                            <svg className="fill-current h-6 w-6 transform transition-transform duration-300 ease-in-out group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                        <input 
                          type="text" 
                          value={link.url}
                          onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                          placeholder={`https://${link.platform.toLowerCase()}.com/johnappleseed`} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                </div>
               {/* Footer */}
      <div className="bg-white border-t border-gray-400 py-4 w-full">
        <div className="flex justify-end px-4 sm:px-6 lg:px-8 w-full">
          <button className="px-5 bg-[#673ff8] text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Save
          </button>
        </div>
      </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  )
}

export default Links
