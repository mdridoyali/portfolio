import Title from '@/components/home/Title';
import Project from '@/components/projects/Projy
yieldect';
import React from 'react';

const page = () => {
    return (
        <div className="container mb-16 mx-auto">
            <h2 className='my-16'>
                <Title heading={'Projects'} />
            </h2>

            <div className="project-container my-20">
                {/* Swiper Section */}
                <div className="flex-1 md:border-r-2 border-blue-600 pr-2">
                    <Project />
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
                        <a href="https://github.com/mdridoyali/medi-camp-client-12" target="blank" className="btn btn-sm btn-outline">Client</a>
                        <a href="https://github.com/mdridoyali/medi-camp-server-12" target="blank" className="btn btn-sm btn-outline">Server</a>
                        <a href="https://medicamp-603c8.web.app/" target="blank" className="btn btn-sm bg-blue-600 border-none text-white">Preview</a>
                    </div>
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