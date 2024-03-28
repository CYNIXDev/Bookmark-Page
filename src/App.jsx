/* eslint-disable react/jsx-key */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Content from "./component/Content";
import Feature from "./component/Feature";
import Card from "./component/Card";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import data from "./assets/data";

function App() {
  const {
    contents: { hero, feature, download, faqsHeader },
    featureNav,
    card,
    faqs,
  } = data;
  const [showFeature, setShowFeature] = useState(featureNav[0]);

  function featureHandle(itemId) {
    const data = featureNav.filter((e) => e.id == itemId);
    setShowFeature(data[0]);
  }

  const cusStyle = ["lg:mb-16", "lg:my-8", "lg:mt-16"];

  return (
    <>
      <header className="w-screen sticky z-50">
        <Header />
      </header>

      <main>
        <Hero
          key={uuidv4()}
          title={hero.title}
          content={hero.content}
          type={"left"}
        />
        <Content title={feature.title} content={feature.content} />
        {/* <!-- Navigation --> */}

        {/* {featureNav.map(e => {
          <FeatureNav key={uuidv4()} id={e.id} navTitle={e.navTitle} featureHandle={featureHandle} />
        })} */}

        <nav className="mt-11 w-screen">
          <ul className="flex flex-col justify-center items-center md:flex-row cursor-pointer">
            {featureNav.map((e) => {
              return (
                <li
                  onClick={() => featureHandle(e.id)}
                  key={uuidv4()}
                  className={
                    e.id === showFeature.id
                      ? "px-10 py-8 transition-all text-SoftRed hover:text-SoftRed border-b-2 hover:border-SoftRed border-SoftRed"
                      : "px-10 py-8 transition-all hover:border-SoftRed border-b-2 hover:text-SoftRed"
                  }
                >
                  {e.navTitle}
                </li>
              );
            })}
          </ul>
        </nav>
        <Feature
          id={showFeature.id}
          title={showFeature.contentTitle}
          content={showFeature.content}
          img={showFeature.img}
          link={showFeature.link}
        />

        {/* Download */}
        <section className="lg:mt-[150px]">
          {/* Content Header*/}
          <Content title={download.title} content={download.content} />

          {/* Download Section */}
          <div className="flex justify-center items-center flex-wrap gap-10 mt-10">
            {card.map((e, index) => {
              return (
                <Card
                  key={uuidv4()}
                  id={e.id}
                  img={e.img}
                  browser={e.browser}
                  minVer={e.mimVer}
                  link={e.link}
                  cusStyle={cusStyle[index]}
                />
              );
            })}
          </div>
        </section>

        {/* Q&A */}
        <section>
          <Content title={faqsHeader.title} content={faqsHeader.content} />
          <article className="mx-auto mt-8 flex flex-col justify-center items-center w-10/12 md:w-8/12 lg:w-5/12 border-b-2 ">
            {faqs.map((e) => {
              return <Faq key={uuidv4()} fq={e.fq} answer={e.answer} />;
            })}
          </article>
          <div className="flex justify-center my-10">
            <button className="btn btn-purple">More info</button>
          </div>
        </section>

        {/* Contact Us */}
        <section className="flex justify-center items-center bg-SoftBlue mt-28">
          <section className="w-8/12 h-[375px] flex flex-col justify-center items-center text-center gap-6">
            <p className="text-white tracking-[0.3em]">35,00+ already joined</p>
            <h2 className="w-[350px] content-header text-white">
              Stay up-to-date with what
              <br />
              we are doing
            </h2>
            <div className="grid grid-cols-1 w-full md:flex md:flex-row justify-center items-center  gap-x-5">
              <input
                className="px-5 py-2 rounded-md text-sm"
                type="text"
                placeholder="Enter your email adderess"
              />
              <button className="btn btn-red">Contact Us</button>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
