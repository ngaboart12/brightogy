"use client"

import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';



function Single({ }) {
  console.log(id)
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const offerDoc = await getDoc(doc(db, 'offers', id));
        if (offerDoc.exists()) {
          setOffer({
            id: offerDoc.id,
            ...offerDoc.data(),
          });
        } else {
          console.error('Offer not found');
        }
      } catch (error) {
        console.error('Error fetching offer:', error);
      }
    };

    if (id) {
      fetchOffer();
    }
  }, [id]);

  if (!offer) {
    // Handle the case when offer is not yet fetched
    return <p>Loading...</p>;
  }


  // Destructure the offer data
  const { offerName, offerDate, offerDescription } = offer;

  return (
    <div>
      {/* Display the details of the offer */}
      <h1>Offer Details</h1>
      <p>ID: {id}</p>
      <p>Name: {offerName}</p>
      <p>Date: {offerDate}</p>
      <p>Description: {offerDescription}</p>
      {/* ... Display other offer details */}
    </div>
  );
}

export default Single;
