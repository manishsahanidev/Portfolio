import projectOne from "../assets/Portfolio/projectOne.png";
import projectTwo from "../assets/Portfolio/projectTwo.png";
import projectThree from "../assets/Portfolio/projectThree.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: projectOne,
      demo: "https://tictoetac-xox.netlify.app/",
      code: "https://github.com/manishsahanidev/PRODIGY_WD_3.git",
    },
    {
      id: 2,
      src: projectTwo,
      demo: "https://xspace-web.netlify.app/",
      code: "https://github.com/manishsahanidev/PRODIGY_WD_1.git",
    },
    {
      id: 3,
      src: projectThree,
      demo: "https://stopwatch-io.netlify.app/",
      code: "https://github.com/manishsahanidev/PRODIGY_WD_2.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
