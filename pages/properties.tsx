import Dropdown from '@/components/Dropdown'
import FeaturedPropertiesCard from '@/components/FeaturedPropertiesCard'
import MakeItHappen from '@/components/MakeItHappen'
import SearchInput from '@/components/SearchInput'
import Star from '@/components/Star'
import StartJourney from '@/components/StartJourney'
import Head from 'next/head'
import React from 'react'
import { FaCalendarDays, FaHouseChimney, FaLocationPin, FaMoneyBills } from 'react-icons/fa6'
import { FiBox } from 'react-icons/fi'
import { SlLocationPin } from 'react-icons/sl'

const properties = () => {
  return (
    <>
      <Head>
        <title>Estatein | Properties</title>
      </Head>
      <div className='relative sm:pb-36'>
        <div className='pt-7 pb-60 ssm:pb-52 sm:pt-24 sm:pb-72 md:pb-56 lg:pb-56 xl:pt-36 xl:pb-56 border-b border-linkBorder bg-propertyBackground'>
          <div className='flex flex-col gap-y-1 sm:gap-y-3 absolute px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40'>
            <p className='text-white text-2xl sm:text-5xl font-semibold mb-4'>Find Your Dream Property</p>
            <section className='text-secondaryColor sssm:text-sm 540px:text-base sm:text-lg'>
              <p>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world.
                Explore our curated selection of properties, each offering a unique story and</p>
              <p>a chance to redefine your life. With categories to suit every dreamer, your journey </p>
            </section>
          </div>
        </div>
        <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 w-full mt-10 relative sm:absolute sm:-mt-10'>
          <SearchInput />
        </div>
        {/* PROPERTIES DROPDOWN */}
        <div className='shadow-shadow mt-12 sm:mt-12 flex space-y-3 sm:space-y-0 flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-y-3 xl:gap-y-0 xl:grid-cols-5 items-center justify-between bg-primaryBackground mx-5 sm:mx-7 xl:mx-16 2xl:mx-20 3xl:mx-24 rounded-xl gap-x-5'>
          {/* Location Drop Down Menu */}
          <Dropdown
            icon={SlLocationPin}
            text='Location'
            dropDownList={[
              { id: 1, name: 'Location 1' },
              { id: 2, name: 'Location 2' },
              { id: 3, name: 'Location 3' },
            ]}
          />
          {/* Property Drop Down Menu */}
          <Dropdown
            icon={FaHouseChimney}
            text='Propery Type'
            dropDownList={[
              { id: 1, name: 'Property 1' },
              { id: 2, name: 'Property 2' },
              { id: 3, name: 'Property 3' },
            ]}
          />
          {/* Pricing Drop Down Menu */}
          <Dropdown
            icon={FaMoneyBills}
            text='Pricing Range'
            dropDownList={[
              { id: 1, name: 'Location 1' },
              { id: 2, name: 'Location 1' },
              { id: 3, name: 'Location 1' },
            ]}
          />
          {/* Property Drop Down Menu */}
          <Dropdown
            icon={FiBox}
            text='Property Size'
            dropDownList={[
              { id: 1, name: 'Location 1' },
              { id: 2, name: 'Location 1' },
              { id: 3, name: 'Location 1' },
            ]}
          />
          {/* Building Year Drop Down Menu */}
          <Dropdown
            icon={FaCalendarDays}
            text='Build Year'
            dropDownList={[
              { id: 1, name: 'Location 1' },
              { id: 2, name: 'Location 1' },
              { id: 3, name: 'Location 1' },
            ]}
          />
        </div>
        <div className='mx-5 md:mx-8 lg:mx-12 xl:mx-28 2xl:mx-36 3xl:mx-40 grid gap-y-10 sm:gap-y-20 mt-24'>
          <div>
            <Star />
            <h6 className='text-3xl sm:text-5xl text-white my-5'>Discover a World of Possibilities</h6>
            <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
              <div className='grid gap-y-1'>
                <p className='text-[#999999]'>Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home</p>
              </div>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 3xl:gap-x-8'>
            <section>
              <FeaturedPropertiesCard
                src='/images/featuredproperties/SeasideSerenityVilla.png'
                title='Seaside Serenity Villa'
                description='A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood'
                noOfBedroom={4}
                noOfBathroom={4}
                houseType='villa'
                propertyPrice={500000}
              />
            </section>
            <section className='hidden sm:flex'>
              <FeaturedPropertiesCard
                src='/images/featuredproperties/metropolitan.svg'
                title='Metropolitan Haven'
                description='A chic and fully-furnished 2-bedroom apartment with panoramic city views'
                noOfBedroom={2}
                noOfBathroom={2}
                houseType='villa'
                propertyPrice={550000}
              />
            </section>
            <section className='hidden lg:flex'>
              <FeaturedPropertiesCard
                src='/images/featuredproperties/cottage.svg'
                title='Rustic Retreat Cottage'
                description='An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community'
                noOfBedroom={6}
                noOfBathroom={6}
                houseType='villa'
                propertyPrice={1000000}
              />
            </section>
          </div>
        </div>
        <MakeItHappen />
        <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40'>
          <StartJourney />
        </div>
      </div>
    </>
  )
}

export default properties