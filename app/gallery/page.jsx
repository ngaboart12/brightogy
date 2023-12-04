"use client"
import React, { useState, useEffect } from "react";

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import LinkComponent from "components/LinkComponet";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useRouter,useSearchParams } from "next/navigation";


const EventDetailsPage = () => {
   const searchParams = useSearchParams()
 
  const eventId = searchParams.get('eventId')
  const [additionalPicturesURLs, setAdditionalPicturesURLs] = useState([]);
  const [eventData, setEventData] = useState();
  console.log(eventId);

  useEffect(() => {
    const fetchEventDetails = async () => {
      const eventDocRef = doc(collection(db, "events"), eventId);
      const eventDoc = await getDoc(eventDocRef);

      if (eventDoc.exists()) {
        const eventData = eventDoc.data();
        const additionalPicturesURLs = eventData.additionalPicturesURLs || [];
        setAdditionalPicturesURLs(additionalPicturesURLs);
        setEventData(eventData);
      } else {
        // Handle event not found
      }
    };

    fetchEventDetails();
  }, [eventId]);

  return (
    <div>
      <LinkComponent />
      <Navbar />

      <div className="py-4 px-[20px] md:px-20 lg:px-40">
        {additionalPicturesURLs.length > 0 ? (
          <div className="w-full gap-4 flex flex-col">
            <h1 className="text-[26px] font-[600]">{eventData.eventName}</h1>

            <div className="grid grid-cols-4 gap-y-6 gap-x-10">
              {additionalPicturesURLs.map((url, index) => (
                <div className="flex min-w-[200px] h-60">
                  <img
                    key={index}
                    src={url.url}
                    alt={`Additional Photo ${index + 1}`}
                    style={{ maxWidth: "100%" }}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No additional pictures available for this event.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventDetailsPage;
