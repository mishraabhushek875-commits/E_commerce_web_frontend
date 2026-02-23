import React from 'react'
import Title from '../components/Title'
import { assets } from '../../assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl flex-col md:flew-row gap-16'>
        <Title text1={'ABOUT'} text2={'us'} />

      </div>

      <div className='my-10 flex ' >
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >  
          <p className='' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, amet nemo cum eligendi architecto deleniti suscipit nobis enim odio velit assumenda consequatur.</p>
          <p className='' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias inventore nemo tenetur numquam doloribus rerum mollitia itaque vel, unde sapiente?</p>
          <b className='text-gray-800' >Our Mission</b>
          <p className='' >Our Mission Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum, accusamus accusantium totam dolore cum asperiores soluta ratione. Porro distinctio saepe impedit ut!</p>
        </div>

      </div>
      <div className='text-4xl py-4' >
<Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20' >
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
<b>QUALITY ASSURANCE </b>
<p className='text-gray-600' >WE ass Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tempore saepe!

</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
<b  >CONVINENINCE</b>
<p className='text-gray-600' >with our user-friendly intrface and hastle-free ordering process,shopping </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
<b  >Exceptional customer service</b>
<p className='text-gray-600' >Our team  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, dolores consectetur!
</p>

        </div>

      </div>
      <NewsLetter/>
      
    </div>
  )
}

export default About
