import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Featurekb = ({job}) => {
    const {id,logo,company_name,job_title,remote_or_onsite,job_type,location,salary} = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl  flex space-y-3 mb-6">
      <img src={logo} className="w-[150px] mt-3 ml-3" alt="" />
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h2 className="text-xl">{company_name}</h2>
        <div>
            <button className="mr-5 border-2  border-sky-500 py-2 rounded px-5 text-blue-500">{remote_or_onsite}</button>
            <button className="mr-5 border-2  border-sky-500 py-2 rounded px-5 text-blue-500">{job_type}</button>
            
        </div>
        <div className="flex-grow flex ">
            <h3 className="text-xl flex mr-8"><IoLocationOutline className="mt-1 mr-3"></IoLocationOutline> {location}</h3>
            <h3 className="text-xl flex"><HiOutlineCurrencyDollar className="mt-1 mr-3"></HiOutlineCurrencyDollar>{salary}</h3>
            

        </div>
        <div className="card-actions ">
       <Link to={`/job/${id}`}>
       <button className="btn bg-sky-400 text-white  font-extrabold  "> View Details</button>
       </Link>
         
        </div>
      </div>
    </div>
    );
};
Featurekb.propTypes = {

    job : PropTypes.object.isRequired
}

export default Featurekb;