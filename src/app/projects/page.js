import Title from '@/components/home/Title';
import Project from '@/components/projects/Project';
import React from 'react';


import img1 from '@/assets/medi/1.png'
import img2 from '@/assets/medi/2.png'
import img3 from '@/assets/medi/3.png'
import img4 from '@/assets/medi/4.png'
import img5 from '@/assets/medi/5.png'

import meetImg1 from '@/assets/meetwave/1.png'
import meetImg2 from '@/assets/meetwave/2.png'
import meetImg3 from '@/assets/meetwave/3.png'
import meetImg4 from '@/assets/meetwave/4.png'
import meetImg5 from '@/assets/meetwave/5.png'
import { Button } from '@/components/ui/button';


const page = () => {
    return (
        <div className="container mb-16 mx-auto">
            <h2 className='my-16'>
                <Title heading={'Projects'} />
            </h2>

            <div className="project-container my-20">
                {/* Swiper Section */}
                <div className="flex-1 md:border-r-2 border-blue-600 pr-2">
                    <Project  img1={img1} img2={img2} img3={img3} img4={img4} img5={img5}/>
                </div>
                {/* Project Details */}
                <div className="project-content">
                    <h2 className="text-2xl border-l-2 border-blue-600 font-bold">Medi Camp</h2>
                    <p className="font-semibold">Summary of the site</p>
                    <hr />
                    <p>  A versatile medical camp platform enabling seamless interaction for Participants, Organizers, and Health Professionals. Participants register, manage payments via Camp K Stripe, and track their history. Organizers effortlessly oversee camp details, confirm payments, and manage their own events. Health Professionals express interest in upcoming camp.</p>
                    
                    <div className="flex items-center">
                        <p className="font-semibold">Technology used:</p>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex gap-2 mt-2">
                        <Button href="https://github.com/mdridoyali/medi-camp-client-12" target="blank" className="btn btn-sm bg-blue-600 border-none text-white">Client</Button>
                        <Button href="https://github.com/mdridoyali/medi-camp-server-12" target="blank" className="btn btn-sm bg-blue-600 border-none text-white">Server</Button>
                        <Button href="https://medicamp-603c8.web.app/" target="blank" className="btn btn-sm bg-blue-600 border-none text-white">Preview</Button>
                    </div>
                </div>
            </div>

            <hr/>

            {/* Second project */}
            <div className="project-container my-20 flex-row-reverse">
                {/* Project Details */}
                <div className="project-content">
                    <h2 className="text-2xl border-l-2 border-blue-600 font-bold">MeetWave</h2>
                    <p className="font-semibold">Summary of the site</p>
                    <hr />
                    <p>MeetWave is a full-featured online meeting platform that enables seamless virtual collaboration through video, audio, chat, and document sharing. With powerful admin controls and flexible meeting options, it is designed for both professional and personal use. The platform ensures a smooth and secure user experience, making remote communication more efficient and interactive.</p>
                    
                    <div className="flex items-center">
                        <p className="font-semibold">Technology used:</p>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex gap-2 mt-2">
                        <Button href="https://github.com/mdridoyali/medi-camp-client-12" target="blank" className="btn btn-sm bg-blue-600 border-none text-white">Client</Button>
                        <Button href="https://github.com/mdridoyali/medi-camp-server-12" target="blank" className="btn btn-sm bg-blue-600 border-none text-white">Server</Button>
                        <Button href="https://medicamp-603c8.web.app/" target="blank" className="btn btn-sm bg-blue-600 border-none text-white">Preview</Button>
                    </div>
                </div>
                  {/* Swiper Section */}
                  <div className="flex-1  md:border-r-2 border-blue-600 pr-2">
                    <Project img1={meetImg1} img2={meetImg2} img3={meetImg3} img4={meetImg4} img5={meetImg5} />
                </div>
            </div>

        </div>
    );
};

export default page;















// import Title from '@/components/home/Title';
// import Project from '@/components/projects/project';
// import React from 'react';

// const page = () => {
//     return (
//         <div className="mb-16 w-11/12 md:w-10/12 mx-auto ">
            
//             <h2 className='my-16'><Title heading={'Projects'} /></h2>

//             <div data-aos="flip-left" className="md:flex my-20">
//                 <div className="flex-1 grid grid-cols-2 gap-3 md:border-r-2  border-blue-600  pr-2">
//                     <Project />
//                 </div>
//                 <div className="flex-1 mt-5 md:mt-0 space-y-2 px-2">
//                     <h2 className="text-2xl border-l-2  border-blue-600  font-bold ">Medi Camp</h2>
//                     <p className="font-semibold">Summary of the site</p>
//                     <hr />
//                     <p>
//                         A versatile medical camp platform enabling seamless interaction for Participants, Organizers, and Health Professionals. Participants register, manage payments via Camp K Stripe, and track their history. Organizers effortlessly oversee camp details, confirm payments, and manage their own events. Health Professionals express interest in upcoming camp.
//                     </p>
//                     <div className="flex items-center ">
//                         <p className="font-semibold">Technology used:</p>
//                         <div className="flex ">
//                             {/* <img className="w-8 h-8 rounded-full" src={react} alt="" />
//                             <img className="w-8 h-8 rounded-full" src={firebase} alt="" />
//                             <img className="w-8 h-8 rounded-full" src={tailwind} alt="" />
//                             <img className="w-8 h-8 rounded-full" src={material} alt="" />
//                             <img className="w-8 h-8 rounded-full" src={node} alt="" />
//                             <img className="w-8 h-8 rounded-full" src={express} alt="" />
//                             <img className="w-8 h-8 rounded-full" src={mongodb} alt="" /> */}

//                             {/* <Project /> */}

//                         </div>
//                     </div>
//                     <div className="flex gap-2">
//                         <a href="https://github.com/mdridoyali/medi-camp-client-12" target="blank" className="btn btn-sm btn-outline">Client</a>
//                         <a href="https://github.com/mdridoyali/medi-camp-server-12" target="black" className="btn btn-sm btn-outline">Server</a>
//                         <a href="https://medicamp-603c8.web.app/" target="blank" className="btn btn-sm bg-blue-600 border-none outline-none hover:text-black text-white">Preview</a>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default page;