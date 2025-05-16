import { useState } from 'react';
import './CalendarStyles.css';
import { Menu, X, Search, Globe, MessageCircle, Calendar, Map, ChevronRight, ChevronDown, User, ShoppingBag } from 'lucide-react';
import EventCalendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import soccerEventImg from './assets/event-soccer.jpg';
import concertEventImg from './assets/event-concert.png';
import foodFestivalImg from './assets/event-food.jpg';
import stadiumToursImg from './assets/tours.jpg';
import suitesImg from './assets/suites.jpg';
import stadiumAttractionsImg from './assets/stadium-attractions.jpg';
import mosesMabhidaImg from './assets/moses-mabhida.jpg';







const StadiumHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: "Hello! 👋 How can we assist you today?" }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
  
    const updatedMessages = [...chatMessages, { sender: 'user', text: newMessage.trim() }];
    setChatMessages(updatedMessages);
    setNewMessage('');
  
    // Auto-reply after 1 second
    setTimeout(() => {
      setChatMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: "Thanks for reaching out! We'll get back to you shortly." }
      ]);
    }, 1000);
  };
  
  const [isSuiteFormOpen, setIsSuiteFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [eventFormSubmitted, setEventFormSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);



  
  
  // Weather data mock
  const weatherData = {
    temp: 24,
    condition: 'Sunny',
    high: 27,
    low: 18
  };
  
  // Events data mock
  const events = [
    { id: 1, title: 'International Soccer Match', date: '2025-05-15', image: soccerEventImg, category: 'Sports' },
    { id: 2, title: 'Summer Concert Series', date: '2025-06-03', image: concertEventImg, category: 'Music' },
    { id: 3, title: 'Food Festival Weekend', date: '2025-05-28', image: foodFestivalImg, category: 'Food' }
  ];
  
  

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="images/logo.jpeg" alt="Stadium Logo" className="h-10 w-auto object-contain" />
              </div>

                <span className="ml-2 text-xl font-bold text-gray-800">Moses Mabhida</span>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 relative">
  {/* Suite Rentals */}
  <div className="relative group">
    <button onMouseEnter={() => setDropdownOpen('suite')} onMouseLeave={() => setDropdownOpen(null)} className="text-gray-700 hover:text-orange-500 font-medium">Suite Rentals</button>
    {dropdownOpen === 'suite' && (
      <div onMouseEnter={() => setDropdownOpen('suite')} onMouseLeave={() => setDropdownOpen(null)} className="absolute z-40 bg-white shadow-md rounded mt-2 p-2">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Suite Application Form</a>
      </div>
    )}
  </div>

  {/* Events */}
  <div className="relative group">
    <button onMouseEnter={() => setDropdownOpen('events')} onMouseLeave={() => setDropdownOpen(null)} className="text-gray-700 hover:text-orange-500 font-medium">Events</button>
    {dropdownOpen === 'events' && (
      <div onMouseEnter={() => setDropdownOpen('events')} onMouseLeave={() => setDropdownOpen(null)} className="absolute z-40 bg-white shadow-md rounded mt-2 p-2">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Events Calendar</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Events Booking Form</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Events Customer Form</a>
      </div>
    )}
  </div>

  {/* Retail */}
  <div className="relative group">
    <button onMouseEnter={() => setDropdownOpen('retail')} onMouseLeave={() => setDropdownOpen(null)} className="text-gray-700 hover:text-orange-500 font-medium">Retail</button>
    {dropdownOpen === 'retail' && (
      <div onMouseEnter={() => setDropdownOpen('retail')} onMouseLeave={() => setDropdownOpen(null)} className="absolute z-40 bg-white shadow-md rounded mt-2 p-2 space-y-2 w-64">
        {/* Attractions */}
        <div>
          <p className="px-4 py-2 font-semibold text-gray-700">Attractions</p>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Tours</a>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Sky Car</a>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Adventure Walk</a>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Peoples Park Kiddies Play Area</a>
        </div>
        {/* Retail Shops */}
        <div>
          <p className="px-4 pt-3 font-semibold text-gray-700">Retail Shops</p>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Fresh Food Daily</a>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Virgin Active</a>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Visitors Centre</a>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Prime</a>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Amazulu Experience Shop</a>
          <a href="#" className="block px-6 py-1 hover:bg-gray-100">Prime</a>
        </div>
      </div>
    )}
  </div>

  {/* Venue Information */}
  <div className="relative group">
    <button onMouseEnter={() => setDropdownOpen('venue')} onMouseLeave={() => setDropdownOpen(null)} className="text-gray-700 hover:text-orange-500 font-medium">Venue Information</button>
    {dropdownOpen === 'venue' && (
      <div onMouseEnter={() => setDropdownOpen('venue')} onMouseLeave={() => setDropdownOpen(null)} className="absolute z-40 bg-white shadow-md rounded mt-2 p-2">
        {[
          'Presidential Suite',
          'Mixed Zone',
          'Press Conference Room',
          'Astro Turf',
          'Peoples Park',
          'Bowling'
        ].map(item => (
          <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100">{item}</a>
        ))}
      </div>
    )}
  </div>
</nav>

            
            {/* Utility Nav */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Search size={20} />
              </button>
              <div className="relative">
  <button
    className="p-2 rounded-full hover:bg-gray-100"
    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
  >
    <Globe size={20} />
  </button>

  {/* Language Dropdown */}
  {isLanguageDropdownOpen && (
    <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg text-sm z-50">
      <button
        onClick={() => {
          setSelectedLanguage('EN');
          setIsLanguageDropdownOpen(false);
        }}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        English (EN)
      </button>
      <button
        onClick={() => {
          setSelectedLanguage('FR');
          setIsLanguageDropdownOpen(false);
        }}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        French (FR)
      </button>
      <button
        onClick={() => {
          setSelectedLanguage('ZU');
          setIsLanguageDropdownOpen(false);
        }}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Zulu (ZU)
      </button>
    </div>
  )}
</div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User size={20} />
              </button>
              <button className="ml-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Events</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Tours & Attractions</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Suites & Venues</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Retail & Dining</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Information</a>
              <div className="flex space-x-2 px-3 py-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Search size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Globe size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <User size={20} />
                </button>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-700 text-white pb-20">
  <div className="relative h-[600px] w-full overflow-hidden">
    <div className="absolute inset-0 bg-gray-900 opacity-40 z-0"></div>
    <div
  className="absolute inset-0 bg-center bg-cover z-0"
  style={{ backgroundImage: "url('images/Moses-Mabhida-Stadium-4.jpg')" }}
  ></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Experience The Stadium</h1>
      <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl">
        Book tickets, tours, and exclusive experiences at our world-class venue.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
          Book Tickets
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg">
          Virtual Tour
        </button>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <p><h3 className="text-5xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">Meet the Entire Family </h3></p>
      </div>
      {/* Stadium Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-6xl px-4 sm:px-0">
        {[
  { name: "Mpumalanga Stadium", image: "/images/mpumalanga.jpg" },
  { name: "Princess Magogo", image: "/images/princess_magogo.jpg" },
  { name: "Chatsworth Stadium", image: "/images/Chatsworth.jpg" },
  { name: "King Zwelethini", image: "/images/king_zwelithini.jpg" },
  { name: "Sugar Ray Stadium", image: "/images/kings.jpg" }
        ].map((stadium, index) => (
          <div
            key={index}
            className="group bg-white/20 backdrop-blur-lg rounded-xl shadow-lg p-4 transform transition-transform hover:-translate-y-2 hover:shadow-xl cursor-pointer border border-white/30"
          >
            <img
              src={stadium.image}
              alt={stadium.name}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <h4 className="text-white text-center text-sm font-semibold group-hover:text-orange-400">
              {stadium.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Promotional Popup */}
      {isPopupVisible && (
        <div className="fixed inset-x-0 bottom-0 md:top-24 md:right-8 md:left-auto md:bottom-auto md:max-w-md z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-orange-500 text-white">
              <h3 className="font-bold">Special Offer</h3>
              <button onClick={() => setIsPopupVisible(false)} className="focus:outline-none">
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <p className="mb-3">Book any stadium tour this month and get 20% off on merchandise!</p>
              <div className="bg-gray-100 rounded p-2 text-sm mb-3">
                Use code: <span className="font-bold">TOUR20</span>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {/* Upcoming Events Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <a
  href="#"
  className="text-orange-500 hover:text-orange-600 flex items-center cursor-pointer"
  onClick={(e) => {
    e.preventDefault();
    setIsCalendarOpen(true);
  }}
>
  View Calendar <ChevronRight size={16} className="ml-1" />
</a>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map(event => (
                <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="h-48 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-gray-600 mb-3">
                      <Calendar size={16} className="inline mr-1" /> {event.date}
                    </p>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore The Stadium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Links Cards */}
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-200">
                <div className="h-40 overflow-hidden">
                <img src={stadiumToursImg} alt="Stadium Tours" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Stadium Tours</h3>
                  <p className="text-gray-600 mb-4">Explore behind the scenes and discover the stadium's secrets.</p>
                  <div className="flex items-center text-orange-500 font-medium">
                    <span>Book a Tour</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-200">
  <div className="h-40 overflow-hidden">
  <img src={suitesImg} alt="Suite Rentals" className="w-full h-full object-cover" />
  </div>
  <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Suite Rentals</h3>
    <p className="text-gray-600 mb-4">Experience events in luxury with our premium suite options.</p>
    <div className="flex items-center text-orange-500 font-medium cursor-pointer" onClick={() => setIsSuiteFormOpen(true)}>
      <span>Apply for a Suite</span>
      <ChevronRight size={16} className="ml-1" />
    </div>
  </div>
</div>

              
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-200">
                <div className="h-40 overflow-hidden">
                <img src={stadiumAttractionsImg} alt="Attractions" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Attractions</h3>
                  <p className="text-gray-600 mb-4">Experience the Sky Car, Adventure Walk and more.</p>
                  <div className="flex items-center text-orange-500 font-medium">
                    <span>View Attractions</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map & Weather Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gray-200 rounded-lg overflow-hidden">
            <div className="relative w-full h-[300px]">

                  {/* Map Placeholder */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.2751650293993!2d31.026387015465105!3d-29.828676281992264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa74565930c3%3A0x41ff86d3aeea6d6d!2sMoses%20Mabhida%20Stadium!5e0!3m2!1sen!2sza!4v1714448888888!5m2!1sen!2sza"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded shadow flex items-center">
                      <Map size={16} className="mr-2" /> Get Directions
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                {/* Weather Widget */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 p-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Stadium Weather</h3>
                  <div className="flex items-center mb-3">
                    <div className="text-5xl font-bold text-gray-900 mr-3">{weatherData.temp}°</div>
                    <div>
                      <div className="text-lg text-gray-700">{weatherData.condition}</div>
                      <div className="text-sm text-gray-500">H: {weatherData.high}° L: {weatherData.low}°</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Updated as of today at 12:00 PM
                  </div>
                </div>
                
                {/* Newsletter Section */}
                <div className="bg-orange-500 rounded-lg overflow-hidden shadow-md p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
                  <p className="text-white text-opacity-90 mb-4">Subscribe for the latest events and promotions.</p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-grow px-3 py-2 rounded-l border-none focus:outline-none"
                    />
                    <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-r">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat Box Floating Button and Window */}
{!isChatOpen && (
  <button
    onClick={() => setIsChatOpen(true)}
    className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg z-50"
  >
    <MessageCircle size={24} />
  </button>
)}

{/* Chat Box Floating Button and Window */}
{!isChatOpen && (
  <button
    onClick={() => setIsChatOpen(true)}
    className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg z-50"
  >
    <MessageCircle size={24} />
  </button>
)}

{isChatOpen && (
  <div className="fixed bottom-6 right-6 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50">
    {/* Chat Header */}
    <div className="bg-orange-500 text-white flex justify-between items-center p-3">
      <span className="font-semibold">Chat with Us</span>
      <button onClick={() => setIsChatOpen(false)}>
        <X size={20} />
      </button>
    </div>

    {/* Chat Messages */}
    <div className="h-48 p-3 overflow-y-auto text-sm text-gray-700 flex flex-col space-y-2">
      {chatMessages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-2 rounded-lg ${
            msg.sender === 'user' ? 'bg-gray-200 self-end' : 'bg-orange-100 self-start'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>

    {/* Chat Input */}
    <div className="flex border-t">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        placeholder="Type your message..."
        className="flex-grow px-3 py-2 text-sm focus:outline-none"
      />
      <button
        onClick={handleSendMessage}
        className="bg-orange-500 hover:bg-orange-600 text-white p-2"
      >
        Send
      </button>
    </div>
  </div>
)}


          </div>
        </section>
      </main>
      {/* Venue Information Section */}
<section className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About the Stadium</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Image of the stadium */}
      <div className="rounded-lg overflow-hidden shadow">
      <img
  src={mosesMabhidaImg}
  alt="Moses Mabhida Stadium"
  className="w-full h-full object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"

/>
      </div>

      {/* Venue description */}
      <div>
        <p className="text-gray-700 text-lg mb-4">
          The Moses Mabhida Stadium, located in Durban, is a world-class multipurpose venue known for its iconic arch and breathtaking views of the Indian Ocean. Designed with versatility in mind, the stadium hosts football matches, concerts, exhibitions, and large-scale community events.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Location:</strong> 44 Isaiah Ntshangase Rd, Stamford Hill, Durban</li>
          <li><strong>Capacity:</strong> 56,000+ seats (expandable)</li>
          <li><strong>Accessibility:</strong> Fully accessible with ramps, lifts, and designated seating</li>
          <li><strong>Attractions:</strong> SkyCar, Adventure Walk, Museum, Retail and Dining Spaces</li>
          <li><strong>Facilities:</strong> Corporate suites, hospitality lounges, media center, conference rooms</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Visit</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Tours</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Attractions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Retail</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Host</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Venue Hire</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Suites</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Press Room</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Mixed Zone</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Information</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
                <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M7.75 2h8.5C20.25 2 22 3.75 22 7.75v8.5c0 4-1.75 5.75-5.75 5.75h-8.5C3.75 22 2 20.25 2 16.25v-8.5C2 3.75 3.75 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zm4.25 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm4.75-2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" />
            </svg>
                </a>
          </div>
        </div>
      </div>
      </footer>

      {/* Suite Application Form Modal */}
{isSuiteFormOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={() => setIsSuiteFormOpen(false)}
      >
        <X size={24} />
      </button>

      {formSubmitted ? (
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Thank You!</h3>
          <p>We have received your application. Our team will contact you soon!</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Suite Application</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            setFormSubmitted(true);
          }} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              required
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Event / Date"
              required
              className="w-full border rounded px-3 py-2"
            />
            <textarea
              placeholder="Special Requests"
              className="w-full border rounded px-3 py-2"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded"
            >
              Submit Application
            </button>
          </form>
        </>
      )}
    </div>
  </div>
)}

{/* Events Full Month Calendar Modal */}
{isCalendarOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 overflow-y-auto relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={() => setIsCalendarOpen(false)}
      >
        <X size={24} />
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">Events Calendar</h2>

      <div className="p-8 bg-gray-100 rounded-lg shadow-md w-full max-w-3xl">
      <EventCalendar
  className="w-full text-sm"
  tileClassName={({ date, view }) => {
    if (view === 'month') {
      const hasEvent = events.some(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );
      return hasEvent
        ? 'bg-orange-100 text-orange-700 font-semibold rounded-lg hover:bg-orange-200'
        : 'hover:bg-gray-200 rounded-lg';
    }
    return '';
  }}
  tileContent={({ date, view }) => {
    if (view === 'month') {
      const eventForDate = events.find(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );
      return eventForDate ? (
        <div className="text-xs text-orange-500 text-center mt-1">
          📍
        </div>
      ) : null;
    }
  }}
  onClickDay={(value) => {
    const event = events.find(
      (event) => new Date(event.date).toDateString() === value.toDateString()
    );
    if (event) {
      setSelectedEvent(event);
      setIsCalendarOpen(false);
      setIsEventFormOpen(true);
    }
  }}
/>

</div>

    </div>
  </div>
)}


{/* Event Booking Form Modal */}
{isEventFormOpen && selectedEvent && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={() => setIsEventFormOpen(false)}
      >
        <X size={24} />
      </button>

      {eventFormSubmitted ? (
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Thank You!</h3>
          <p>Your booking for <strong>{selectedEvent.title}</strong> has been received!</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Book: {selectedEvent.title}</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            setEventFormSubmitted(true);
          }} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="number"
              placeholder="Number of Tickets"
              required
              className="w-full border rounded px-3 py-2"
            />
            <textarea
              placeholder="Special Requests"
              className="w-full border rounded px-3 py-2"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded"
            >
              Confirm Booking
            </button>
          </form>
        </>
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default StadiumHomepage;

