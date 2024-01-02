"use client";
import React, { useEffect, useState } from "react";
import Input from "../Input";

const Step2 = ({ formData, handleInputChange }) => {
  const [countryName, setCountryName] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        if (response.ok) {
          const sortedCountries = data.sort((a, b) => {
            const nameA = a.name.common.toUpperCase();
            const nameB = b.name.common.toUpperCase();
            return nameA.localeCompare(nameB);
          });
          setAllCountries(sortedCountries);
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
    <div className="flex w-full items-center flex-col pb-4 gap-6">
      <div className="flex gap-1 ">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#07294D]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.84 18.1932C19.84 21.4892 15.32 21.8702 11.921 21.8702L11.6778 21.8699C9.5122 21.8647 4 21.728 4 18.1732C4 14.9444 8.33835 14.5129 11.7115 14.4967L12.1642 14.4964C14.3296 14.5016 19.84 14.6383 19.84 18.1932ZM11.921 15.9962C7.66 15.9962 5.5 16.7282 5.5 18.1732C5.5 19.6312 7.66 20.3702 11.921 20.3702C16.181 20.3702 18.34 19.6382 18.34 18.1932C18.34 16.7352 16.181 15.9962 11.921 15.9962ZM11.921 1.99976C14.849 1.99976 17.23 4.38176 17.23 7.30976C17.23 10.2378 14.849 12.6188 11.921 12.6188H11.889C8.967 12.6098 6.6 10.2268 6.60997 7.30676C6.60997 4.38176 8.992 1.99976 11.921 1.99976ZM11.921 3.42776C9.78 3.42776 8.03798 5.16876 8.03798 7.30976C8.031 9.44376 9.76 11.1838 11.892 11.1918L11.921 11.9058V11.1918C14.061 11.1918 15.802 9.44976 15.802 7.30976C15.802 5.16876 14.061 3.42776 11.921 3.42776Z"
                fill="#FFFDFD"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#777777] text-[14px] font-[300]">
              Setp 1
            </span>
            <span className="text-[16px] font-[400] text-[#07294D]">
              Personal info
            </span>
          </div>
        </div>
        <span className="pt-8">
          <svg
            width="87"
            height="3"
            viewBox="0 0 87 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L86 2"
              stroke="#07294D"
              stroke-width="2"
              stroke-dasharray="20 20"
            />
          </svg>
        </span>

        {/* setp 2 */}
        <div className="flex flex-col gap-2 items-center">
          <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#07294D]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.84 18.1932C19.84 21.4892 15.32 21.8702 11.921 21.8702L11.6778 21.8699C9.5122 21.8647 4 21.728 4 18.1732C4 14.9444 8.33835 14.5129 11.7115 14.4967L12.1642 14.4964C14.3296 14.5016 19.84 14.6383 19.84 18.1932ZM11.921 15.9962C7.66 15.9962 5.5 16.7282 5.5 18.1732C5.5 19.6312 7.66 20.3702 11.921 20.3702C16.181 20.3702 18.34 19.6382 18.34 18.1932C18.34 16.7352 16.181 15.9962 11.921 15.9962ZM11.921 1.99976C14.849 1.99976 17.23 4.38176 17.23 7.30976C17.23 10.2378 14.849 12.6188 11.921 12.6188H11.889C8.967 12.6098 6.6 10.2268 6.60997 7.30676C6.60997 4.38176 8.992 1.99976 11.921 1.99976ZM11.921 3.42776C9.78 3.42776 8.03798 5.16876 8.03798 7.30976C8.031 9.44376 9.76 11.1838 11.892 11.1918L11.921 11.9058V11.1918C14.061 11.1918 15.802 9.44976 15.802 7.30976C15.802 5.16876 14.061 3.42776 11.921 3.42776Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#777777] text-[14px] font-[300]">
              Setp 2
            </span>
            <span className="text-[16px] text-center font-[400] text-[#07294D]">
              Passport & <br /> Addresses
            </span>
          </div>
        </div>
        <span className="pt-8">
          <svg
            width="87"
            height="3"
            viewBox="0 0 87 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L86 2"
              stroke="#07294D"
              stroke-width="2"
              stroke-dasharray="20 20"
            />
          </svg>
        </span>

        {/* setp 3 */}
        <div className="flex flex-col gap-2 items-center">
          <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#E0EFFF]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8866 14.414L11.9995 14.414L12.2521 14.4149C14.1827 14.4276 18.5946 14.6226 18.5946 17.613C18.5946 20.5837 14.3365 20.7775 12.2822 20.7901L11.5211 20.7901C9.59038 20.7774 5.1776 20.5826 5.1776 17.596C5.1776 14.6215 9.59038 14.4275 11.5211 14.4149L11.7737 14.414C11.8129 14.414 11.8505 14.414 11.8866 14.414ZM11.8866 15.914C9.5106 15.914 6.6776 16.206 6.6776 17.596C6.6776 18.9545 9.34151 19.2722 11.6694 19.2902L11.8866 19.291C14.2626 19.291 17.0946 19 17.0946 17.613C17.0946 16.209 14.2626 15.914 11.8866 15.914ZM19.8402 14.0082C22.2632 14.3712 22.7722 15.5092 22.7722 16.4002C22.7722 16.9442 22.5582 17.9372 21.1282 18.4822C21.0402 18.5152 20.9502 18.5312 20.8612 18.5312C20.5592 18.5312 20.2742 18.3472 20.1602 18.0482C20.0122 17.6612 20.2072 17.2272 20.5942 17.0802C21.2722 16.8222 21.2722 16.5372 21.2722 16.4002C21.2722 15.9622 20.7152 15.6562 19.6172 15.4922C19.2082 15.4302 18.9252 15.0492 18.9862 14.6382C19.0472 14.2282 19.4272 13.9552 19.8402 14.0082ZM4.786 14.6382C4.847 15.0492 4.564 15.4302 4.155 15.4922C3.057 15.6562 2.5 15.9622 2.5 16.4002C2.5 16.5372 2.5 16.8212 3.179 17.0802C3.566 17.2272 3.761 17.6612 3.613 18.0482C3.499 18.3472 3.214 18.5312 2.912 18.5312C2.823 18.5312 2.733 18.5152 2.645 18.4822C1.214 17.9362 1 16.9432 1 16.4002C1 15.5102 1.509 14.3712 3.933 14.0082C4.346 13.9562 4.724 14.2282 4.786 14.6382ZM11.8866 4C14.4066 4 16.4556 6.05 16.4556 8.569C16.4556 11.088 14.4066 13.138 11.8866 13.138H11.8596C10.6396 13.134 9.4966 12.656 8.6406 11.792C7.7826 10.929 7.3136 9.783 7.31856 8.566C7.31856 6.05 9.3676 4 11.8866 4ZM11.8866 5.5C10.1946 5.5 8.81858 6.877 8.81858 8.569C8.8156 9.389 9.1296 10.156 9.7046 10.735C10.2796 11.314 11.0456 11.635 11.8616 11.638L11.8866 12.388V11.638C13.5786 11.638 14.9556 10.262 14.9556 8.569C14.9556 6.877 13.5786 5.5 11.8866 5.5ZM18.0756 4.9795C19.8336 5.2685 21.1106 6.7725 21.1106 8.5555C21.1066 10.3505 19.7656 11.8905 17.9906 12.1395C17.9556 12.1445 17.9206 12.1465 17.8866 12.1465C17.5186 12.1465 17.1976 11.8755 17.1446 11.5005C17.0876 11.0895 17.3726 10.7105 17.7836 10.6535C18.8236 10.5075 19.6086 9.6055 19.6106 8.5535C19.6106 7.5105 18.8626 6.6285 17.8316 6.4595C17.4236 6.3925 17.1466 6.0065 17.2136 5.5975C17.2816 5.1885 17.6646 4.9145 18.0756 4.9795ZM6.5596 5.5975C6.6266 6.0065 6.3496 6.3925 5.9416 6.4595C4.9106 6.6285 4.1626 7.5105 4.1626 8.5555C4.1646 9.6055 4.9496 10.5085 5.9886 10.6535C6.3996 10.7105 6.6846 11.0895 6.6276 11.5005C6.5746 11.8755 6.2536 12.1465 5.8856 12.1465C5.8516 12.1465 5.8166 12.1445 5.7816 12.1395C4.0066 11.8905 2.6666 10.3505 2.6626 8.5575C2.6626 6.7725 3.9396 5.2685 5.6976 4.9795C6.1186 4.9135 6.4916 5.1905 6.5596 5.5975Z"
                fill="#123E6C"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#777777] text-[14px] font-[300]">
              Setp 3
            </span>
            <span className="text-[16px] text-center font-[400] text-[#777777]">
              Family's information <br /> &Emergency
            </span>
          </div>
        </div>
        <span className="pt-8">
          <svg
            width="87"
            height="3"
            viewBox="0 0 87 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L86 2"
              stroke="#07294D"
              stroke-width="2"
              stroke-dasharray="20 20"
            />
          </svg>
        </span>

        {/* setp 4 */}
        <div className="flex flex-col gap-2 items-center">
          <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#E0EFFF]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8866 14.414L11.9995 14.414L12.2521 14.4149C14.1827 14.4276 18.5946 14.6226 18.5946 17.613C18.5946 20.5837 14.3365 20.7775 12.2822 20.7901L11.5211 20.7901C9.59038 20.7774 5.1776 20.5826 5.1776 17.596C5.1776 14.6215 9.59038 14.4275 11.5211 14.4149L11.7737 14.414C11.8129 14.414 11.8505 14.414 11.8866 14.414ZM11.8866 15.914C9.5106 15.914 6.6776 16.206 6.6776 17.596C6.6776 18.9545 9.34151 19.2722 11.6694 19.2902L11.8866 19.291C14.2626 19.291 17.0946 19 17.0946 17.613C17.0946 16.209 14.2626 15.914 11.8866 15.914ZM19.8402 14.0082C22.2632 14.3712 22.7722 15.5092 22.7722 16.4002C22.7722 16.9442 22.5582 17.9372 21.1282 18.4822C21.0402 18.5152 20.9502 18.5312 20.8612 18.5312C20.5592 18.5312 20.2742 18.3472 20.1602 18.0482C20.0122 17.6612 20.2072 17.2272 20.5942 17.0802C21.2722 16.8222 21.2722 16.5372 21.2722 16.4002C21.2722 15.9622 20.7152 15.6562 19.6172 15.4922C19.2082 15.4302 18.9252 15.0492 18.9862 14.6382C19.0472 14.2282 19.4272 13.9552 19.8402 14.0082ZM4.786 14.6382C4.847 15.0492 4.564 15.4302 4.155 15.4922C3.057 15.6562 2.5 15.9622 2.5 16.4002C2.5 16.5372 2.5 16.8212 3.179 17.0802C3.566 17.2272 3.761 17.6612 3.613 18.0482C3.499 18.3472 3.214 18.5312 2.912 18.5312C2.823 18.5312 2.733 18.5152 2.645 18.4822C1.214 17.9362 1 16.9432 1 16.4002C1 15.5102 1.509 14.3712 3.933 14.0082C4.346 13.9562 4.724 14.2282 4.786 14.6382ZM11.8866 4C14.4066 4 16.4556 6.05 16.4556 8.569C16.4556 11.088 14.4066 13.138 11.8866 13.138H11.8596C10.6396 13.134 9.4966 12.656 8.6406 11.792C7.7826 10.929 7.3136 9.783 7.31856 8.566C7.31856 6.05 9.3676 4 11.8866 4ZM11.8866 5.5C10.1946 5.5 8.81858 6.877 8.81858 8.569C8.8156 9.389 9.1296 10.156 9.7046 10.735C10.2796 11.314 11.0456 11.635 11.8616 11.638L11.8866 12.388V11.638C13.5786 11.638 14.9556 10.262 14.9556 8.569C14.9556 6.877 13.5786 5.5 11.8866 5.5ZM18.0756 4.9795C19.8336 5.2685 21.1106 6.7725 21.1106 8.5555C21.1066 10.3505 19.7656 11.8905 17.9906 12.1395C17.9556 12.1445 17.9206 12.1465 17.8866 12.1465C17.5186 12.1465 17.1976 11.8755 17.1446 11.5005C17.0876 11.0895 17.3726 10.7105 17.7836 10.6535C18.8236 10.5075 19.6086 9.6055 19.6106 8.5535C19.6106 7.5105 18.8626 6.6285 17.8316 6.4595C17.4236 6.3925 17.1466 6.0065 17.2136 5.5975C17.2816 5.1885 17.6646 4.9145 18.0756 4.9795ZM6.5596 5.5975C6.6266 6.0065 6.3496 6.3925 5.9416 6.4595C4.9106 6.6285 4.1626 7.5105 4.1626 8.5555C4.1646 9.6055 4.9496 10.5085 5.9886 10.6535C6.3996 10.7105 6.6846 11.0895 6.6276 11.5005C6.5746 11.8755 6.2536 12.1465 5.8856 12.1465C5.8516 12.1465 5.8166 12.1445 5.7816 12.1395C4.0066 11.8905 2.6666 10.3505 2.6626 8.5575C2.6626 6.7725 3.9396 5.2685 5.6976 4.9795C6.1186 4.9135 6.4916 5.1905 6.5596 5.5975Z"
                fill="#123E6C"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#777777] text-[14px] font-[300]">
              Setp 4
            </span>
            <span className="text-[16px] text-center font-[400] text-[#777777]">
              School Information
            </span>
          </div>
        </div>
        <span className="pt-8">
          <svg
            width="87"
            height="3"
            viewBox="0 0 87 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L86 2"
              stroke="#07294D"
              stroke-width="2"
              stroke-dasharray="20 20"
            />
          </svg>
        </span>

        {/* setp 4 */}
        <div className="flex flex-col gap-2 items-center">
          <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#E0EFFF]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8866 14.414L11.9995 14.414L12.2521 14.4149C14.1827 14.4276 18.5946 14.6226 18.5946 17.613C18.5946 20.5837 14.3365 20.7775 12.2822 20.7901L11.5211 20.7901C9.59038 20.7774 5.1776 20.5826 5.1776 17.596C5.1776 14.6215 9.59038 14.4275 11.5211 14.4149L11.7737 14.414C11.8129 14.414 11.8505 14.414 11.8866 14.414ZM11.8866 15.914C9.5106 15.914 6.6776 16.206 6.6776 17.596C6.6776 18.9545 9.34151 19.2722 11.6694 19.2902L11.8866 19.291C14.2626 19.291 17.0946 19 17.0946 17.613C17.0946 16.209 14.2626 15.914 11.8866 15.914ZM19.8402 14.0082C22.2632 14.3712 22.7722 15.5092 22.7722 16.4002C22.7722 16.9442 22.5582 17.9372 21.1282 18.4822C21.0402 18.5152 20.9502 18.5312 20.8612 18.5312C20.5592 18.5312 20.2742 18.3472 20.1602 18.0482C20.0122 17.6612 20.2072 17.2272 20.5942 17.0802C21.2722 16.8222 21.2722 16.5372 21.2722 16.4002C21.2722 15.9622 20.7152 15.6562 19.6172 15.4922C19.2082 15.4302 18.9252 15.0492 18.9862 14.6382C19.0472 14.2282 19.4272 13.9552 19.8402 14.0082ZM4.786 14.6382C4.847 15.0492 4.564 15.4302 4.155 15.4922C3.057 15.6562 2.5 15.9622 2.5 16.4002C2.5 16.5372 2.5 16.8212 3.179 17.0802C3.566 17.2272 3.761 17.6612 3.613 18.0482C3.499 18.3472 3.214 18.5312 2.912 18.5312C2.823 18.5312 2.733 18.5152 2.645 18.4822C1.214 17.9362 1 16.9432 1 16.4002C1 15.5102 1.509 14.3712 3.933 14.0082C4.346 13.9562 4.724 14.2282 4.786 14.6382ZM11.8866 4C14.4066 4 16.4556 6.05 16.4556 8.569C16.4556 11.088 14.4066 13.138 11.8866 13.138H11.8596C10.6396 13.134 9.4966 12.656 8.6406 11.792C7.7826 10.929 7.3136 9.783 7.31856 8.566C7.31856 6.05 9.3676 4 11.8866 4ZM11.8866 5.5C10.1946 5.5 8.81858 6.877 8.81858 8.569C8.8156 9.389 9.1296 10.156 9.7046 10.735C10.2796 11.314 11.0456 11.635 11.8616 11.638L11.8866 12.388V11.638C13.5786 11.638 14.9556 10.262 14.9556 8.569C14.9556 6.877 13.5786 5.5 11.8866 5.5ZM18.0756 4.9795C19.8336 5.2685 21.1106 6.7725 21.1106 8.5555C21.1066 10.3505 19.7656 11.8905 17.9906 12.1395C17.9556 12.1445 17.9206 12.1465 17.8866 12.1465C17.5186 12.1465 17.1976 11.8755 17.1446 11.5005C17.0876 11.0895 17.3726 10.7105 17.7836 10.6535C18.8236 10.5075 19.6086 9.6055 19.6106 8.5535C19.6106 7.5105 18.8626 6.6285 17.8316 6.4595C17.4236 6.3925 17.1466 6.0065 17.2136 5.5975C17.2816 5.1885 17.6646 4.9145 18.0756 4.9795ZM6.5596 5.5975C6.6266 6.0065 6.3496 6.3925 5.9416 6.4595C4.9106 6.6285 4.1626 7.5105 4.1626 8.5555C4.1646 9.6055 4.9496 10.5085 5.9886 10.6535C6.3996 10.7105 6.6846 11.0895 6.6276 11.5005C6.5746 11.8755 6.2536 12.1465 5.8856 12.1465C5.8516 12.1465 5.8166 12.1445 5.7816 12.1395C4.0066 11.8905 2.6666 10.3505 2.6626 8.5575C2.6626 6.7725 3.9396 5.2685 5.6976 4.9795C6.1186 4.9135 6.4916 5.1905 6.5596 5.5975Z"
                fill="#123E6C"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#777777] text-[14px] font-[300]">
              Setp 5
            </span>
            <span className="text-[16px] text-center font-[400] text-[#777777]">
              Documents
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <h1 className="text-black font-[600] text-[18px]">Passport</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <Input
            placeholder="Enter Passport number"
            label="Passport number"
            type="number"
            value={formData.stage2.passportNumber}
            onChange={(e) =>
              handleInputChange("stage2", "passportNumber", e.target.value)
            }
          />
          <Input
            placeholder="issued by"
            label="Passport Issued by"
            type="text"
            value={formData.stage2.passportIssuedBy}
            onChange={(e) =>
              handleInputChange("stage2", "passportIssuedBy", e.target.value)
            }
          />
          <Input
            placeholder="expiry date"
            label="Passport Issued date"
            type="date"
            value={formData.stage2.passportExpiryDate}
            onChange={(e) =>
              handleInputChange("stage2", "passportExpiryDate", e.target.value)
            }
          />
          <Input
            placeholder="Enter date"
            label="Valid To"
            type="date"
            value={formData.stage2.ValidTo}
            onChange={(e) =>
              handleInputChange("stage2", "ValidTo", e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-black font-[600] text-[18px]">Address</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="flex flex-col  gap-1 text-black">
            <span>Country</span>
            <select
              className="border py-3 rounded-md px-4 outline-none text-[#07294D]"
              value={formData.stage2.country}
              onChange={(e) =>
                handleInputChange("stage2", "country", e.target.value)
              }
            >
              <option value="" disabled>
                Select a country
              </option>
              {allCountries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
          <Input
            placeholder="Enter district"
            label="District/City"
            type="text"
            value={formData.stage2.district}
            onChange={(e) =>
              handleInputChange("stage2", "district", e.target.value)
            }
          />
          <Input
            placeholder="Enter Street number"
            label="Street number"
            type="text"
            value={formData.stage2.streetNumber}
            onChange={(e) =>
              handleInputChange("stage2", "streetNumber", e.target.value)
            }
          />
          <Input
            placeholder="Enter Contact number"
            label="Contact number"
            type="number"
            value={formData.stage2.contactNumber}
            onChange={(e) =>
              handleInputChange("stage2", "contactNumber", e.target.value)
            }
          />
          <Input
            placeholder="Enter Email"
            label="Email"
            type="email"
            value={formData.stage2.email}
            onChange={(e) =>
              handleInputChange("stage2", "email", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
