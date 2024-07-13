import acc from '../../assets/assets/icons/accounts.png'
import bsc from '../../assets/assets/icons/creative.png'
import scl from '../../assets/assets/icons/marketing.png'
import chip from '../../assets/assets/icons/chip.png'

const Jaobcatg = () => {
  return (
    <div className="my-14">
      <h3 className="text-5xl font-bold text-center">Job Category List</h3>
      <h5 className="text-base text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </h5>
     <div className='grid grid-cols-4 gap-2 mt-5'>
     <div className="card bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] shadow-xl">
       <img src={acc} className='w-[50px] ml-8 mt-4' alt="" />
       
        <div className="card-body  ">
          <h2 className="card-title">Account & Finance</h2>
          <p>300 Jobs Available</p>
          
        </div>
      </div>
     <div className="card bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] shadow-xl">
     <img src={bsc} className='w-[50px] ml-8 mt-4' alt="" />
        <div className="card-body  ">
          <h2 className="card-title">Account & Finance</h2>
          <p>300 Jobs Available</p>
          
        </div>
      </div>
     <div className="card bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] shadow-xl">
        <img src={scl} className='w-[50px] ml-8 mt-4' alt="" />
        <div className="card-body  ">
          <h2 className="card-title">Account & Finance</h2>
          <p>300 Jobs Available</p>
          
        </div>
      </div>
     <div className="card bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] shadow-xl">
     <img src={chip} className='w-[50px] ml-8 mt-4' alt="" />  
        <div className="card-body  ">
          <h2 className="card-title">Account & Finance</h2>
          <p>300 Jobs Available</p>
          
        </div>
      </div>
     </div>
    </div>
  );
};

export default Jaobcatg;
