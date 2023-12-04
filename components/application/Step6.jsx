"use client"
import React, { useState, useEffect } from "react";

function Step6() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    // Fetch the list of all countries when the component mounts
    const fetchAllCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        if (response.ok) {
          setAllCountries(data);
        } else {
          console.error("Error fetching countries:", data.message);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchAllCountries();
  }, []);

  return (
    <div className="App">
      <select
        className="border py-3 rounded-md px-4 outline-none text-[#07294D]"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      >
        <option value="">Select a country</option>
        {allCountries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Step6;
