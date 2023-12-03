'use client';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import LinkComponent from '../../components/LinkComponet';
import Navbar from '../../components/Navbar';

const Page = () => {
  const [whichOpen, setWhichOpen] = useState();
  const questions = [
    {
      titel:
        'When is the right time for submitting an application to the Universities?',
    },
    {
      titel: 'What is an application package?',
    },
    {
      titel: 'What are the entry requirements to be accepted into a course?',
    },
    {
      titel:
        'Student has below average grades in high school or college. Will he/she get admission?',
    },
    {
      titel: 'Can one work while studying overseas?',
    },
    {
      titel: 'What are Sandwich and Foundation programs?',
    },
    {
      titel: 'Can students change their major upon reaching the University.',
    },
    {
      titel: 'How can one apply for financial aid?',
    },
    {
      titel: 'What is TA(Teaching Assistantship)?',
    },
    {
      titel: 'What is RA(Research Assistantship)?',
    },
    {
      titel: 'What are tuition-waivers?',
    },
    {
      titel: 'Is it tough to get Visas?',
    },
    {
      titel: 'From where can one get the Visa application form?',
    },
    {
      titel:
        'The Visa application form is available, free of charge, from the Consulate. Alternatively, you could collect the same from your education counsellor',
    },
    {
      titel: 'What question will they ask me in the Visa interview?',
    },
  ];
  return (
    <div className='flex flex-col items-center justify-center  w-full'>
      <LinkComponent />
      <Navbar />
      <div className='flex flex-col gap-10 w-full max-w-7xl px-[20px] md:px-20 lg:px-40 pb-20 '>
        <div className=' gap-2 mx-auto flex flex-col py-4'>
          <h1 className='text-[32px] text-[#123E6C] font-bold'>
            Frequently asked questions(FAQ)
          </h1>
          <span className='text-[20px] text-[#777]'>
            Explore quick answers to your questions here.
          </span>
        </div>

        <div className='flex flex-col md:flex-row gap-20'>
          <div className='flex flex-row md:flex-col gap-2'>
            <div className='flex flex-row gap-2'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.266 13.516C19.4975 13.3369 19.6849 13.1071 19.8138 12.8443C19.9427 12.5815 20.0097 12.2927 20.0097 12C20.0097 11.7073 19.9427 11.4185 19.8138 11.1557C19.6849 10.8929 19.4975 10.6631 19.266 10.484C16.2686 8.16463 12.9215 6.33648 9.35002 5.068L8.69702 4.836C7.44902 4.393 6.13002 5.237 5.96102 6.526C5.48891 10.1601 5.48891 13.8399 5.96102 17.474C6.13102 18.763 7.44902 19.607 8.69702 19.164L9.35002 18.932C12.9215 17.6635 16.2686 15.8354 19.266 13.516Z'
                  fill='black'
                />
              </svg>
              <h1 className='text-[18px]'>General</h1>
            </div>
            <div className='flex flex-row gap-2'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.266 13.516C19.4975 13.3369 19.6849 13.1071 19.8138 12.8443C19.9427 12.5815 20.0097 12.2927 20.0097 12C20.0097 11.7073 19.9427 11.4185 19.8138 11.1557C19.6849 10.8929 19.4975 10.6631 19.266 10.484C16.2686 8.16463 12.9215 6.33648 9.35002 5.068L8.69702 4.836C7.44902 4.393 6.13002 5.237 5.96102 6.526C5.48891 10.1601 5.48891 13.8399 5.96102 17.474C6.13102 18.763 7.44902 19.607 8.69702 19.164L9.35002 18.932C12.9215 17.6635 16.2686 15.8354 19.266 13.516Z'
                  fill='black'
                />
              </svg>
              <h1 className='text-[18px]'>Package</h1>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.266 13.516C19.4975 13.3369 19.6849 13.1071 19.8138 12.8443C19.9427 12.5815 20.0097 12.2927 20.0097 12C20.0097 11.7073 19.9427 11.4185 19.8138 11.1557C19.6849 10.8929 19.4975 10.6631 19.266 10.484C16.2686 8.16463 12.9215 6.33648 9.35002 5.068L8.69702 4.836C7.44902 4.393 6.13002 5.237 5.96102 6.526C5.48891 10.1601 5.48891 13.8399 5.96102 17.474C6.13102 18.763 7.44902 19.607 8.69702 19.164L9.35002 18.932C12.9215 17.6635 16.2686 15.8354 19.266 13.516Z'
                  fill='black'
                />
              </svg>
              <h1 className='text-[18px]'>General</h1>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            {questions.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col gap-2'
                  onClick={() => setWhichOpen(index)}
                >
                  <div className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-60'>
                    <div>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M19 12.998H13V18.998H11V12.998H5V10.998H11V4.998H13V10.998H19V12.998Z'
                          fill='black'
                        />
                      </svg>
                    </div>

                    <h1 className='text-[18px]'>{item.titel}</h1>
                  </div>
                  <div
                    className={`${
                      whichOpen == index ? 'flex' : 'hidden'
                    } px-10 `}
                  >
                    <h1 className='text-green-700'>
                      ANSWER OF QESTION {index + 1}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Page;
