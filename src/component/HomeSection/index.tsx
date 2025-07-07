import Image from 'next/image';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 bg-gray-50"
    >
      {/* Profile Image - 1/3 width on desktop */}
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
        <div className="w-full max-w-xs md:max-w-sm h-auto shadow-lg">
          <Image
            src="/profile-img.jpeg" // Ensure this image is in your public folder
            alt="Anmol Ruhella Profile"
            width={400}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Description - 2/3 width */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
        <p>Hi, I&apos;m Anmol Ruhella</p>

        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          I’m a Frontend Developer who enjoys creating beautiful, responsive, and easy-to-use websites. I specialize in using technologies like React, Next.js, and Tailwind CSS to build fast and user-friendly interfaces.
          <br /><br />
          My goal is to bring ideas to life in the browser — whether it’s a portfolio, business site, or web app. I care deeply about clean design, smooth interactions, and writing code that’s easy to maintain.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
