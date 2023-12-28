"use client"
import Footer from '../components/Footer'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from "react";
import "../components/dropdown.css"

import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";


// Import Swiper styles
import "swiper/css";

import Hero from '../components/home/Hero';
import ContactUS from '../components/home/ContactUS';
import StartAssessment from '../components/home/StartAssessment';
import Slider from 'components/Slider';
import OurlBlog from 'components/home/OurlBlog';

export default function Home() {

  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const countries = [
    { name: "USA", imageSrc: '/image/usa.png' },
    { name: "CANADA", imageSrc: '/image/canada.png' },
    { name: "UK", imageSrc:  '/image/uk.png'},
    { name: "POLAND", imageSrc: '/image/up1.png' },
    { name: "POLAND", imageSrc: '/image/up1.png' },
    // Add more countries as needed
  
  ];
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const swiperOptions = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: false, // Disable default navigation
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      // Add more breakpoints as needed
    },
  };
  const services = [
    {
      name: "Sop and Essay Guidance",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.5145 3.33334C31.7545 3.33334 35.2745 6.92168 35.2745 12.2617V27.5883C35.2745 32.975 31.8628 36.4783 26.5828 36.5117L13.7612 36.5167C8.52118 36.5167 4.99951 32.9283 4.99951 27.5883V12.2617C4.99951 6.87334 8.41118 3.37168 13.6912 3.34001L26.5128 3.33334H26.5145ZM26.5145 5.83334L13.6995 5.84001C9.81951 5.86334 7.49951 8.26334 7.49951 12.2617V27.5883C7.49951 31.6133 9.84118 34.0167 13.7595 34.0167L26.5745 34.0117C30.4545 33.9883 32.7745 31.585 32.7745 27.5883V12.2617C32.7745 8.23668 30.4345 5.83334 26.5145 5.83334Z"
            fill="#94C7FE"
          />
          <path
            d="M28.225 27.3383C28.225 26.6483 27.665 26.0883 26.975 26.0883H14.9417C14.2517 26.0883 13.6917 26.6483 13.6917 27.3383C13.6917 28.0283 14.2517 28.5883 14.9417 28.5883H26.975C27.665 28.5883 28.225 28.0283 28.225 27.3383Z"
            fill="#FFA800"
          />
          <path
            d="M28.225 20.3608C28.225 19.6708 27.665 19.1108 26.975 19.1108H14.9417C14.2517 19.1108 13.6917 19.6708 13.6917 20.3608C13.6917 21.0508 14.2517 21.6108 14.9417 21.6108H26.975C27.665 21.6108 28.225 21.0508 28.225 20.3608Z"
            fill="#FFA800"
          />
          <path
            d="M20.7828 13.3995C20.7828 12.7095 20.2228 12.1495 19.5328 12.1495H14.9412C14.2512 12.1495 13.6912 12.7095 13.6912 13.3995C13.6912 14.0895 14.2512 14.6495 14.9412 14.6495H19.5328C20.2228 14.6495 20.7828 14.0895 20.7828 13.3995Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
    {
      name: "Visa Guidance",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0002 2.08334C10.1051 2.08334 2.0835 10.1049 2.0835 20C2.0835 29.8952 10.1051 37.9167 20.0002 37.9167C29.8953 37.9167 37.9168 29.8952 37.9168 20C37.9168 10.1049 29.8953 2.08334 20.0002 2.08334ZM4.5835 20C4.5835 16.1928 5.96356 12.7079 8.25073 10.0183L13.5882 15.3558C12.6416 16.6603 12.0835 18.265 12.0835 20C12.0835 21.735 12.6416 23.3397 13.5882 24.6442L8.25071 29.9817C5.96356 27.2922 4.5835 23.8072 4.5835 20ZM15.3559 13.588L10.0185 8.25058C12.7081 5.96341 16.1929 4.58334 20.0002 4.58334C23.8073 4.58334 27.2923 5.96341 29.9818 8.25058L24.6443 13.588C23.3398 12.6415 21.7352 12.0833 20.0002 12.0833C18.2652 12.0833 16.6605 12.6415 15.3559 13.588ZM10.0185 31.7495C12.7081 34.0367 16.1929 35.4167 20.0002 35.4167C23.8073 35.4167 27.2923 34.0367 29.9818 31.7495L24.6443 26.412C23.3398 27.3585 21.7352 27.9167 20.0002 27.9167C18.2652 27.9167 16.6605 27.3585 15.3559 26.412L10.0185 31.7495ZM26.4122 24.6442L31.7497 29.9817C34.0368 27.2922 35.4168 23.8072 35.4168 20C35.4168 16.1928 34.0368 12.7079 31.7497 10.0183L26.4122 15.3558C27.3587 16.6603 27.9168 18.265 27.9168 20C27.9168 21.735 27.3587 23.3397 26.4122 24.6442ZM14.5835 20C14.5835 17.0085 17.0087 14.5833 20.0002 14.5833C22.9917 14.5833 25.4168 17.0085 25.4168 20C25.4168 22.9915 22.9917 25.4167 20.0002 25.4167C17.0087 25.4167 14.5835 22.9915 14.5835 20Z"
            fill="#94C7FE"
          />
          <path
            d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20ZM14.5268 20C14.5268 23.0227 16.9773 25.4732 20 25.4732C23.0227 25.4732 25.4732 23.0227 25.4732 20C25.4732 16.9773 23.0227 14.5268 20 14.5268C16.9773 14.5268 14.5268 16.9773 14.5268 20Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
    {
      name: "Courses Selection",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.242 2.08334H26.7583C29.0377 2.08331 30.8748 2.08328 32.3198 2.27754C33.82 2.47924 35.083 2.91073 36.0863 3.91393C37.0895 4.91713 37.521 6.18024 37.7227 7.68043C37.9168 9.12538 37.9168 10.9626 37.9168 13.2419V20.0915C37.9168 22.3708 37.9168 24.208 37.7227 25.653C37.521 27.1532 37.0895 28.4162 36.0863 29.4193C35.2563 30.2493 34.245 30.691 33.0603 30.9322C32.4567 31.0552 31.7875 31.1298 31.0505 31.1755C31.0542 31.184 31.058 31.1925 31.0617 31.2012C31.5165 32.2683 31.1283 33.5098 30.0952 34.0953C29.7847 34.2715 29.4505 34.3348 29.217 34.3712C28.9728 34.409 28.6678 34.4388 28.3292 34.472L28.2962 34.4752C28.0782 34.4965 27.9545 34.5088 27.8627 34.522C27.8208 34.528 27.7987 34.5323 27.79 34.5343C27.764 34.5445 27.7463 34.5572 27.735 34.568C27.7265 34.5762 27.7203 34.5843 27.7158 34.5928C27.7138 34.6022 27.711 34.6173 27.7075 34.6398C27.6945 34.7237 27.682 34.8383 27.6597 35.0487L27.656 35.083C27.6217 35.4053 27.5902 35.7017 27.5498 35.9402C27.5112 36.17 27.4415 36.509 27.2478 36.823C26.624 37.8343 25.379 38.1472 24.3545 37.7458C24.0348 37.6205 23.7782 37.4163 23.593 37.2572C23.4033 37.0942 23.1798 36.8798 22.9297 36.64L20.0002 33.8315L17.0708 36.64C16.8205 36.8798 16.597 37.0942 16.4073 37.2572C16.2222 37.4163 15.9656 37.6205 15.6458 37.7458C14.6213 38.1472 13.3763 37.8343 12.7525 36.823C12.5589 36.509 12.4892 36.17 12.4505 35.9402C12.4102 35.7017 12.3787 35.4052 12.3443 35.0828L12.3407 35.0487C12.3183 34.8383 12.3058 34.7237 12.2927 34.6398C12.2893 34.6173 12.2865 34.6022 12.2846 34.5928C12.28 34.5843 12.2737 34.5762 12.2653 34.568C12.2539 34.5572 12.2364 34.5445 12.2104 34.5343C12.2016 34.5323 12.1795 34.528 12.1377 34.522C12.0458 34.5088 11.9221 34.4965 11.7042 34.4752L11.6712 34.472C11.3325 34.4388 11.0274 34.409 10.7834 34.3712C10.5498 34.3348 10.2157 34.2715 9.90513 34.0953C8.87195 33.5098 8.48381 32.2683 8.93868 31.2012C8.94236 31.1925 8.94611 31.184 8.94991 31.1753C8.28546 31.1342 7.67873 31.0697 7.12741 30.9685C5.8641 30.7363 4.78896 30.2943 3.91408 29.4195C2.91088 28.4162 2.4794 27.1532 2.2777 25.653C2.08343 24.208 2.08346 22.3708 2.0835 20.0915V13.2419C2.08346 10.9626 2.08343 9.12538 2.2777 7.68043C2.4794 6.18024 2.91088 4.91713 3.91408 3.91393C4.91728 2.91073 6.1804 2.47924 7.68058 2.27754C9.12553 2.08328 10.9627 2.08331 13.242 2.08334ZM11.2217 28.7437L12.5813 27.4402L13.7633 26.2582C13.9737 22.9968 16.6857 20.4167 20.0002 20.4167C23.3147 20.4167 26.0267 22.9968 26.237 26.2582L27.419 27.4402L28.8538 28.8157L28.853 28.743C30.4975 28.7255 31.6697 28.664 32.5615 28.4825C33.419 28.3078 33.9318 28.0382 34.3185 27.6517C34.7798 27.1903 35.0805 26.5428 35.245 25.3198C35.4142 24.0608 35.4168 22.3923 35.4168 20V13.3333C35.4168 10.941 35.4142 9.27246 35.245 8.01354C35.0805 6.79059 34.7798 6.14296 34.3185 5.68169C33.8572 5.22043 33.2097 4.91968 31.9867 4.75526C30.7277 4.58599 29.0592 4.58334 26.6668 4.58334H13.3335C10.9411 4.58334 9.27261 4.58599 8.0137 4.75526C6.79075 4.91968 6.14311 5.22043 5.68185 5.68169C5.22058 6.14296 4.91983 6.79059 4.75541 8.01354C4.58615 9.27246 4.5835 10.941 4.5835 13.3333V20C4.5835 22.3923 4.58615 24.0608 4.75541 25.3198C4.91983 26.5428 5.22058 27.1903 5.68185 27.6517C6.0876 28.0573 6.6344 28.336 7.57908 28.5095C8.47638 28.6743 9.63453 28.728 11.2217 28.7437ZM25.6933 29.2492C25.0158 30.7407 23.7692 31.9188 22.2308 32.5068L24.6367 34.8133C24.85 35.0178 25.0017 35.1628 25.12 35.2703C25.1352 35.144 25.1522 34.9865 25.1737 34.7837C25.1767 34.7562 25.1795 34.728 25.1825 34.6995C25.2143 34.3933 25.252 34.0308 25.3783 33.7035C25.6583 32.9785 26.2417 32.4308 26.961 32.1757C27.2848 32.0607 27.6433 32.0263 27.966 31.9955C27.995 31.9927 28.024 31.9898 28.0525 31.987C28.2315 31.9695 28.378 31.9552 28.5002 31.942C28.4052 31.849 28.2885 31.7372 28.143 31.5977L25.6933 29.2492ZM20.0503 30.4163L20.0002 30.3682L19.95 30.4163C17.902 30.3895 16.2502 28.721 16.2502 26.6667C16.2502 24.5957 17.9292 22.9167 20.0002 22.9167C22.0712 22.9167 23.7502 24.5957 23.7502 26.6667C23.7502 28.721 22.0983 30.3895 20.0503 30.4163ZM17.7695 32.5068L15.3636 34.8133C15.1503 35.0178 14.9987 35.1628 14.8804 35.2703C14.8652 35.144 14.8482 34.9865 14.8266 34.7837C14.8237 34.7562 14.8208 34.728 14.8178 34.6995C14.786 34.3933 14.7484 34.0308 14.622 33.7035C14.342 32.9785 13.7586 32.4308 13.0394 32.1757C12.7155 32.0607 12.357 32.0263 12.0344 31.9955C12.0052 31.9927 11.9764 31.9898 11.9479 31.987C11.7688 31.9695 11.6224 31.9552 11.5002 31.942C11.5952 31.849 11.7117 31.7372 11.8573 31.5977L14.3069 29.2492C14.9846 30.7407 16.2311 31.9188 17.7695 32.5068Z"
            fill="#94C7FE"
          />
          <path
            d="M14.6337 8.66667C13.9433 8.66667 13.3837 9.22632 13.3837 9.91667C13.3837 10.607 13.9433 11.1667 14.6337 11.1667H24.6337C25.324 11.1667 25.8837 10.607 25.8837 9.91667C25.8837 9.22632 25.324 8.66667 24.6337 8.66667H14.6337Z"
            fill="#FFA800"
          />
          <path
            d="M11.3003 14.5C10.61 14.5 10.0503 15.0597 10.0503 15.75C10.0503 16.4404 10.61 17 11.3003 17H27.967C28.6573 17 29.217 16.4404 29.217 15.75C29.217 15.0597 28.6573 14.5 27.967 14.5H11.3003Z"
            fill="#FFA800"
          />
          <path
            d="M26 26.5C26 30.0899 23.0899 33 19.5 33C15.9101 33 13 30.0899 13 26.5C13 22.9101 15.9101 20 19.5 20C23.0899 20 26 22.9101 26 26.5ZM15.865 26.5C15.865 28.5075 17.4925 30.135 19.5 30.135C21.5075 30.135 23.135 28.5075 23.135 26.5C23.135 24.4925 21.5075 22.865 19.5 22.865C17.4925 22.865 15.865 24.4925 15.865 26.5Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
    {
      name: "Career Guidance",
      svg: (
        <svg
          width="50"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.8748 12.7604C15.774 12.7604 13.2603 15.2742 13.2603 18.375C13.2603 21.4759 15.774 23.9896 18.8748 23.9896C21.9757 23.9896 24.4894 21.4759 24.4894 18.375C24.4894 15.2742 21.9757 12.7604 18.8748 12.7604ZM16.3228 18.375C16.3228 16.9656 17.4654 15.8229 18.8748 15.8229C20.2843 15.8229 21.4269 16.9656 21.4269 18.375C21.4269 19.7845 20.2843 20.9271 18.8748 20.9271C17.4654 20.9271 16.3228 19.7845 16.3228 18.375Z"
            fill="#FFA800"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.8752 25.0104C16.4339 25.0104 14.148 25.5019 12.4157 26.3681C10.7751 27.1885 9.17731 28.605 9.17731 30.625L9.17704 30.7526C9.17392 31.7945 9.16865 33.5491 10.8315 34.7529C11.6032 35.3113 12.6214 35.6675 13.8827 35.8946C15.1557 36.1236 16.787 36.2396 18.8752 36.2396C20.9634 36.2396 22.5947 36.1236 23.8677 35.8946C25.1291 35.6675 26.1472 35.3113 26.919 34.7529C28.5817 33.5491 28.5766 31.7945 28.5733 30.7526L28.5731 30.625C28.5731 28.605 26.9753 27.1885 25.3346 26.3681C23.6025 25.5019 21.3166 25.0104 18.8752 25.0104ZM12.2398 30.625C12.2398 30.3898 12.4702 29.7649 13.7853 29.1072C15.0088 28.4956 16.8062 28.0729 18.8752 28.0729C20.9442 28.0729 22.7415 28.4956 23.9651 29.1072C25.2801 29.7649 25.5106 30.3898 25.5106 30.625C25.5106 31.8592 25.432 32.0485 25.1231 32.272C24.874 32.4523 24.361 32.694 23.3254 32.8804C22.3015 33.0646 20.8704 33.1771 18.8752 33.1771C16.8801 33.1771 15.4489 33.0646 14.425 32.8804C13.3895 32.694 12.8764 32.4523 12.6273 32.272C12.3184 32.0485 12.2398 31.8592 12.2398 30.625Z"
            fill="#FFA800"
          />
          <path
            d="M39.2917 26.0312C40.1373 26.0312 40.8229 25.3457 40.8229 24.5C40.8229 23.6543 40.1373 22.9688 39.2917 22.9688H31.125C30.2793 22.9688 29.5938 23.6543 29.5938 24.5C29.5938 25.3457 30.2793 26.0312 31.125 26.0312H39.2917Z"
            fill="#FFA800"
          />
          <path
            d="M40.8231 18.375C40.8231 19.2207 40.1375 19.9062 39.2918 19.9062H29.0835C28.2378 19.9062 27.5522 19.2207 27.5522 18.375C27.5522 17.5293 28.2378 16.8438 29.0835 16.8438H39.2918C40.1375 16.8438 40.8231 17.5293 40.8231 18.375Z"
            fill="#FFA800"
          />
          <path
            d="M39.2915 32.1562C40.1372 32.1562 40.8228 31.4707 40.8228 30.625C40.8228 29.7793 40.1372 29.0938 39.2915 29.0938H33.1665C32.3208 29.0938 31.6353 29.7793 31.6353 30.625C31.6353 31.4707 32.3208 32.1562 33.1665 32.1562H39.2915Z"
            fill="#FFA800"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8016 6.63544H29.1986C32.9508 6.6354 35.9227 6.63538 38.2485 6.9481C40.6422 7.26991 42.5797 7.94798 44.1077 9.47589C45.6355 11.0038 46.3135 12.9412 46.6355 15.3349C46.9481 17.6608 46.9481 20.6327 46.9481 24.3847V24.6152C46.9481 28.3673 46.9481 31.3392 46.6355 33.6651C46.3135 36.0587 45.6355 37.9963 44.1077 39.5242C42.5797 41.052 40.6422 41.7301 38.2485 42.052C35.9227 42.3646 32.9508 42.3646 29.1988 42.3646H20.8017C17.0496 42.3646 14.0776 42.3646 11.7517 42.052C9.35806 41.7301 7.42062 41.052 5.89269 39.5242C4.36479 37.9963 3.68672 36.0587 3.36491 33.6651C3.05219 31.3392 3.05221 28.3673 3.05225 24.6152V24.3849C3.05221 20.6327 3.05219 17.6608 3.36491 15.3349C3.68672 12.9412 4.36479 11.0038 5.89269 9.47589C7.42062 7.94798 9.35806 7.26991 11.7517 6.9481C14.0776 6.63538 17.0496 6.6354 20.8016 6.63544ZM12.1598 9.98328C10.1057 10.2595 8.92226 10.7773 8.05821 11.6414C7.19416 12.5055 6.67627 13.6889 6.40009 15.743C6.11799 17.8411 6.11475 20.607 6.11475 24.5C6.11475 28.3931 6.11799 31.1589 6.40009 33.2571C6.67627 35.3111 7.19416 36.4946 8.05821 37.3586C8.92226 38.2227 10.1057 38.7407 12.1598 39.0167C14.258 39.2988 17.0237 39.3021 20.9168 39.3021H29.0835C32.9765 39.3021 35.7424 39.2988 37.8406 39.0167C39.8945 38.7407 41.0781 38.2227 41.9421 37.3586C42.8061 36.4946 43.3241 35.3111 43.6002 33.2571C43.8823 31.1589 43.8856 28.3931 43.8856 24.5C43.8856 20.607 43.8823 17.8411 43.6002 15.743C43.3241 13.6889 42.8061 12.5055 41.9421 11.6414C41.0781 10.7773 39.8945 10.2595 37.8406 9.98328C35.7424 9.70118 32.9765 9.69794 29.0835 9.69794H20.9168C17.0237 9.69794 14.258 9.70118 12.1598 9.98328Z"
            fill="#94C7FE"
          />
        </svg>
      ),
    },
    {
      name: "Admissions",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.4165 16.9055C5.4165 8.74043 11.9249 2.08331 19.9998 2.08331C28.0748 2.08331 34.5832 8.74043 34.5832 16.9055C34.5832 20.8473 33.4598 25.0798 31.4738 28.7365C29.4905 32.3885 26.5925 35.562 22.9673 37.2565C21.0842 38.1366 18.9155 38.1366 17.0323 37.2565C13.4071 35.562 10.5092 32.3885 8.52577 28.7365C6.53989 25.0798 5.4165 20.8473 5.4165 16.9055ZM19.9998 4.58331C13.3472 4.58331 7.9165 10.0791 7.9165 16.9055C7.9165 20.4006 8.92089 24.2256 10.7227 27.5433C12.5269 30.8653 15.0765 33.5826 18.0908 34.9916C19.3033 35.5583 20.6963 35.5583 21.9088 34.9916C24.9232 33.5826 27.4728 30.8653 29.277 27.5433C31.0788 24.2256 32.0832 20.4006 32.0832 16.9055C32.0832 10.0791 26.6525 4.58331 19.9998 4.58331Z"
            fill="#94C7FE"
          />
          <path
            d="M21.8057 11.303C20.6997 10.899 19.4668 10.899 18.361 11.303L14.4579 12.7289C13.5561 13.0583 13 13.8624 13 14.75C13 15.6376 13.5561 16.4417 14.4579 16.7711L14.6667 16.8474V20.917C14.6667 22.0387 15.3233 23.1312 16.4678 23.5535C17.343 23.8765 18.785 24.3333 20.0833 24.3333C21.3817 24.3333 22.8237 23.8765 23.6988 23.5535C24.8433 23.1312 25.5 22.0387 25.5 20.917V16.8474L25.7088 16.7711C26.6105 16.4417 27.1667 15.6376 27.1667 14.75C27.1667 13.8624 26.6105 13.0583 25.7088 12.7289L21.8057 11.303Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
    {
      name: "Appointment booking",
      svg: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.0553 3.70557L30.1772 3.73826C32.1928 4.27831 33.79 4.70626 35.0462 5.16008C36.3314 5.6243 37.3793 6.15533 38.2426 6.96388C39.4996 8.14127 40.3794 9.66497 40.7704 11.3423C41.039 12.4942 40.975 13.6673 40.7345 15.0123C40.4993 16.3272 40.0714 17.9245 39.5313 19.9401L38.5495 23.6036C38.0096 25.619 37.5815 27.2162 37.1278 28.4726C36.6636 29.7576 36.1325 30.8055 35.324 31.6688C34.184 32.8858 32.7195 33.7493 31.1051 34.158C30.6336 35.2391 29.9448 36.2183 29.076 37.0321C28.2126 37.8406 27.1647 38.3715 25.8795 38.8359C24.6233 39.2896 23.0261 39.7175 21.0108 40.2576L20.8888 40.2903C18.8733 40.8304 17.276 41.2583 15.9611 41.4935C14.6161 41.734 13.443 41.798 12.2911 41.5294C10.6138 41.1384 9.09009 40.2586 7.91271 39.0016C7.10415 38.1383 6.57311 37.0904 6.10891 35.8054C5.65508 34.549 5.22711 32.9518 4.68707 30.9362L3.70541 27.2727C3.16534 25.2571 2.73737 23.6599 2.50225 22.3451C2.26173 21.0001 2.19766 19.827 2.46624 18.6751C2.85734 16.9978 3.73707 15.4741 4.99415 14.2967C5.85743 13.4881 6.90534 12.9571 8.1904 12.4929C9.44669 12.039 11.0439 11.6111 13.0594 11.071L13.1204 11.0547C13.6052 10.9248 14.064 10.8021 14.4983 10.6873C15.2162 8.12226 15.8481 6.309 17.0794 4.99433C18.2567 3.73725 19.7804 2.85753 21.4577 2.46642C22.6098 2.19784 23.7828 2.26191 25.1277 2.50243C26.4426 2.73754 28.0398 3.16553 30.0553 3.70557ZM13.6674 13.7552C11.6638 14.2922 10.2281 14.6807 9.1247 15.0793C8.00743 15.4829 7.35141 15.8566 6.87401 16.3038C6.0139 17.1094 5.412 18.1519 5.14441 19.2995C4.99587 19.9366 5.0002 20.6916 5.20929 21.8611C5.42143 23.0472 5.81801 24.5319 6.37804 26.6219L7.32705 30.1637C7.88706 32.2537 8.2859 33.7376 8.69532 34.8709C9.09893 35.9884 9.47269 36.6443 9.91982 37.1217C10.7254 37.9817 11.768 38.5836 12.9156 38.8513C13.5526 38.9998 14.3076 38.9956 15.477 38.7864C16.6633 38.5743 18.1479 38.1777 20.2378 37.6176C22.3278 37.0576 23.8119 36.6588 24.9453 36.2494C26.0625 35.8457 26.7187 35.4721 27.1961 35.0249C27.4483 34.7886 27.6782 34.5321 27.8841 34.2586C27.5559 34.2122 27.2181 34.1532 26.8686 34.0837C25.637 33.8388 24.1575 33.4424 22.3313 32.9531L22.2261 32.9249C20.2105 32.3848 18.6133 31.9569 17.3571 31.5031C16.072 31.0387 15.0241 30.5078 14.1608 29.6993C12.9037 28.5219 12.024 26.9981 11.6329 25.3207C11.3643 24.1689 11.4284 22.9959 11.6689 21.6508C11.904 20.3359 12.332 18.7387 12.8721 16.7232L13.6674 13.7552ZM24.6437 5.20947C23.4742 5.00038 22.7192 4.99606 22.0823 5.14459C20.9347 5.41219 19.8921 6.01409 19.0865 6.8742C18.287 7.72785 17.7949 9.04664 16.9393 12.1793C16.8002 12.6884 16.6532 13.2371 16.4937 13.8323L15.5447 17.374C14.9847 19.464 14.5881 20.9486 14.376 22.135C14.1669 23.3043 14.1625 24.0592 14.3111 24.6963C14.5787 25.844 15.1806 26.8866 16.0407 27.6922C16.5181 28.1393 17.1741 28.5129 18.2914 28.9166C19.4247 29.326 20.9088 29.725 22.9988 30.2849C24.8787 30.7887 26.2721 31.1612 27.4049 31.3865C28.5329 31.6107 29.2983 31.6659 29.9257 31.5884C30.0621 31.5717 30.1932 31.5484 30.3212 31.5185C31.4688 31.2508 32.5113 30.649 33.3168 29.7889C33.764 29.3115 34.1378 28.6556 34.5413 27.5382C34.9509 26.4048 35.3496 24.9209 35.9097 22.8309L36.8586 19.2891C37.4187 17.1991 37.8153 15.7145 38.0274 14.5282C38.2366 13.3588 38.2408 12.6038 38.0923 11.9668C37.8246 10.8191 37.2227 9.77658 36.3627 8.97102C35.8853 8.52387 35.2292 8.1501 34.1119 7.7465C32.9786 7.33708 31.4945 6.93823 29.4045 6.37822C27.3145 5.8182 25.83 5.42161 24.6437 5.20947Z"
            fill="#94C7FE"
          />
          <path
            d="M23.1556 16.0472C22.4221 15.8506 21.668 16.2859 21.4715 17.0195C21.275 17.753 21.7102 18.5069 22.4437 18.7034L31.2982 21.0759C32.0317 21.2725 32.7855 20.8372 32.9821 20.1037C33.1786 19.3702 32.7434 18.6162 32.0099 18.4196L23.1556 16.0472Z"
            fill="#FFA800"
          />
          <path
            d="M21.7313 21.3597C20.9978 21.163 20.2439 21.5984 20.0472 22.332C19.8506 23.0655 20.2861 23.8193 21.0196 24.0159L26.3322 25.4395C27.0657 25.636 27.8196 25.2008 28.0161 24.4672C28.2127 23.7337 27.7774 22.9797 27.0439 22.7831L21.7313 21.3597Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
  ];
  return (
     <div className="flex flex-col items-center justify-center  w-full overflow-hidden  ">
      <Hero />

      {/* services offer */}
      <div  className="flex flex-col gap-5 pt-[83px] items-center bg-white">
        <h1 data-aos="fade-down" className="max-w-[377px] text-[#07294D] font-extrabold text-[32px] text-center leading-[30px]">
          Our Services We Offer toThe Students
        </h1>
        <div data-aos="fade-down" className="grid grid-cols-2 md:grid-cols-3 gap-x-[40px] md:gap-x-[120px] gap-y-6">
          {services.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 items-center">
                {item.svg}
                <span className="text-[18px] text-black  max-w-[160px] text-center leading-[20px]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* apply and make apo */}
      <div className=" flex  justify-center items-center py-20 w-full px-2 md:px-20 bg-white">
        <div data-aos="fade-down"  className="flex max-w-7xl w-full flex-col md:flex-row md:justify-between gap-10 bg-[#07294D] rounded-[24px] py-12 px-3 md:p-20">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="text-[#FFA800] text-[24px] font-normal text-center md:text-start leading-6">
              Apply for january intake 2024
            </h1>
            <p className="text-white max-w-[350px] text-center md:text-start font-extralight">
              Admissions are opened for January, February and March Intake 2024
            </p>
            <p
          
              onClick={openModal}
              className="py-[12px] px-[24px] bg-[#FFA800] hover:scale-110  flex justify-center text-black font-[500] rounded-full"
            >
              Start Assesssment
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="text-[#FFA800] text-[24px] font-normal text-center md:text-start">
              Make Appoitment
            </h1>
            <p className="text-white max-w-[350px] text-center md:text-start font-extralight">
              Make Appointment Our Team will back to you soon
            </p>
            <a
              href="#contactus"
              className="py-[12px] px-[24px] bg-[#FFA800] hover:scale-110 flex justify-center text-black font-[500] rounded-full"
            >
              Book Now
            </a>
          </div>
        </div>
        {isModalOpen && (
        <div className="EnquiryForm zoomIn w-full h-full absolute">
          <StartAssessment onClose={closeModal} />
        </div>
      )}
      </div>

      {/* abou us  */}

      <div className="max-w-7xl flex flex-col gap-10 md:flex-row md:justify-between py-14 bg-gray-100  w-full">
        <div data-aos="fade-right"  className="w-full md:w-1/2">
          <Image
            src={`/image/aboutus.svg`}
            width={100}
            height={100}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div data-aos="fade-right"  className="w-full flex flex-col items-center md:items-start gap-4 md:gap-6 md:w-1/2 overflow-hidden">
          <h1 className=" border-l-4 border-[#FFA800] text-[#FFA800] px-4 text-[18px] font-bold">
            About us
          </h1>
          <span className="text-[#123E6C] text-[24px] md:text-[32px] font-bold text-center md:text-start leading-[30px]">
            Welcome to BrightForth
          </span>
          <p className="text-[#2F2E2E] text-center md:text-start font-light leading-4 max-w-[495px]">
            We are a rapidly growing foreign education consultancy in Rwanda
            that assists students in searching and applying to overseas
            universities through our extensive network since 2021. Our core
            activity lies in assisting students to make the right choice about
            pursuing education in overseas educational institutions.
          </p>
          <a
            href="/aboutus"
            className="py-[10px] px-[48px] bg-[#FFA800] rounded-lg text-[white]"
          >
            About us
          </a>
        </div>
      </div>

      {/* why choose us */}

      <div  className="max-w-7xl relative bg-gray-100 flex flex-col py-6 w-full h-full items-center gap-6 px-[20px] sm:px-20 ">
        <h1 data-aos="fade-left" className='text-[32px] font-bold text-[#FFA800]'>Why choose us</h1>
        <div data-aos="fade-left" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10'>
          <div className='flex flex-row gap-4'>
            <Image src={`/image/contract.svg`} width={200} height={100} alt='' className='w-20 h-20' />
            <div className='flex flex-col gap-2'>
              <span className='text-[24px] text-[#07294D]'>Success rate</span>
              <span className='text-black'>Our Team works to meet client requirement and make sure success of application process</span>
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <Image src={`/image/answer.svg`} width={200} height={100} alt='' className='w-20 h-20' />
            <div className='flex flex-col gap-2'>
              <span className='text-[24px] text-[#07294D]'>Free Assistance</span>
              <span className='text-black'>Get full free guidance for your study preference with Our team</span>
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <Image src={`/image/book.svg`} width={200} height={100} alt='' className='w-20 h-20' />
            <div className='flex flex-col gap-2'>
              <span className='text-[24px] text-[#07294D]'>Free Assistance</span>
              <span className='text-black'>Get full free guidance for your study preference with Our team</span>
            </div>
          </div>
        </div>
          <div className='flex justify-center pt-20'>
          <iframe className='rounded-[20px] w-[300px] sm:w-[400px] md:w-[500px]'  width="560" height="315" src="https://www.youtube.com/embed/FfSllGGvqC4?si=z5c_EZv8kc66rcFP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
       
      </div>

      {/* up comming events */}
    
       <OurlBlog/>
      {/*top destination  */}

      <div  className=" bg-gray-100 max-w-7xl flex flex-col md:flex-row gap-4 w-full items-center py-40 px-[10px] md:px-20">
        <div data-aos="zoom-in"  className="flex flex-col gap-4  ">
          <h1 className="text-[32px] text-[#123E6C] font-[700] text-center md:text-start leading-8 ">
            OUR TOP DESTINATIONS
          </h1>
          <p className="text-center md:text-start text-[#707070] text-[18px] font-[300]  leading-4 ">
            Aave kusama kadena binance stacks telcoin bitcoin.{" "}
          </p>
          <a
            href="#"
            className="py-[16px] mx-auto md:mx-0 px-[31px] bg-[#FFA800] rounded-lg w-[200px] flex justify-center items-center"
          >
            Discover more
          </a>
        </div>
        <div data-aos="zoom-in"  className="w-full relative items-center">
          <Swiper ref={swiperRef} {...swiperOptions}>
            {countries.map((country, index) => (
              <SwiperSlide  key={index} className="w-[300px] h-[300px] py-4">
                <div className="flex flex-col items-center  w-[300px] h-[350px]">
                  <Image
                    src={country.imageSrc}
                    width={400}
                    height={0}
                    alt={`Flag of ${country.name}`}
                    className="w-[250px] h-full object-cover rounded-md"
                  />
                  <p className="mt-2 text-lg font-semibold text-black">{country.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* what you say about us */}
      <Slider/>

      {/* our special offers */}

      <div className="   bg-gray-200 w-full justify-center  flex">
        <div  className="flex flex-col py-[81px] px-[10px]  items-center w-full max-w-7xl">
          <div data-aos="fade-right" className="flex flex-col gap-4">
            <h1 className="text-3xl text-center text-[#FFA800] font-[700]">
              Our special offers
            </h1>
            <p className="text-[16px] leading-4 text-center text-[#3C3B3B] font-[300] max-w-[500px]">
            Take advantage of our specially designed offerings that are exclusively for you to unlock the doors to academic success. It gives us great pleasure to offer special, time-limited options that mix quality and affordability from our educational consultant. With these alluring incentives created to enhance your educational journey, find a route to academic success
            </p>
          </div>

          <div data-aos="fade-left" className="flex flex-col md:flex-row gap-4 py-10">
            <div className="flex flex-col bg-white rounded-md  items-center md:items-start py-6 px-2 md:px-6 ">
              <span className="text-[#123E6C] text-[14px] font-[300]">
                14 jan 2023
              </span>
              <h1 className="text-[#123E6C] font-[600] text-[20px]">
                Study in poland
              </h1>
              <p className="text-[#707070] text-[14px] text-center md:text-start font-[300] leading-4 mt-2 max-w-[375px]">
              Student Exclusive Deals Unlock Your Academic Journey with Special Offers!
              </p>
              <a
                href="#"
                className="hover:scale-110 transition-all bg-[#123E6C] px-[30px] py-[8px] rounded-lg mt-4 text-white text-[14px] font-[300]"
              >
                Learn more
              </a>
            </div>
            <div className="flex flex-col bg-white rounded-md  items-center md:items-start py-6 px-2 md:px-6 ">
              <span className="text-[#123E6C] text-[14px] font-[300]">
                14 jan 2023
              </span>
              <h1 className="text-[#123E6C] font-[600] text-[20px]">
                Study in usa
              </h1>
              <p className="text-[#707070] text-[14px] text-center md:text-start font-[300] leading-4 mt-2 max-w-[375px]">
              .Student-only discounts Take Advantage of Special Offers to Advance Your Academic Career!
              </p>
              <a
                href="#"
                className="hover:scale-110 transition-all bg-[#123E6C] px-[30px] py-[8px] rounded-lg mt-4 text-white text-[14px] font-[300]"
              >
                Learn more
              </a>
            </div>
          </div>
          <div >
            <a 
              href="/special"
              className=" hover:scale-110 transition-all py-[10px] w-[150px] text-white font-[300] md:py-[10px] md:px-[31px] text-[14px] bg-[#FFA800] rounded-lg md:w-[160px] flex justify-center items-center"
            >
              Discover more
            </a>
          </div>
        </div>
      </div>

      {/* Reach out to us */}
      <ContactUS />
      {/* home footer */}
     

      <Footer />
    </div> 
  )
}
