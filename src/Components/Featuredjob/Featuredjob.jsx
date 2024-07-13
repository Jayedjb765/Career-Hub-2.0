import { useEffect, useState } from "react";
import Featurekb from "../Featurejb/Featurekb";


const Featuredjob = () => {
    const [jobs,setjobs] = useState([]);
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
            jobs.map(job => <Featurekb
            key={job.id}
            job={job}
            ></Featurekb>)
        }

      </div>
            
        </div>
    );
};

export default Featuredjob;