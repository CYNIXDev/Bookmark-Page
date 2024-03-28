/* eslint-disable react/prop-types */
import heroImg from "../assets/images/illustration-hero.svg";

function Hero(props) {
  return (
    //Herro
    <section className="flex flex-col-reverse items-center md:pl-20 lg:pl-40 md:grid md:grid-cols-2">
      <article className="text-center md:text-left px-3 md:px-0 max-w-[480px]">
        <h1 className="content-header text-3xl sm:text-4xl">{props.title}</h1>
        <p className="py-3">{props.content}</p>
        <div className="text-[16px]">
          <button className="btn btn-purple mr-5">Get it on Chrome</button>
          <button className="btn btn-gray">Get it on Firefox</button>
        </div>
      </article>

      <div className="relative self-end flex flex-row justify-end">
        <div className="z-10 justify-self-start">
          <img className="" src={heroImg} alt="Desktop screen" />
        </div>
        <div className="block absolute right-0 top-1/3 justify-self-end bg-SoftBlue h-3/5 w-4/6 rounded-l-full"></div>
      </div>
    </section>
  );
}

export default Hero;

