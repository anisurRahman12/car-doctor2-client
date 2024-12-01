
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2'>
          <img src={person}
            className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts}
            className="w-1/2   border-8 border-white rounded-lg shadow-2xl" />
          </div>
          <div className='lg:w-1/2 space-y-3 p-4'>
          <h3 className='text-3xl text-orange-600'>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <p >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get more info</button>
          </div>
        </div>
      </div>
    );
};

export default About;