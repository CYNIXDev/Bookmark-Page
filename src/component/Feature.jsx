/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function Feature(props) {
  return (
    // <!-- Feature -->
    <section className="grid md:grid-cols-2 py-5 gap-10 lg:pr-5 items-center">
      
      {/* <!-- Image --> */}
      <div className="relative grid md:justify-self-start w-full">
        <img src={props.img} alt="" className="z-10 justify-self-center w-4/5" />
        <div className="absolute bg-SoftBlue w-4/5 h-4/5 rounded-r-full top-[30%]"></div>
      </div>

      {/* <!-- Content --> */}
      <article className="content-box justify-self-center lg:px-5">
        <h2 className="content-header">{props.title}</h2>
        <p>{props.content}</p>
        <a href={props.link}>
          <button className="btn btn-purple">More Info</button>
        </a>
      </article>
    </section>
  );
}

export default Feature;
