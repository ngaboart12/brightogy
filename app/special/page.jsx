import React from "react";
import LinkComponent from "../../components/LinkComponet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Special = () => {
  const offers = [
    {
      date: "14 Jan 2023",
      title: "France Offers",
      disc: `With Our Study in France Programs, you may dive into 
      excellence.Immerse yourself in the craft of education and cultural 
      richness with BrightForthStudy in France programs. Our carefully crafted programs 
      provide access toworld-renowned colleges, numerous academic interests, and the incomparablecharm 
      of France. Experience a unique combination of academic rigor andlivelyculture, from the ancient streets 
      of Paris to the breathtaking countryside. AtBrightForth, we will walk you through the application procedure
       step by step, ensuring that your transition to studying in France is simple and fulfilling. Join us onthis path to get access
      to prominent colleges, language proficiency, and a global future. Your educational journey in France begins here, where
      traditionandinnovation collide in pursuit of academic greatness.`,
    },
    {
      date: "14 Jan 2023",
      title: "China offers",
      disc: `With our Study in China Programs, you may embark on a global educational
      adventure. Discover the rich tapestry of opportunities that await you in China by participatinginone of our carefully crafted programs at BrightForth. Immerse yourself inthedistinctive combination of ancient traditions and cutting-edge innovations that
      defines Chinese education. Top-tier colleges, extensive academic programs, andadynamic cultural experience are all featured in our offers. We at BrightForth will walkyou through every step of the process, from admissions to negotiating languageandcultural adjustments. Join us on this revolutionary adventure as we open the doorsto famous universities, cutting-edge learning settings, and a global future. Your
      scholastic experience in China begins here; let us work together to create a bright
      future!`,
    },
    {
      date: "14 Jan 2023",
      title: "Georgia offers",
      disc: `With our Study in Georgia Programs, you may go on an educational adventure. Discover the allure of learning in Georgia with BrightForth's precisely developedprograms. Immerse yourself in a one-of-a-kind combination of ancient history, livelyculture, and modern education. Our options highlight Georgia's prestigious colleges, various academic programs, and the region's welcoming hospitality. Our extensiveservices provide an easy transition for foreign students, from application support tocultural changes. Join us in discovering Georgia's educational gems, a placethat
      provides not only a high-quality education but also an exciting and culturally varied experience. "Where tradition meets innovation, your academic journey in Georgiabegins here.`,
    },
    {
      date: "14 Jan 2023",
      title: "Dubai offers",
      disc: `With the Help of Our Study in Dubai Programs, Start Your International EducationJourney
      Discover how to live a global lifestyle and achieve academic brilliance with our Studyin Dubai programs. Here at BrightForth, we offer customized programs that provideaccess to Dubai's top colleges, state-of-the-art education, and vibrant multicultural
      atmosphere. Take a deep dive into Dubai, a bustling center of business, innovation, and culture. Our services ensure a comfortable move to this dynamic city by guidingyou through the admissions procedure. Accompany us on this life-changingadventure as we assist you in opening doors to esteemed universities, distinctivecultural encounters,
       and an international future. This is where your educationinDubai begins; together, let's make it truly remarkable!`,
    },
    {
      date: "14 Jan 2023",
      title: "Turkey Offers",
      disc: `Take Off on an Educational Adventure with Our Programs for Studying in TurkeyWith the help of our Study in Turkey programs, open the door to a world of superior
      academics and abundant cultural diversity. Take in the distinctive fusionof
      modernity, history, and hospitality that Turkey provides to foreign students. Weat
      BrightForth offer customized programs that highlight Turkey's prestigiousuniversities, varied academic offerings, and active student community. We offer
      complete support from admissions to settling into your new academic home; our
      offerings go beyond simple advice. Join us as we help you design your educational
      path in Turkey, a nation that skillfully combines innovation and tradition to produceastimulating and dynamic learning environment. Investigate your options andalloweducation to flourish in the center of Eurasia`,
    },
    {
      date: "14 Jan 2023",
      title: "Cyprus offers",
      disc: `Find Your Educational Horizon with Our Study in Cyprus Programs
      Dive into a realm of academic excellence and Mediterranean charmwith our Studyin Cyprus offerings. Immerse yourself in the rich tapestry of Cyprus's educational
      landscape, boasting top-notch universities, diverse courses, and a unique cultural
      blend. Our meticulously crafted programs showcase the allure of studying inthispicturesque island nation, with a focus on quality 
      education, affordable tuition, andasupportive international community. Join us at BrightForth as we guide you throughseamless admission 
      processes, offering a gateway to an enriching academicjourney in Cyprus. Uncover the extraordinary opportunities that await youandembark on
       a transformative educational experience with us!`,
    },
    {
      date: "14 Jan 2023",
      title: "Canada offers",
      disc: `With Our Study in Canada Programs, Set Out on a Global Educational Odyssey" Explore the unmatched opportunities of studying in Canada by enrolling in oneof
      our carefully chosen programs. Take advantage of the famous educational system, the wide range of academic options, and the friendly welcome of Canadian culture. We at BrightForth open doors for you to visit prestigious colleges, state-of-the-art
      research centers, and unmatched educational quality. Our all-inclusive servicesinclude everything, from help with applications to negotiating immigrationprocedures, to make sure your academic journey in Canada goes well. Come alongon 
      this life-changing adventure with us to open the door to a future of distinction, creativity, and global success.`,
    },
    {
      date: "14 Jan 2023",
      title: "Poland offers",
      disc: `Find Limitless Possibilities with Our Programs for Studying in Poland
      Select Poland as your higher education destination to start a journey of academicachievement 
      and cultural enrichment. Our customized study abroad programsinPoland provide access to prestigious 
      colleges, innovative academic programs, andexciting cultural events. Find options for reasonably priced tuition, 
      degrees that arerecognized throughout the world, and a welcoming atmosphere for your academicendeavors. We at [Your Consultancy Name] are dedicated to helping you throughthe smooth admissions process and making sure your time studying in
       Polandisrewarding. Come explore the options and begin your international education withus!`,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />

      {/*  */}
      <div className="flex flex-col w-full max-w-7xl items-center px-[20px] md:px-20 lg:px-40 py-10">
        <h1 className="text-[32px] text-[#123E6C] font-[600]">
          SPECIAL OFFERS
        </h1>
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
          {offers.map((item) => (
            <div className="flex flex-col gap-2  sm:items-start">
              <span className="text-[16px] text-[#123E6C] px-4">
                {item.date}
              </span>
              <h1 className="text-[20px] font-[600] text-[#123E6C]">
                {item.title}
              </h1>
              <span className="text-[#707070] text-[14px]  sm:items-start line-clamp-4">
                {item.disc}
              </span>

              <a
                href="#"
                className="bg-[#123E6C]  w-[150px] rounded-2xl flex items-center justify-center py-2 text-white hover:scale-110"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Special;
