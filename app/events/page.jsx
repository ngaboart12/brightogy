"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";
import LinkComponent from "components/LinkComponet";
import Navbar from "components/Navbar";
import Footer from "../../components/Landing/Footer";
import ReactLoading from "react-loading";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all events when the component mounts
    const fetchEvents = async () => {
      const eventsCollection = collection(db, "events");
      try {
        const querySnapshot = await getDocs(eventsCollection);
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsData);
        setLoading(false);
      } catch (error) {
        console.error("Error getting events: ", error);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div className="flex flex-col  w-full overflow-hidden bg-white relative">
      <LinkComponent />
      <Navbar />

      <div className="flex flex-col gap-4 py-4 px-20">
        <div className="flex justify-center items-center py-3 bg-[#07294D] rounded-xl">
          <h1 className=" text-[30px] text-white  font-[700] ">Gallery</h1>
        </div>
        {loading ? (
          <div className="w-full items-center justify-center py-10 flex">
            <ReactLoading type="spin" color="#123E6C" height={50} width={50} />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
            {events.map((event) => (
              <a
                href={`/gallery/?eventId=${event.id}`}
                className="flex flex-col gap-2 w-[230px] hover:opacity-80"
                key={event.id}
              >
                <div className="relative flex items-end ml-2 bg-blue-100 w-[225px] h-[40vh] rounded-2xl">
                  <div className=" w-[250px] absolute left-[-2vh]  h-[38vh] rounded-2xl">
                    <img
                      src={event.mainPictureURL}
                      alt=""
                      className="w-full h-full rounded-2xl object-cover "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center leading-3 ">
                  <span className="text-[14px]">{event.eventName}</span>
                  <div className="flex justify-between w-full px-4">
                    <span className="text-[14px] font-bold">
                      {event.additionalPicturesURLs.length} photos
                    </span>
                    <span className="text-[14px]">{event.eventDate}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
