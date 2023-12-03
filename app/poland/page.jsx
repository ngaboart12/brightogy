import React from 'react';
import Image from 'next/image';
import LinkComponent from '../../components/LinkComponet';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const StudyInPoland = () => {
  return (
    <div className='flex flex-col items-center  w-full'>
      <LinkComponent />
      <Navbar />

      {/* hero */}
      <div className='max-w-7xl px-4 flex flex-col gap-8 w-full items-center py-5'>
        <h1 className='text-[#123E6C] text-[32px] font-bold'>Study Poland</h1>
        <div className='flex flex-col md:flex-row gap-4 gap-y-20 w-full '>
          <div className='w-full md:w-1/2 flex flex-col items-center'>
            <div className='relative w-[full] md:w-[60%] mr-10'>
              <Image
                width={200}
                height={0}
                src={`/image/poland1.png`}
                className=' w-[300px] h-[300px] md:w-[408px] md:h-[358px]  object-cover  rounded-lg'
                alt='dd'
              />
              <Image
                width={200}
                height={0}
                src={`/image/poland2.png`}
                className='w-[200px] h-[200px] md:w-[255px] md:h-[255px] absolute right-[-70px] bottom-[-50px]'
                alt='dd'
              />
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full md:w-1/2 text-center md:text-start'>
            <p className='text-[16px] text-[#4D4D4D] font-medium leading-6 max-w-[600px]'>
              Poland is a European nation that provides affordable and
              high-quality higher education. And this country has a remarkably
              long academic tradition with roots in the Middle Ages and a
              thousand years of cultural history. International students are
              always warmly welcomed at Polish universities. Additionally, the
              Polish cities provide appropriate conditions for worldwide
              learners to study in Poland.
            </p>

            <h1 className='text-[#07294D] text-[18px] font-bold'>
              Why Study in Poland?
            </h1>
            <p className='text-[16px] text-[#4D4D4D] font-medium  leading-6 max-w-[600px]'>
              Students are interested in studying in Poland for a variety of
              reasons. One significant factor is that, unlike other European
              nations, Poland offers public and private schools that provide
              education at the third level in nearly every major city.
              Institutions and schools consistently increase the range of
              courses they provide to meet consumer demand. As a result, you can
              choose your desired course from the numerous options.
              Additionally, the European Union and other countries worldwide
              recognize the degrees awarded by Polish universities. You can
              obtain a solid foundational education in Poland that will prepare
              you for employment in the EU and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* benefit of studying in poland */}
      <div className='w-full py-20 items-center max-w-7xl'>
        <div class='w-full px-[20px]  md:px-[89px]  pt-[58px] py-[59px] bg-sky-950 flex-col justify-center items-center gap-[51px] inline-flex'>
          <div class='max-w-[567px] text-amber-500 text-[32px] font-bold '>
            Benefits of Studying in Poland
          </div>

          <div class='max-w-[799px] text-center md:text-start text-white text-lg font-[300] '>
            International students opt to study in Poland for a variety of
            reasons. Some of the world’s oldest, best higher education
            institutions are located in Poland. The following perks are
            available to international students who look forward to enrolling in
            various programmes at one of the Polish universities.
          </div>

          <div class='self-stretch justify-start items-start gap-[83px] flex flex-col md:flex-row'>
            <div class='flex-col flex justify-start items-start gap-6'>
              <div class=' text-center md:text-start text-white text-lg font-[300] '>
                Most students from salaried class families would benefit from
                low tuition fees and living expenses.
              </div>
              <div class=' text-center md:text-start text-white text-lg font-[300] '>
                Simple & straightforward visa application processes.
              </div>
              <div class=' text-center md:text-start text-white text-lg font-[300] '>
                Other European nations like Germany, Denmark etc., are easily
                accessible because Poland belongs to the Schengen group of
                countries within the European Union.
              </div>
            </div>
            <div class='flex-col justify-start  gap-[34px] inline-flex'>
              <div class=' text-white text-center md:text-start text-lg font-[300] '>
                Opportunities for internships and transfers to other European
                universities without additional cost through the Erasmus+
                programme.
              </div>
              <div class=' text-white text-center md:text-start text-lg font-[300] '>
                Low Crime Rate Worldwide.
              </div>
              <div class=' text-white text-center md:text-start text-lg font-[300] '>
                Every significant city in Poland has a university.
              </div>
              <div class='max-w-[526px] text-white text-center md:text-start text-lg font-[300] '>
                Scholarships options for non-EU students!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* education syatem in poland */}
      <div class='max-w-7xl px-[10px] md:px-20 w-full  flex-col justify-start items-center gap-[42px] inline-flex'>
        <div class=' text-center text-sky-950 text-[32px] font-bold '>
          Education System in Poland
        </div>
        <div class='justify-start items-start gap-[60px] inline-block md:inline-flex'>
          <div class='w-full md:w-1/2  text-zinc-600 text-lg font-normal text-center md:text-start '>
            Most of Poland’s tertiary-level programs are formed of two cycles: a
            three-year bachelor’s degree and a two-year master’s degree. All
            universities follow the Bologna model, which makes the
            qualifications from other member countries equal and acceptable. At
            the same time, Polish institutions offer doctoral programs that can
            be completed in generally three years.
          </div>
          <div class='w-full md:w-1/2 flex-col justify-start items-start gap-[25px] inline-flex t'>
            <div class='  text-zinc-600 text-lg font-normal text-center md:text-start mt-4 md:mt-0'>
              Many Polish universities provide two- to three-year diploma and
              vocational programs in addition to these courses.
            </div>
            <div class='  text-zinc-600 text-lg font-normal text-center md:text-start '>
              The major Polish institutions overseeing quality assurance in
              higher education periodically monitor and assess the quality of
              education at the higher education institutions in Poland. Poland’s
              Quality Assurance Committee members include the General Council
              for Science and Higher Education, the Polish Accreditation
              Committee, and the Conference of Rectors of Academic Schools.
            </div>
          </div>
        </div>
      </div>

      {/* life style in poland */}
      <div class='max-w-7xl w-full px-[10px] md:px-20    py-[113px] justify-start items-center inline-flex'>
        <div class='self-stretch justify-start items-center gap-[58px] inline-block lg:inline-flex'>
          <div class='flex-col gap-6 inline-flex px-2'>
            <div class=' text-sky-950 text-[32px] font-bold  lg:text-start text-center'>
              Lifestyle in Poland
            </div>
            <div class=' text-neutral-600 text-center lg:text-start text-lg font-normal '>
              Poland is one of the nations in Europe with the lowest crime
              rates. While visiting Poland, you can observe the civilizations
              where the East and West converge. Because of its location, it is a
              destination that most explorers find interesting. Poland is ideal
              for you if you want to combine your studies with other exciting
              interests like travelling. Poland has affordable living expenses
              when compared to other European nations. Therefore, student life
              is less expensive in Poland.
            </div>
          </div>
          <div class='justify-center lg:justify-start items-center lg:items-start gap-4 flex flex-col sm:flex-row mt-10'>
            <div class='flex-col justify-start items-start gap-4 inline-flex'>
              <Image
                width={200}
                height={100}
                class='sm:max-w-[320px] h-[20vh] max-w-[250px] '
                src={`/image/lifep1.png`}
              />
              <Image
                width={200}
                height={0}
                class='sm:max-w-[320px]  h-[20vh] max-w-[250px]'
                src={`/image/lifep2.png`}
              />
            </div>
            <div className='sm:w-[213px] w-[250px] h-[100px] sm:h-full'>
              <Image
                width={200}
                height={0}
                class='w-full h-[43vh] object-cover'
                src={`/image/lifep3.png`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* poland top universities */}
      <div class='max-w-7xl w-full px-[10px] md:px-20  justify-start items-center gap-[82px] flex flex-col-reverse lg:flex-row'>
        <div class='w-[498px] h-[481px] relative '>
          <div class='w-[421.97px] h-[349px] left-0 top-[72px] absolute'>
            <div class='w-[421.97px] h-[349px] left-0 top-0 absolute'>
              <div class='w-[421.97px] h-[349px] left-0 top-0 absolute '></div>
              <Image
                width={200}
                height={0}
                class='w-[510.17px] h-[343.77px] left-[-47.56px] top-0 absolute'
                src={`/image/topumain.png`}
              />
            </div>
            <div class='w-52 h-[50px] left-[35px] top-[276px] absolute justify-start items-center gap-2 inline-flex'>
              <div class='w-[50px] h-[50px] relative'>
                <div class='w-[50px] h-[50px] left-0 top-0 absolute bg-amber-500 bg-opacity-30 rounded-full'></div>
                <div class='w-10 h-10 left-[5px] top-[5px] absolute bg-amber-500 bg-opacity-40 rounded-full'></div>
                <div class='w-[31.14px] h-[31.14px] left-[9px] top-[9px] absolute'>
                  <div class='w-[31.14px] h-[31.14px] left-0 top-0 absolute bg-amber-500 rounded-full'></div>
                  <div class='w-[17.79px] h-[17.79px] left-[7.41px] top-[7.41px] absolute'></div>
                </div>
              </div>
              <div class='text-white text-lg font-semibold '>
                Warsaw university
              </div>
            </div>
          </div>
          <div class='w-[287px] h-[156px] left-0 top-0 absolute'>
            <div class='w-[287px] h-[156px] left-0 top-0 absolute'></div>
            <Image
              width={200}
              height={0}
              class='w-[420px] h-[165px] left-[-47px] top-0 absolute'
              src={`/image/topu1.png`}
            />
          </div>
          <div class='w-[193px] h-[250px] left-[305px] top-[231px] absolute'>
            <div class='w-[193px] h-[250px] left-0 top-0 absolute'>
              <div class='w-[193px] h-[250px] left-0 top-0 absolute '></div>
              <Image
                width={200}
                height={0}
                class='w-[273px] h-[286px] left-[-32px] top-0 absolute'
                src={`/image/topu2.png`}
              />
            </div>
            <div class='w-[105px] h-[104px] left-[44px] top-[86px] absolute flex-col justify-start items-center gap-2 inline-flex'>
              <div class='w-[50px] h-[50px] relative'>
                <div class='w-[50px] h-[50px] left-0 top-0 absolute bg-amber-500 bg-opacity-30 rounded-full'></div>
                <div class='w-10 h-10 left-[5px] top-[5px] absolute bg-amber-500 bg-opacity-40 rounded-full'></div>
                <div class='w-[31.14px] h-[31.14px] left-[9px] top-[9px] absolute'>
                  <div class='w-[31.14px] h-[31.14px] left-0 top-0 absolute bg-amber-500 rounded-full'></div>
                  <div class='w-[17.79px] h-[17.79px] left-[7.41px] top-[7.41px] absolute'></div>
                </div>
              </div>
              <div class='text-center text-white text-lg font-bold '>
                Jagiellonian <br />
                University
              </div>
            </div>
          </div>
        </div>
        <div class='flex-col justify-start items-start gap-8 inline-flex'>
          <div class=' flex-col justify-start items-start gap-2 flex'>
            <div class='text-sky-950 text-4xl font-bold  text-center lg:text-start'>
              Poland’s Top Universities
            </div>
            <div class='max-w-[658px] text-stone-500 text-lg font-normal  text-center md:text-start'>
              Polish universities always extend a warm welcome to students from
              other countries. The country is always proud of its former
              students, who include Nicolaus Copernicus, a renowned astronomer,
              and Marie Curie, the first woman ever to win the Nobel Prize.
              Poland is the only country where Jagiellonian University, one of
              Europe’s oldest universities, is located.
            </div>
          </div>
          <div class='justify-start items-start gap-2 inline-flex'>
            <div class='flex-col justify-start items-start gap-2 inline-flex'>
              <div class='flex-col justify-start items-start gap-[25px] flex'>
                <div class='text-stone-500 text-lg font-[300]  '>
                  University of Warsaw
                </div>
              </div>
              <div class='text-stone-500 text-lg font-[300] '>
                Jagiellonian University
              </div>
              <div class='text-stone-500 text-lg font-[300]  '>
                Warsaw University of Technology
              </div>
              <div class='text-stone-500 text-lg font-[300]  '>
                Wroclaw University of science and technology
              </div>
              <div class='text-stone-500 text-lg font-[300]  '>
                Collegium Medicum Jagiellonian University
              </div>
              <div class='text-stone-500 text-lg font-[300]  '>
                Medical University of Lodz
              </div>
            </div>
            <div class='flex-col justify-start items-start gap-4 inline-flex'>
              <div class='text-stone-500 text-lg font-[300]  '>
                Medical University of Lublin
              </div>
              <div class='text-stone-500 text-lg font-[300]  '>
                Medical University of Wroclaw
              </div>
              <div class='text-stone-500 text-lg font-[300]  '>
                Medical University of Gdansk
              </div>
              <div class='text-stone-500 text-lg font-[300]  '>
                University of Warmia and Mazury
              </div>
              <div class='text-stone-500 text-lg font-[300]  '>
                Medical University of Warsaw
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* education syatem in poland */}

      <div class='max-w-7xl w-full mt-20 px-[26px] py-[87px] bg-sky-950 justify-center items-center inline-flex'>
        <div class='self-stretch flex-col justify-start items-center gap-8 inline-flex'>
          <div class='max-w-[585px] text-center text-amber-500 text-[32px] font-bold '>
            Education System in Poland
          </div>
          <div class='justify-start items-start gap-20 flex flex-col md:flex-row'>
            <div class='max-w-[614px] text-white text-lg font-[300] '>
              No entrance exams like the GRE or GMAT must be taken to be
              admitted to any higher education programme in Poland. After
              completing their upper secondary school studies, one will qualify
              to apply to higher education in Poland to study for a diploma or
              degree. One must have obtained a valid school-leaving certificate
              of 12th-grade academic education and be qualified for higher
              education studies in their home country. In addition, applicants
              must pass an English Language Test to provide evidence to meet the
              minimal language competency set by the individual Polish
              university.
            </div>
            <div class='max-w-[566px]  text-white text-lg font-[300] '>
              To meet the language skills requirement, a minimum score of 6.5
              and 6.0 is a must to attend a Master’s or Bachelor’s degree
              course, respectively, at a Polish university. The Cambridge
              Certificate of Proficiency Grade C, Cambridge Advanced Certificate
              Grade B, and TEEP are also recognized by Polish universities.
              Every university has its requirements, so one should decide on the
              university and course first and look at the language requirements
              later to make it easy.
            </div>
          </div>
        </div>
      </div>

      {/* poland univeristy fees */}
      <div class='max-w-7xl w-full px-[10px] md:px-20  flex-col justify-start items-center gap-[75px] inline-flex py-20'>
        <div class='flex-col justify-start items-center gap-[25px] flex'>
          <div class='max-w-[358px] text-sky-950 text-[32px] font-bold '>
            Poland University Fees:
          </div>
          <div class='max-w-[1107px] text-center text-neutral-600 text-lg font-[350] '>
            No entrance exams like the GRE or GMAT must be taken to be admitted
            to any higher education programme in Poland. After completing their
            upper secondary school studies, one will qualify to apply to higher
            education in Poland to study for a diploma or degree. One must have
            obtained a valid school-leaving certificate of 12th-grade academic
            education and be qualified for higher education studies in their
            home country. In addition, applicants must pass an English Language
            Test to provide evidence to meet the minimal language competency set
            by the individual Polish university.
          </div>
        </div>
        <div class='justify-center items-start gap-[45px] flex flex-col md:flex-row'>
          <div class='max-w-[257px] text-sky-950 text-lg font-bold '>
            Courses <br />
            Tuition Fees in Poland
          </div>
          <div class='justify-start items-start gap-4 flex flex-col md:flex-row'>
            <div class='flex-col justify-start items-start gap-4 inline-flex'>
              <div class='ma-w-[358px] text-neutral-600 text-lg font-[300] '>
                Bachelor and Masters 2000 – 4000 Euro / Year
              </div>
              <div class='text-neutral-600 text-lg font-[300] '>
                PhD 3000 Euro / Year
              </div>
              <div class='text-neutral-600 text-lg font-[300] '>
                Medicine and MBA 8000 – 12000 Euro / Year
              </div>
            </div>
            <div class='flex-col justify-start items-start gap-4 inline-flex'>
              <div class='text-neutral-600 text-lg font-[300] '>
                Vocational Studies 3000 Euro / Year
              </div>
              <div class='text-neutral-600 text-lg font-[300] '>
                Language and Foundation Courses 2000 Euro / Year
              </div>
            </div>
          </div>
        </div>
        <div class='w-full  justify-start items-start gap-8 flex flex-col md:flex-row'>
          <div class='max-w-[500px] text-sky-950 text-[32px] font-bold  text-center md:text-start'>
            Living Costs for International Students to Study in Poland
          </div>
          <div class='max-w-[553px] text-neutral-600 text-lg font-normal  text-center md:text-start'>
            Living costs in Poland largely depend on where you study and live.
            You will always pay more to live in a city like Warsaw than in a
            rural location. International students’ living costs in Poland range
            from 350 to 550 euros per month. There will be differences in the
            amount based on your accommodation type, lifestyle and social
            expenses in Poland, which is just an average number.
          </div>
        </div>
      </div>

      {/* accomododation */}
      <div class='max-w-7xl w-full py-10 px-[10px] md:px-20  justify-start items-center gap-[75px] flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 flex flex-col items-center'>
          <div className='relative w-[full] md:w-[60%] mr-10'>
            <Image
              width={200}
              height={0}
              src={`/image/acom1.png`}
              className=' w-[300px] h-[300px] md:w-[408px] md:h-[358px]  object-cover  rounded-lg'
              alt='dd'
            />
            <Image
              width={200}
              height={0}
              src={`/image/acom2.png`}
              className='w-[200px] h-[200px] md:w-[255px] md:h-[255px] absolute right-[-70px] bottom-[-50px]'
              alt='dd'
            />
          </div>
        </div>
        <div class='w-full md:w-1/2 flex-col justify-start items-start gap-6 inline-flex'>
          <div class='max-w-[329px] text-sky-950 text-[32px] font-bold  text-center md:text-start'>
            Accommodation
          </div>
          <div class=' text-neutral-600 text-lg font-normal '>
            In Poland, there are two kinds of lodging—those at the university
            and those for private students. There are few university dormitories
            in Poland, although they are less expensive and naturally closer to
            the universities. The requirements and rents are higher in private
            renting units.
          </div>
          <div class=' text-neutral-600 text-lg font-normal '>
            Private Rental Apartments for Students 350 to 400 EUR / Month
          </div>
          <div class='] text-neutral-600 text-lg font-normal '>
            Campus Accommodation 170 to 200 EUR / Month
          </div>
          <div class=' text-neutral-600 text-lg font-normal '>
            In locations like Warsaw, the cost of living for international
            students is higher in Poland. One-bedroom apartments typically cost
            between 360 and 500 euros per month to rent.
          </div>
        </div>
      </div>

      {/*   food express and transportation */}

      <div class='max--7xl w-full justify-start px-[10px] md:px-20 items-start gap-[46px]  flex flex-col md:flex-row'>
        <div class='px-[20px] pt-14 w-full md:w-1/2 pb-[146px] bg-sky-50 justify-start items-center flex'>
          <div class='self-stretch flex-col justify-start items-start gap-8 inline-flex'>
            <div class='w-12 h-12 relative'>
              <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M25.5 10.5V7.5H28.5C29.3295 7.5 30 6.8295 30 6C30 5.172 29.3295 4.5 28.5 4.5H19.5C18.6705 4.5 18 5.172 18 6C18 6.8295 18.6705 7.5 19.5 7.5H22.5V10.5C9.948 11.2785 0 21.7515 0 34.5V36C0 36.8295 0.6705 37.5 1.5 37.5H46.5C47.3295 37.5 48 36.8295 48 36V34.5C48 21.7515 38.052 11.2785 25.5 10.5ZM46.5 40.5H1.5C0.6705 40.5 0 41.172 0 42C0 42.8295 0.6705 43.5 1.5 43.5H46.5C47.3295 43.5 48 42.8295 48 42C48 41.172 47.3295 40.5 46.5 40.5Z'
                  fill='#FFA800'
                />
              </svg>
            </div>
            <div class='max-w-[509px] text-sky-950 text-2xl font-bold '>
              Food Expenses
            </div>
            <div class='md:max-w-[509px] max-w-[600px] h-[168px] text-zinc-600 text-lg font-normal '>
              The average monthly cost of meals for an international student in
              Poland is between 100 and 150 euros. Several affordable grocery
              options for international students can help you lower the cost of
              living in Poland. The prices at the restaurants are reasonable. A
              three-course meal costs about 23 euros, while drinks typically
              cost 2 euros.
            </div>
          </div>
        </div>
        <div class=' px-[20px] md:pt-14 w-full pb-[7px] md:w-1/2 bg-sky-50 justify-start items-center flex'>
          <div class='self-stretch flex-col justify-start items-start gap-6 inline-flex'>
            <div class='w-10 h-10 relative'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M32 20C32 26.6275 26.6275 32 20 32C13.3726 32 8 26.6275 8 20C8 13.3726 13.3726 8 20 8C26.6275 8 32 13.3726 32 20Z'
                  stroke='#FFA800'
                  stroke-width='6'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <div class='text-sky-950 text-2xl font-bold '>Transportation</div>
            <div class='md:max-w-[509px] max-w-[600px] text-zinc-600 text-lg font-normal '>
              The prices of gasoline keep changing. However, the average is 1
              euro a litre. If the place students are staying is nearby the
              University, Poland is a very Pedestrian friendly country. A
              semester pass from the Universities costs around 50 euros for
              students in Polish Universities.
            </div>
            <div class='md:max-w-[409px] max-w-[600px] text-zinc-600 text-lg font-normal '>
              These are some of the regular living costs in Poland for
              international students. There are some miscellaneous costs of
              stationary, internet and other expenses that will be added, and
              again, the averages will change basis the places you are staying
              at.
            </div>
          </div>
        </div>
      </div>

      {/* types of visa in poland */}
      <div class='w-full px-[20px] max-w-7xl py-14  flex-col justify-start items-center gap-12 inline-flex'>
        <div class='flex-col justify-start items-center gap-[27px] flex'>
          <div class='max-w-[638px] text-center text-sky-950 text-[32px] font-bold '>
            Types of Visa in Poland
          </div>
          <div class='max-w-[723px]  text-center text-zinc-800 text-lg font-normal '>
            The Republic of Poland’s Consulate General in Poland offers two
            different types of visas. The long-stay National Visa in Poland is
            known as Type D Visa, and the short-stay Schengen visa is known as a
            Type C visa.
          </div>
        </div>
        <div class='justify-start items-start gap-[37px] flex flex-col md:flex-row'>
          <div class='px-8 py-6 bg-sky-50 flex-col justify-start items-start gap-2.5 inline-flex'>
            <div class='justify-start items-start sm:items-center gap-[23px] flex flex-col sm:flex-row'>
              <div class='w-[69px] h-[69px] relative'>
                <svg
                  width='69'
                  height='69'
                  viewBox='0 0 69 69'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M16.5486 18.2338C12.4892 15.9829 7.85709 14.1736 2.67706 12.9197L2.84561 11.9116H24.1402C27.0084 12.0185 29.3269 12.934 30.1263 16.0019L34.7562 38.264C34.7559 38.2632 34.7564 38.2648 34.7562 38.264L36.1344 44.9807L49.0635 11.9416H63.0521L42.2616 60.298L28.2894 60.3141L16.5486 18.2338Z'
                    fill='#07294D'
                  />
                </svg>
              </div>
              <div class='flex-col justify-start items-start gap-4 inline-flex'>
                <div class='text-sky-950 text-2xl font-semibold '>
                  Type C Visa
                </div>
                <div class='max-w-[454px] text-zinc-800 text-lg font-normal '>
                  The Schengen Type C visa is for travellers intent to stay in
                  Poland for up to 90 days. The visa permits multiple entrances
                  and a stay of 90 days in Poland within 180 days. Most students
                  will, however, need to apply for a Long Stay Type D Visa
                  because this visa is inappropriate for them.
                </div>
              </div>
            </div>
          </div>
          <div class='px-8 py-6 bg-sky-50 flex-col justify-start items-start gap-2.5 inline-flex'>
            <div class='jjustify-start items-start sm:items-center gap-[23px] flex flex-col sm:flex-row'>
              <div class='w-[69px] h-[69px] relative'>
                <svg
                  width='69'
                  height='69'
                  viewBox='0 0 69 69'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M16.5486 18.2338C12.4892 15.9829 7.85709 14.1736 2.67706 12.9197L2.84561 11.9116H24.1402C27.0084 12.0185 29.3269 12.934 30.1263 16.0019L34.7562 38.264C34.7559 38.2632 34.7564 38.2648 34.7562 38.264L36.1344 44.9807L49.0635 11.9416H63.0521L42.2616 60.298L28.2894 60.3141L16.5486 18.2338Z'
                    fill='#07294D'
                  />
                </svg>
              </div>
              <div class='flex-col justify-start items-start gap-4 inline-flex'>
                <div class='text-sky-950 text-2xl font-semibold '>
                  Type D Visa
                </div>
                <div class='max-w-[456px]  text-zinc-800 text-lg font-normal '>
                  A long-stay visa exists for students planning to stay in
                  Poland for over 90 days. We will go through specific
                  prerequisites for the Poland National Visa in more detail. The
                  visa application process includes an interview too. The
                  requirements for the Poland Student Visa and Interview Process
                  are listed below.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* document required form student */}
      <div class='w-full max-w-7xl px-[20px] md:px-[122px] ] py-[54px] mt-10  bg-sky-950 justify-center items-center flex flex-col gap-10'>
        <h1 className='text-[#FFA800] text-center text-[32px] font-bold max-w-[562px]'>
          Documents Required for Student Visa to Study in Poland
        </h1>
        <div className='w-full flex flex-col md:flex-row md:gap-16 gap-6'>
          <div className='w-full md:w-1/2 flex flex-col gap-6'>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 56 56'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28' r='18' fill='#FFA800' />
                  <path
                    d='M28.1838 36.3721V23.8801H29.8578V36.3721H28.1838ZM25.6278 25.3921V23.8801H29.6778V25.3921H25.6278Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                The Ministry of Foreign Affairs, Poland website offers a free
                download of the application form for the Poland National Visa.
                You must fill out the form, including all required fields.
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 56 56'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28' r='18' fill='#FFA800' />
                  <path
                    d='M25.6638 35.3461L30.2718 30.4861C30.7398 30.0061 31.1058 29.5921 31.3698 29.2441C31.6338 28.8841 31.8198 28.5541 31.9278 28.2541C32.0478 27.9541 32.1078 27.6421 32.1078 27.3181C32.1078 26.6821 31.9038 26.1841 31.4958 25.8241C31.0878 25.4641 30.5598 25.2841 29.9118 25.2841C29.2758 25.2841 28.7178 25.4401 28.2378 25.7521C27.7578 26.0521 27.3318 26.5201 26.9598 27.1561L25.7718 26.1661C26.2638 25.3501 26.8578 24.7381 27.5538 24.3301C28.2498 23.9101 29.0538 23.7001 29.9658 23.7001C30.7338 23.7001 31.3998 23.8501 31.9638 24.1501C32.5398 24.4501 32.9838 24.8701 33.2958 25.4101C33.6078 25.9501 33.7638 26.5801 33.7638 27.3001C33.7638 27.8161 33.6978 28.2781 33.5658 28.6861C33.4458 29.0941 33.2238 29.5141 32.8998 29.9461C32.5878 30.3661 32.1498 30.8701 31.5858 31.4581L27.8598 35.2921L25.6638 35.3461ZM25.6638 36.3721V35.3461L27.1038 34.8601H34.0518V36.3721H25.6638Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                Active Passport and a copy of the data page.
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='57'
                  viewBox='0 0 56 57'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28.5'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28.5' r='18' fill='#FFA800' />
                  <path
                    d='M29.5158 37.0521C28.6998 37.0521 27.9558 36.9021 27.2838 36.6021C26.6238 36.2901 26.0658 35.8401 25.6098 35.2521L26.7618 34.1001C27.0378 34.5201 27.4158 34.8561 27.8958 35.1081C28.3758 35.3481 28.9098 35.4681 29.4978 35.4681C30.0498 35.4681 30.5238 35.3661 30.9198 35.1621C31.3278 34.9461 31.6458 34.6461 31.8738 34.2621C32.1138 33.8781 32.2338 33.4341 32.2338 32.9301C32.2338 32.4141 32.1138 31.9701 31.8738 31.5981C31.6458 31.2141 31.3218 30.9201 30.9018 30.7161C30.4818 30.5121 29.9838 30.4101 29.4078 30.4101C29.1918 30.4101 28.9758 30.4281 28.7598 30.4641C28.5438 30.4881 28.3338 30.5301 28.1298 30.5901L28.8498 29.6181C29.0778 29.5101 29.3238 29.4261 29.5878 29.3661C29.8518 29.3061 30.1158 29.2761 30.3798 29.2761C31.0518 29.2761 31.6518 29.4321 32.1798 29.7441C32.7198 30.0561 33.1458 30.4941 33.4578 31.0581C33.7818 31.6221 33.9438 32.2761 33.9438 33.0201C33.9438 33.8121 33.7518 34.5141 33.3678 35.1261C32.9958 35.7261 32.4798 36.2001 31.8198 36.5481C31.1598 36.8841 30.3918 37.0521 29.5158 37.0521ZM28.1298 30.5901V29.5641L31.7838 25.4061L33.7998 25.3881L30.0378 29.6541L28.1298 30.5901ZM26.2038 25.8921V24.3801H33.7998V25.3881L32.3238 25.8921H26.2038Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                In a cover letter, you should explain why you wish to study in
                Poland and state your plans to return after course completion)
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 56 56'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28' r='18' fill='#FFA800' />
                  <path
                    d='M25.6638 32.0701L30.2178 23.8801H32.1258L27.4818 32.0701H25.6638ZM25.6638 33.1141V32.0701L26.3838 31.6021H35.2398V33.1141H25.6638ZM31.7658 36.3721V28.1101H33.4398V36.3721H31.7658Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                Letter of Acceptance from a Recognized Polish university.
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 56 56'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28' r='18' fill='#FFA800' />
                  <path
                    d='M29.5338 36.5521C28.6818 36.5521 27.9198 36.4021 27.2478 36.1021C26.5878 35.7901 26.0298 35.3401 25.5738 34.7521L26.7258 33.6001C27.0018 34.0201 27.3798 34.3561 27.8598 34.6081C28.3518 34.8481 28.8978 34.9681 29.4978 34.9681C30.0618 34.9681 30.5538 34.8601 30.9738 34.6441C31.4058 34.4281 31.7418 34.1281 31.9818 33.7441C32.2338 33.3481 32.3598 32.8801 32.3598 32.3401C32.3598 31.7881 32.2398 31.3201 31.9998 30.9361C31.7598 30.5521 31.4358 30.2641 31.0278 30.0721C30.6318 29.8681 30.1938 29.7661 29.7138 29.7661C29.2218 29.7661 28.7718 29.8261 28.3638 29.9461C27.9678 30.0661 27.5898 30.2701 27.2298 30.5581L27.2478 29.4781C27.4518 29.2261 27.6858 29.0221 27.9498 28.8661C28.2138 28.7101 28.5138 28.5901 28.8498 28.5061C29.1858 28.4221 29.5758 28.3801 30.0198 28.3801C30.8838 28.3801 31.6158 28.5601 32.2158 28.9201C32.8158 29.2801 33.2718 29.7661 33.5838 30.3781C33.9078 30.9901 34.0698 31.6741 34.0698 32.4301C34.0698 33.2221 33.8718 33.9301 33.4758 34.5541C33.0918 35.1781 32.5578 35.6701 31.8738 36.0301C31.1898 36.3781 30.4098 36.5521 29.5338 36.5521ZM27.2298 30.5581L26.3118 29.6401L26.8698 23.8801H28.4178L27.7878 29.8021L27.2298 30.5581ZM27.2118 25.3921L26.8698 23.8801H33.4398V25.3921H27.2118Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                Air Tickets to Poland.
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 56 56'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28' r='18' fill='#FFA800' />
                  <path
                    d='M30.1458 36.5521C29.3178 36.5521 28.5738 36.3601 27.9138 35.9761C27.2658 35.5921 26.7498 35.0761 26.3658 34.4281C25.9818 33.7801 25.7898 33.0601 25.7898 32.2681C25.7898 31.1641 26.1738 30.0661 26.9418 28.9741L30.6138 23.8801H32.5758L28.8138 29.0101L28.2018 29.3341C28.3458 29.0821 28.5198 28.8721 28.7238 28.7041C28.9278 28.5241 29.1798 28.3861 29.4798 28.2901C29.7798 28.1941 30.1338 28.1461 30.5418 28.1461C31.2738 28.1461 31.9338 28.3201 32.5218 28.6681C33.1218 29.0161 33.6018 29.4961 33.9618 30.1081C34.3338 30.7081 34.5198 31.4101 34.5198 32.2141C34.5198 33.0061 34.3218 33.7321 33.9258 34.3921C33.5418 35.0521 33.0138 35.5801 32.3418 35.9761C31.6818 36.3601 30.9498 36.5521 30.1458 36.5521ZM30.1458 34.9681C30.6498 34.9681 31.0998 34.8481 31.4958 34.6081C31.9038 34.3561 32.2218 34.0261 32.4498 33.6181C32.6898 33.1981 32.8098 32.7301 32.8098 32.2141C32.8098 31.6981 32.6898 31.2361 32.4498 30.8281C32.2218 30.4081 31.9038 30.0781 31.4958 29.8381C31.0998 29.5981 30.6498 29.4781 30.1458 29.4781C29.6418 29.4781 29.1858 29.5981 28.7778 29.8381C28.3818 30.0781 28.0638 30.4081 27.8238 30.8281C27.5958 31.2361 27.4818 31.6981 27.4818 32.2141C27.4818 32.7301 27.5958 33.1981 27.8238 33.6181C28.0638 34.0381 28.3818 34.3681 28.7778 34.6081C29.1858 34.8481 29.6418 34.9681 30.1458 34.9681Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                Accommodation- a contract or a booking confirmation.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-6'>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 56 56'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28' r='18' fill='#FFA800' />
                  <path
                    d='M27.5898 36.3721L32.2698 24.8701L33.9438 24.9241L29.3718 36.3721H27.5898ZM25.6278 25.3921V23.8801H33.9438V24.9241L33.2058 25.3921H25.6278Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                Medical Insurance coverage up to 30000 euros.
              </p>
            </div>

            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 56 56'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28' r='18' fill='#FFA800' />
                  <path
                    d='M29.95 36.18C29.122 36.18 28.39 36.024 27.754 35.712C27.13 35.4 26.644 34.968 26.296 34.416C25.948 33.864 25.774 33.24 25.774 32.544C25.774 31.98 25.882 31.464 26.098 30.996C26.314 30.528 26.632 30.132 27.052 29.808C27.472 29.472 27.964 29.232 28.528 29.088L28.582 29.574C28.102 29.442 27.694 29.232 27.358 28.944C27.022 28.644 26.764 28.296 26.584 27.9C26.416 27.492 26.332 27.06 26.332 26.604C26.332 25.956 26.488 25.386 26.8 24.894C27.112 24.402 27.538 24.018 28.078 23.742C28.63 23.454 29.254 23.31 29.95 23.31C30.658 23.31 31.282 23.454 31.822 23.742C32.362 24.018 32.788 24.402 33.1 24.894C33.412 25.386 33.568 25.956 33.568 26.604C33.568 27.06 33.478 27.492 33.298 27.9C33.13 28.296 32.878 28.644 32.542 28.944C32.218 29.232 31.816 29.442 31.336 29.574L31.372 29.088C31.948 29.232 32.44 29.472 32.848 29.808C33.268 30.132 33.586 30.528 33.802 30.996C34.03 31.464 34.144 31.98 34.144 32.544C34.144 33.24 33.97 33.864 33.622 34.416C33.274 34.968 32.782 35.4 32.146 35.712C31.522 36.024 30.79 36.18 29.95 36.18ZM29.95 34.65C30.454 34.65 30.892 34.554 31.264 34.362C31.648 34.158 31.948 33.882 32.164 33.534C32.392 33.186 32.506 32.784 32.506 32.328C32.506 31.884 32.392 31.488 32.164 31.14C31.948 30.792 31.648 30.522 31.264 30.33C30.892 30.126 30.454 30.024 29.95 30.024C29.458 30.024 29.02 30.126 28.636 30.33C28.252 30.522 27.946 30.792 27.718 31.14C27.502 31.488 27.394 31.884 27.394 32.328C27.394 32.784 27.502 33.186 27.718 33.534C27.946 33.882 28.252 34.158 28.636 34.362C29.02 34.554 29.458 34.65 29.95 34.65ZM29.95 28.71C30.55 28.71 31.042 28.524 31.426 28.152C31.81 27.78 32.002 27.3 32.002 26.712C32.002 26.136 31.81 25.668 31.426 25.308C31.042 24.936 30.55 24.75 29.95 24.75C29.362 24.75 28.876 24.936 28.492 25.308C28.108 25.668 27.916 26.136 27.916 26.712C27.916 27.3 28.108 27.78 28.492 28.152C28.876 28.524 29.362 28.71 29.95 28.71Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                Academic Documents (Degree Certificates, Transcripts, and Mark
                Sheets)
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='57'
                  viewBox='0 0 56 57'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28.5'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28.5' r='18' fill='#FFA800' />
                  <path
                    d='M27.7158 36.8721L31.4778 31.7421L32.0898 31.4181C31.9458 31.6581 31.7718 31.8681 31.5678 32.0481C31.3638 32.2281 31.1118 32.3661 30.8118 32.4621C30.5238 32.5581 30.1698 32.6061 29.7498 32.6061C29.0298 32.6061 28.3638 32.4321 27.7518 32.0841C27.1518 31.7361 26.6718 31.2561 26.3118 30.6441C25.9518 30.0201 25.7718 29.3181 25.7718 28.5381C25.7718 27.7341 25.9698 27.0081 26.3658 26.3601C26.7618 25.7001 27.2898 25.1781 27.9498 24.7941C28.6098 24.3981 29.3418 24.2001 30.1458 24.2001C30.9618 24.2001 31.6998 24.3921 32.3598 24.7761C33.0198 25.1601 33.5418 25.6761 33.9258 26.3241C34.3098 26.9601 34.5018 27.6801 34.5018 28.4841C34.5018 29.5881 34.1178 30.6861 33.3498 31.7781L29.6778 36.8721H27.7158ZM30.1458 31.2741C30.6498 31.2741 31.0998 31.1541 31.4958 30.9141C31.9038 30.6621 32.2218 30.3321 32.4498 29.9241C32.6898 29.5041 32.8098 29.0421 32.8098 28.5381C32.8098 28.0101 32.6898 27.5421 32.4498 27.1341C32.2218 26.7141 31.9038 26.3841 31.4958 26.1441C31.0998 25.9041 30.6498 25.7841 30.1458 25.7841C29.6418 25.7841 29.1858 25.9041 28.7778 26.1441C28.3818 26.3841 28.0638 26.7141 27.8238 27.1341C27.5838 27.5421 27.4638 28.0101 27.4638 28.5381C27.4638 29.0541 27.5838 29.5161 27.8238 29.9241C28.0638 30.3321 28.3878 30.6621 28.7958 30.9141C29.2038 31.1541 29.6538 31.2741 30.1458 31.2741Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                In a cover letter, you should explain why you wish to study in
                Poland and state your plans to return after course completion)
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='56'
                  viewBox='0 0 56 56'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28' r='18' fill='#FFA800' />
                  <path
                    d='M20.114 36V23.508H21.788V36H20.114ZM17.558 25.02V23.508H21.608V25.02H17.558ZM29.1802 36.18C28.2442 36.18 27.3862 35.916 26.6062 35.388C25.8382 34.86 25.2262 34.116 24.7702 33.156C24.3142 32.184 24.0862 31.044 24.0862 29.736C24.0862 28.428 24.3082 27.294 24.7522 26.334C25.2082 25.374 25.8202 24.636 26.5882 24.12C27.3562 23.592 28.2022 23.328 29.1262 23.328C30.0742 23.328 30.9322 23.592 31.7002 24.12C32.4682 24.636 33.0742 25.374 33.5182 26.334C33.9742 27.294 34.2022 28.434 34.2022 29.754C34.2022 31.062 33.9742 32.202 33.5182 33.174C33.0742 34.134 32.4682 34.878 31.7002 35.406C30.9442 35.922 30.1042 36.18 29.1802 36.18ZM29.1442 34.578C29.8042 34.578 30.3802 34.398 30.8722 34.038C31.3762 33.666 31.7722 33.12 32.0602 32.4C32.3482 31.68 32.4922 30.792 32.4922 29.736C32.4922 28.68 32.3482 27.798 32.0602 27.09C31.7722 26.37 31.3762 25.83 30.8722 25.47C30.3682 25.098 29.7862 24.912 29.1262 24.912C28.4782 24.912 27.9022 25.098 27.3982 25.47C26.8942 25.83 26.4982 26.37 26.2102 27.09C25.9342 27.798 25.7962 28.68 25.7962 29.736C25.7962 30.792 25.9342 31.68 26.2102 32.4C26.4982 33.12 26.8942 33.666 27.3982 34.038C27.9022 34.398 28.4842 34.578 29.1442 34.578Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                Payment Receipt of Visa Application Fees (99 EUR, based on the
                country of origin)
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <div>
                <svg
                  width='56'
                  height='57'
                  viewBox='0 0 56 57'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='28'
                    cy='28.5'
                    r='28'
                    fill='#FFA800'
                    fill-opacity='0.4'
                  />
                  <circle cx='28' cy='28.5' r='18' fill='#FFA800' />
                  <path
                    d='M23.114 37V24.508H24.788V37H23.114ZM20.558 26.02V24.508H24.608V26.02H20.558ZM29.3542 37V24.508H31.0282V37H29.3542ZM26.7982 26.02V24.508H30.8482V26.02H26.7982Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-[18px] font-[400] text-white max-w-[400px]'>
                The Original Documents must be delivered individually to the
                Polish Embassy’s consulate in your nation that is the closest by
                making an appointment with them. Your application and documents
                will be reviewed, and the interview stage of the procedure will
                then begin.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* owrk while you earn */}

      <div class='max-w-7xl w-full py-20  justify-center items-start gap-9 flex flex-col px-[20px] md:px-10 md:flex-row'>
        <div class='w-[473px] text-sky-950 text-[32px] font-bold '>
          Work while you Earn
        </div>
        <div class='flex-col justify-start items-center gap-9 inline-flex'>
          <div class='max-w-[593px] text-neutral-700 text-lg font-normal '>
            In Polish Cities, getting part-time work is extremely simple. There
            are a ton of options for international students to work part-time.
            Hence, students might work part-time jobs during their free time to
            generate money that will be helpful to their academic endeavours.
            These part-time employees also have a consistent growth in pay.
            However, the working hours in Poland vary depending on where you are
            from.
          </div>
          <div class='max-w-[593px] text-neutral-700 text-lg font-normal '>
            Polish universities also provide grants and scholarships to help
            students with tuition costs. Students can therefore study in Poland
            without any concerns owing to all these amenities.
          </div>
        </div>
      </div>

      {/* process of application */}
      <div class='max-w-7xl w-full md:px-20 px-[20px]  flex-col justify-start items-center gap-12 inline-flex'>
        <div class='flex-col justify-start items-center gap-6 flex'>
          <div class='text-sky-900 text-3xl md:text-4xl font-bold  text-center'>
            Process of Application
          </div>
          <div class='text-neutral-500 text-lg font-normal  text-center'>
            The process of application is a set of steps that need to be
            followed.
          </div>
        </div>
        <div class='justify-start items-start gap-12 flex flex-col md:flex-row'>
          <div class='justify-start items-center gap-6 flex'>
            <div class='w-10 h-10 relative'>
              <svg
                width='40'
                height='41'
                viewBox='0 0 40 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M38.75 31.75C38.75 33.1313 37.6312 34.25 36.25 34.25H3.75C2.36875 34.25 1.25 33.1313 1.25 31.75C1.25 30.3687 2.36875 29.25 3.75 29.25H16.25C16.25 29.94 16.81 30.5 17.5 30.5H22.5C23.19 30.5 23.75 29.94 23.75 29.25H36.25C37.6312 29.25 38.75 30.3687 38.75 31.75ZM32.5 9.25H7.5V24.25H32.5V9.25ZM3.75 28V9.25C3.75 7.17875 5.42875 5.5 7.5 5.5H32.5C34.5713 5.5 36.25 7.17875 36.25 9.25V28H3.75ZM6.25 24.25C6.25 24.94 6.81 25.5 7.5 25.5H32.5C33.19 25.5 33.75 24.94 33.75 24.25V9.25C33.75 8.56 33.19 8 32.5 8H7.5C6.81 8 6.25 8.56 6.25 9.25V24.25Z'
                  fill='#07294D'
                />
              </svg>
            </div>
            <div class='flex-col justify-start items-start gap-[23px] inline-flex'>
              <div class='text-sky-950 text-xl font-bold '>
                Find a Study Programme:
              </div>
              <div class='max-w-[530px]  text-black text-base font-normal '>
                One of the most important things that need to decide is the
                right programme that you are willing to apply for. Finding the
                details of the programme is important. It is important to
                understand that there many similar programmes available in the
                universities. For the same reason, it is essential that a
                student goes through a detailed analysis of the course and find
                out the most suitable course.
              </div>
            </div>
          </div>
          <div class='justify-start items-center gap-6 flex'>
            <div class='w-10 h-10 relative'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_229_355)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10L0 30C0 32.6522 1.05357 35.1957 2.92893 37.0711C4.8043 38.9464 7.34784 40 10 40H30C32.6522 40 35.1957 38.9464 37.0711 37.0711C38.9464 35.1957 40 32.6522 40 30V10C40 7.34784 38.9464 4.8043 37.0711 2.92893C35.1957 1.05357 32.6522 0 30 0L10 0ZM10 11.875C10 11.3777 10.1975 10.9008 10.5492 10.5492C10.9008 10.1975 11.3777 10 11.875 10H28.125C28.6223 10 29.0992 10.1975 29.4508 10.5492C29.8025 10.9008 30 11.3777 30 11.875C30 12.3723 29.8025 12.8492 29.4508 13.2008C29.0992 13.5525 28.6223 13.75 28.125 13.75H11.875C11.3777 13.75 10.9008 13.5525 10.5492 13.2008C10.1975 12.8492 10 12.3723 10 11.875ZM34.45 26.175C34.8011 26.5266 34.9984 27.0031 34.9984 27.5C34.9984 27.9969 34.8011 28.4734 34.45 28.825L28.825 34.45C28.4734 34.8011 27.9969 34.9984 27.5 34.9984C27.0031 34.9984 26.5266 34.8011 26.175 34.45L23.05 31.325C22.8658 31.1533 22.718 30.9463 22.6155 30.7163C22.5131 30.4863 22.458 30.2381 22.4535 29.9863C22.4491 29.7345 22.4954 29.4845 22.5897 29.251C22.684 29.0175 22.8244 28.8055 23.0024 28.6274C23.1805 28.4494 23.3925 28.309 23.626 28.2147C23.8595 28.1204 24.1095 28.0741 24.3613 28.0785C24.6131 28.083 24.8613 28.1381 25.0913 28.2405C25.3213 28.343 25.5283 28.4908 25.7 28.675L27.5 30.475L31.8 26.175C32.1516 25.8239 32.6281 25.6266 33.125 25.6266C33.6219 25.6266 34.0984 25.8239 34.45 26.175ZM10 20C10 19.5027 10.1975 19.0258 10.5492 18.6742C10.9008 18.3225 11.3777 18.125 11.875 18.125H28.125C28.6223 18.125 29.0992 18.3225 29.4508 18.6742C29.8025 19.0258 30 19.5027 30 20C30 20.4973 29.8025 20.9742 29.4508 21.3258C29.0992 21.6775 28.6223 21.875 28.125 21.875H11.875C11.3777 21.875 10.9008 21.6775 10.5492 21.3258C10.1975 20.9742 10 20.4973 10 20ZM10 28.125C10 27.6277 10.1975 27.1508 10.5492 26.7992C10.9008 26.4475 11.3777 26.25 11.875 26.25H18.125C18.6223 26.25 19.0992 26.4475 19.4508 26.7992C19.8025 27.1508 20 27.6277 20 28.125C20 28.6223 19.8025 29.0992 19.4508 29.4508C19.0992 29.8025 18.6223 30 18.125 30H11.875C11.3777 30 10.9008 29.8025 10.5492 29.4508C10.1975 29.0992 10 28.6223 10 28.125Z'
                    fill='#123E6C'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_229_355'>
                    <rect width='40' height='40' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class='flex-col justify-start items-start gap-[23px] inline-flex'>
              <div class='text-sky-950 text-xl font-bold '>
                Meet All Requirements
              </div>
              <div class='max-w-[530px]  text-black text-base font-normal '>
                There are certain requirements for application in the course.
                One of the most important requirements for studying in Poland is
                that a student needs to complete a secondary level of education
                and needs to have the certificates of school leaving. Another
                important requirement is the availability of resident Permit in
                Poland. This can be obtained by the Polish representative of in
                the native country. As the health service in Poland is not free
                this is the reason why health insurance from an authorised and
                recognized organization must be needed.
              </div>
            </div>
          </div>
        </div>
        <div class='justify-start items-start gap-12 flex flex-col md:flex-row'>
          <div class='justify-start items-center gap-6 flex'>
            <div class='w-10 h-10 relative'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20 3.3335C10.8 3.3335 3.33331 10.8002 3.33331 20.0002C3.33331 29.2002 10.8 36.6668 20 36.6668C29.2 36.6668 36.6666 29.2002 36.6666 20.0002C36.6666 10.8002 29.2 3.3335 20 3.3335ZM28.3333 29.1168C25.4833 29.1168 22.8166 27.8835 20.6833 25.6002C18.2666 27.7835 15.1166 29.1168 11.6666 29.1168C10.9833 29.1168 10.4166 28.5502 10.4166 27.8668C10.4166 27.1835 10.9833 26.6168 11.6666 26.6168C17.45 26.6168 22.2333 22.0335 22.85 16.1668H20H11.6833C11 16.1668 10.4333 15.6002 10.4333 14.9168C10.4333 14.2335 11 13.6835 11.6833 13.6835H18.75V12.1335C18.75 11.4502 19.3166 10.8835 20 10.8835C20.6833 10.8835 21.25 11.4502 21.25 12.1335V13.6835H24.0666C24.1 13.6835 24.1333 13.6668 24.1666 13.6668C24.2 13.6668 24.2333 13.6835 24.2666 13.6835H28.3166C29 13.6835 29.5666 14.2502 29.5666 14.9335C29.5666 15.6168 29 16.1835 28.3166 16.1835H25.35C25.1 19.0335 24.0333 21.6502 22.4 23.7835C24.0666 25.6335 26.15 26.6335 28.3333 26.6335C29.0166 26.6335 29.5833 27.2002 29.5833 27.8835C29.5833 28.5668 29.0166 29.1168 28.3333 29.1168Z'
                  fill='#07294D'
                />
              </svg>
            </div>
            <div class='flex-col justify-start items-start gap-[23px] inline-flex'>
              <div class='text-sky-950 text-xl font-bold '>
                Learn The Country Language
              </div>
              <div class='max-w-[530px] text-black text-base font-normal '>
                Learning the local language of the country helps communicate in
                the country. The basic idea of the language would allow a smooth
                way to navigate through the country. It is also essential that
                you learn English and have proficiency in the language. Some of
                the universities have their test of language and the student
                needs to be prepared for the dame.
              </div>
            </div>
          </div>
          <div class='justify-start items-center gap-6 flex'>
            <div class='w-10 h-10 relative'>
              <svg
                width='40'
                height='41'
                viewBox='0 0 40 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.33333 13.8332C3.33333 10.1513 6.3181 7.1665 10 7.1665H30C33.6818 7.1665 36.6667 10.1513 36.6667 13.8332V14.6665C36.6667 15.1267 36.2935 15.4998 35.8333 15.4998H4.16667C3.70643 15.4998 3.33333 15.1267 3.33333 14.6665V13.8332ZM4.16667 18.8332C3.70643 18.8332 3.33333 19.2063 3.33333 19.6665V27.1665C3.33333 30.8483 6.3181 33.8332 10 33.8332H30C33.6818 33.8332 36.6667 30.8483 36.6667 27.1665V19.6665C36.6667 19.2063 36.2935 18.8332 35.8333 18.8332H4.16667ZM21.6667 25.4998C21.6667 24.5793 22.4128 23.8332 23.3333 23.8332H28.3333C29.2538 23.8332 30 24.5793 30 25.4998C30 26.4203 29.2538 27.1665 28.3333 27.1665H23.3333C22.4128 27.1665 21.6667 26.4203 21.6667 25.4998Z'
                  fill='#07294D'
                />
              </svg>
            </div>
            <div class='flex-col justify-start items-start gap-[23px] inline-flex'>
              <div class='text-sky-950 text-xl font-bold '>
                Find Financial Resources
              </div>
              <div class='max-w-[530px]  text-black text-base font-normal '>
                Students belonging to the low-income households can avail
                benefits associated with a free meal, leaving and various other
                social benefits. Disabled students are also eligible for the
                social grants and almost all the students who produce the
                disability certificates can avail special grants from the
                universities.
              </div>
            </div>
          </div>
        </div>
        <div class='justify-start items-start gap-12 flex flex-col md:flex-row'>
          <div class='justify-start items-center gap-6 flex'>
            <div class='w-10 h-10 relative'>
              <svg
                width='40'
                height='41'
                viewBox='0 0 40 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.6666 37.167H23.3333C29.6186 37.167 32.7615 37.167 34.714 35.2143C36.6666 33.2618 36.6666 30.119 36.6666 23.8336C36.6666 17.5483 36.6666 14.4056 34.714 12.4529C34.1096 11.8486 33.3905 11.4313 32.4993 11.1432C32.5 11.4257 32.5 11.7147 32.5 12.0086V15.6054C32.5 15.6544 32.5005 15.7077 32.501 15.7649C32.5058 16.3323 32.5141 17.2833 32.1066 18.1533C31.6991 19.0235 30.9633 19.626 30.5241 19.9855C30.4803 20.0213 30.4383 20.0556 30.4011 20.0866L27.8903 22.1791C26.4556 23.3746 25.2068 24.4155 24.0841 25.1375C22.8741 25.9158 21.5651 26.4915 20 26.4915C18.4348 26.4915 17.126 25.9158 15.9158 25.1375C14.7931 24.4155 13.5443 23.3746 12.1098 22.1791L9.59893 20.0866C9.56133 20.0555 9.5201 20.0216 9.47583 19.9855C9.03676 19.626 8.30091 19.0235 7.89338 18.1533C7.48585 17.2833 7.49411 16.3323 7.49905 15.7649C7.49953 15.7077 7.5 15.6543 7.5 15.6054V12.0086C7.49996 11.7143 7.49995 11.4254 7.50065 11.1426C6.6096 11.4307 5.89068 11.8482 5.28593 12.4529C3.33331 14.4056 3.33331 17.5483 3.33331 23.8336C3.33331 30.119 3.33331 33.2618 5.28593 35.2143C7.23855 37.167 10.3813 37.167 16.6666 37.167Z'
                  fill='#07294D'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M11.1995 18.1663L13.5983 20.1653C16.6594 22.7162 18.1898 23.9917 20.0002 23.9917C21.8103 23.9917 23.341 22.7162 26.402 20.1653L28.8008 18.1663C29.3905 17.6748 29.6855 17.4292 29.8428 17.0931C30.0002 16.7572 30.0002 16.3733 30.0002 15.6056V12.1668C30.0002 11.6324 30.0002 11.1344 29.997 10.6696C29.9775 7.71783 29.8342 6.10826 28.7798 5.05388C27.5593 3.8335 25.5952 3.8335 21.6668 3.8335H18.3335C14.4051 3.8335 12.4409 3.8335 11.2205 5.05388C10.1661 6.10826 10.0196 7.71783 10.0001 10.6696C9.99707 11.1344 10.0001 11.6324 10.0001 12.1668V15.6056C10.0001 16.3733 10.0001 16.7572 10.1575 17.0931C10.3148 17.4292 10.6097 17.6748 11.1995 18.1663ZM15.4167 10.5002C15.4167 9.80981 15.9763 9.25016 16.6667 9.25016H23.3333C24.0237 9.25016 24.5833 9.80981 24.5833 10.5002C24.5833 11.1905 24.0237 11.7502 23.3333 11.7502H16.6667C15.9763 11.7502 15.4167 11.1905 15.4167 10.5002ZM17.0833 15.5002C17.0833 14.8098 17.643 14.2502 18.3333 14.2502H21.6667C22.357 14.2502 22.9167 14.8098 22.9167 15.5002C22.9167 16.1905 22.357 16.7502 21.6667 16.7502H18.3333C17.643 16.7502 17.0833 16.1905 17.0833 15.5002Z'
                  fill='#07294D'
                />
              </svg>
            </div>
            <div class='flex-col justify-start items-start gap-[23px] inline-flex'>
              <div class='text-sky-950 text-xl font-bold '>
                Apply For Admission
              </div>
              <div class='max-w-[530px]  text-black text-base font-normal '>
                Once the student decides to go for a specific course then the
                process of application for the course needs to be initiated. The
                application for the course can be done online. The documents
                that are needed for the application can be sent over the email.
                Once the student’s information is being verified then a letter
                of confirmation is being sent to the student. After the
                reception of the confirmation letter, the student needs to apply
                for the Visa.
              </div>
            </div>
          </div>
          <div class='justify-start items-center gap-6 flex'>
            <div class='w-10 h-10 relative'>
              <svg
                width='40'
                height='41'
                viewBox='0 0 40 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20 17.75C21.5188 17.75 22.75 18.9812 22.75 20.5C22.75 22.0188 21.5188 23.25 20 23.25C18.4812 23.25 17.25 22.0188 17.25 20.5C17.25 18.9812 18.4812 17.75 20 17.75Z'
                  fill='#07294D'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M5.77412 6.27428C3.33333 8.71505 3.33333 12.6434 3.33333 20.5002C3.33333 28.3568 3.33333 32.2853 5.77412 34.726C8.21488 37.1668 12.1433 37.1668 20 37.1668C27.8567 37.1668 31.7852 37.1668 34.2258 34.726C36.6667 32.2853 36.6667 28.3568 36.6667 20.5002C36.6667 12.6434 36.6667 8.71505 34.2258 6.27428C31.7852 3.8335 27.8567 3.8335 20 3.8335C12.1433 3.8335 8.21488 3.8335 5.77412 6.27428ZM11.25 20.5002C11.25 15.6677 15.1675 11.7502 20 11.7502C24.8325 11.7502 28.75 15.6677 28.75 20.5002C28.75 21.5547 28.564 22.5628 28.2242 23.4957C28.1652 23.6575 28.0492 23.8317 27.8638 24.0027L27.7295 24.1265C27.2282 24.589 26.4755 24.6482 25.908 24.2698C25.4968 23.9958 25.25 23.5345 25.25 23.0403V20.5002C25.25 17.6007 22.8995 15.2502 20 15.2502C17.1005 15.2502 14.75 17.6007 14.75 20.5002C14.75 23.3997 17.1005 25.7502 20 25.7502C21.1695 25.7502 22.2498 25.3677 23.1225 24.721C23.4262 25.3723 23.9052 25.9393 24.5212 26.35C26.049 27.3685 28.0752 27.2088 29.4247 25.964L29.559 25.8402C29.9758 25.4555 30.3517 24.9595 30.5732 24.3515C31.0115 23.1483 31.25 21.8507 31.25 20.5002C31.25 14.287 26.2132 9.25016 20 9.25016C13.7868 9.25016 8.75 14.287 8.75 20.5002C8.75 26.7133 13.7868 31.7502 20 31.7502C20.6903 31.7502 21.25 31.1905 21.25 30.5002C21.25 29.8098 20.6903 29.2502 20 29.2502C15.1675 29.2502 11.25 25.3327 11.25 20.5002Z'
                  fill='#07294D'
                />
              </svg>
            </div>
            <div class='flex-col justify-start items-start gap-[23px] inline-flex'>
              <div class='max-w-[329px] text-sky-950 text-xl font-bold '>
                Get Your Country Student Visa
              </div>
              <div class='max-w-[530px]  text-black text-base font-normal '>
                Once the process of application is being initiated the student
                must apply for the Visa. It takes some time so it is better to
                apply early.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* some questions */}
      <div class='w-full px-[20px] md:px-[146px]  py-[57px] mt-20  bg-sky-950  items-center flex justify-center'>
        <div class='self-stretch justify-start items-start gap-[60px] flex flex-col md:flex-row'>
          <div class='flex-col md:w-1/2 justify-center md:justify-start items-center md:items-start  w-full gap-6 inline-flex'>
            <div class='p-4 w-full bg-sky-900 rounded-lg flex-col justify-start items-start gap-2.5 flex'>
              <div class='justify-start items-center gap-4 inline-flex'>
                <div class='max-w-[408px]  text-white text-lg font-normal '>
                  Can international students work part-time in Poland while they
                  are in their studies?
                </div>
                <div class='w-6 h-6 relative origin-top-left -rotate-90'></div>
              </div>
            </div>
            <div class='p-4  w-full bg-sky-900 rounded-lg flex-col justify-start items-start gap-2.5 flex'>
              <div class='justify-start items-end gap-4 inline-flex'>
                <div class='max-w-[408px]  text-white text-lg font-normal '>
                  Do I have to speak Polish?
                </div>
                <div class='w-6 h-6 relative'></div>
              </div>
            </div>
            <div class='p-4 w-full bg-sky-900 rounded-lg flex-col justify-start items-start gap-2.5 flex'>
              <div class='justify-start items-center gap-4 inline-flex'>
                <div class='max--w-[408px]  text-white text-lg font-normal '>
                  How can you explore a Polish city?
                </div>
                <div class='w-6 h-6 relative'></div>
              </div>
            </div>
          </div>
          <div class='max-w-[730px] w-full md:w-1/2  text-white text-lg font-normal '>
            Yes, international students can work in Poland while attending their
            college studies. Non-EU students can work 20 hours maximum in a
            week. Once your study program is completed at a Polish university,
            the conditions change, and you will be required to obtain stay-back
            permits.
          </div>
        </div>
      </div>

      {/* footer */}
      <div className='w-full pt-40'>
        <Footer />
      </div>
    </div>
  );
};

export default StudyInPoland;
