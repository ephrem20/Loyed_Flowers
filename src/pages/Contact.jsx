import frame from "../assets/frame.png"; 

const contactInfo = {
  name: "Loyed Flowers",
  phone: "+251 912 204000",
  email: "info@loyedflowers.com",
  address: "Bole, Addis Ababa, Ethiopia",
  hours: "Mon-Sat: 8am - 8pm",
  website: "www.loyedflowers.com",
};

const Contact = () => {
  return (
    <section id="Contact-section" className="min-h-screen flex items-center justify-center font-inter">
      <div className="container mx-auto p-4 flex justify-center items-center">
        {/* Frame and card perfectly aligned and large */}
        <div className="relative flex justify-center items-center w-full max-w-3xl lg:max-w-5xl aspect-[4/3]">
          {/* Flower frame as border */}
          <img
            src={frame}
            alt="Flower Frame"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
          />
          {/* Card content inside the frame */}
          <div className="relative z-20 bg-transparent  rounded-3xl shadow-xl
            p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col items-center
            text-base sm:text-lg md:text-xl lg:text-2xl overflow-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary text-center mb-8 tracking-tight">
              Contact Information
            </h2>
            <div className="space-y-6 w-full">
              {Object.entries(contactInfo).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-purple-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="font-semibold text-purple-700 capitalize min-w-[100px] lg:min-w-[140px]">
                    {key}:
                  </span>
                  <span className="flex-1 text-gray-800 break-words">
                    {key === "email" ? (
                      <a href={`mailto:${value}`} className="text-blue-600 hover:underline">
                        {value}
                      </a>
                    ) : key === "phone" ? (
                      <a href={`tel:${value.replace(/\s/g, "")}`} className="text-blue-600 hover:underline">
                        {value}
                      </a>
                    ) : key === "website" ? (
                      <a
                        href={`http://${value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;