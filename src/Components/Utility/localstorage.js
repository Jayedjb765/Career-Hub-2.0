const getStoredJobApplication = () =>{
    const storejobapplication = localStorage.getItem('job-application');
    if(storejobapplication){
        return JSON.parse(storejobapplication);
    }
    return [];
}

const savejobapplication = id =>{
    const storejobapplication = getStoredJobApplication();
    const exists = storejobapplication.find(jobid => jobid === id);
    if(!exists){
        storejobapplication.push(id);
        localStorage.setItem('job-application',JSON.stringify(storejobapplication));
    }

}

export {savejobapplication,getStoredJobApplication};