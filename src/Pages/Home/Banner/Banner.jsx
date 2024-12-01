import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        // pic no1
        <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img1}
      className="w-full rounded-lg" />
    <div className="absolute rounded-lg items-center h-full left-0 top-0   transform bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    
    <div className='text-white space-y-6 pl-4 '>
        <h2 className='text-6xl font-bold'>Affordable Price <br /> For Car Servicing</h2>
        <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
        <div>
        <button className="btn btn-neutral mr-5">Discover more</button>
        <button className="btn btn-outline btn-primary">Latest Project</button>
        </div>
    </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
    
      <a href="#slide4" className="btn btn-circle mr-4">❮</a>
      <a href="#slide2" className="btn btn-circle ">❯</a>
    </div>
  </div>
     {/*Pic 2  */}
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide1" className="btn btn-circle mr-4">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  {/* pic3 */}
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide2" className="btn btn-circle mr-4">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  {/* pic-4 */}
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0flex -translate-y-1/2 transform justify-end">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  {/* pic-5 */}
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img5}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide4" className="btn btn-circle mr-4">❮</a>
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  {/* pic-6 */}
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img6}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide5" className="btn btn-circle mr-4">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;