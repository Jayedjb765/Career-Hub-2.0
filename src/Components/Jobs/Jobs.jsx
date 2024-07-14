import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localstorage";


const Jobs = () => {
    const jobs  =  useLoaderData();
    const [aplyjobed,setaplyjobed] = useState([]);
    useEffect(()=>{
        const storejobsid =  getStoredJobApplication();
        if(jobs.length > 0){
            // const aplliedjobs = jobs.filter(job => storejobsid.includes(job.id)  );
            const aplliedjobs = [];
            for(const id of storejobsid){
                const job =  jobs.filter(job => job.id ===id);
                if(job){
                    aplliedjobs.push(job)


                }
            }
            // console.log(jobs,storejobsid,aplliedjobs);
            setaplyjobed(aplliedjobs)
        }
    },[])
    return (
        <div>
            <h3 className="text-2xl">Jobs {aplyjobed.length}</h3>
            
        </div>
    );
};

export default Jobs;