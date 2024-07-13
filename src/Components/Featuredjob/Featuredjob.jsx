import { useEffect, useState } from "react";
import Featurekb from "../Featurejb/Featurekb";



const Featuredjob = () => {
    const [jobs,setjobs] = useState([]);
    const [datalength,setdatalength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data))
    },[])
    return (
        <div>
            <h3 className="text-5xl font-bold text-center">Job Category List</h3>
      <h5 className="text-base text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </h5>
      <div className="grid lg:grid-cols-2 gap-6">
        {
            jobs.slice(0,datalength).map(job => <Featurekb
            key={job.id}
            job={job}
            ></Featurekb>)
        }

      </div>
      <div className={datalength === jobs.length && 'hidden'} >
        <button onClick={()=>setdatalength(jobs.length)} className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white mt-5 text-center items-center">Show All</button>
      </div>
            
        </div>
    );
};

export default Featuredjob;