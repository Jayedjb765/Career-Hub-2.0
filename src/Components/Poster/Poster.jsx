import userr from '../../assets/assets/images/user.png'
const Poster = () => {
  return (
    <div>
      <div className="hero bg-base-200 mb-12 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={userr}
            className="max-w-sm rounded-lg shadow-2xl w-[700px]"
          />
          <div>
            <h1 className="text-5xl font-bold"> <p>One Step<br/>Closer To Your<br/><span className='text-blue-400'>Dream Job</span> </p></h1> 
            <p className="py-3 text-base">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
