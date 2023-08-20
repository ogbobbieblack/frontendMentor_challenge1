import mobileLogo from "./images/image-hero-mobile.png";
import desktopLogo from "./images/image-hero-desktop.png";
import client1 from "./images/client-audiophile.svg";
import client2 from "./images/client-databiz.svg";
import client3 from "./images/client-maker.svg";
import client4 from "./images/client-meet.svg";


const Hero = () => {
    const clients = [client1, client2, client3, client4];
    return (
      <>
        <main className="flex flex-col gap-8 md:gap-0 md:flex-row-reverse items-center md:w-[80%] mx-auto md:h-[85%]">
          <section className="md:w-1/2 overflow-hidden h-full ">
            <img
              src={mobileLogo}
              alt="hero image"
              className="md:hidden block h-full"
            />
            <img
              src={desktopLogo}
              alt="hero image"
              className="hidden md:block h-full w-full object-contain"
            />
          </section>
          <section className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl tracking-wider font-bold mb-8">
              Make remote work
            </h1>
            <p className="whitespace-wrap mb-auto">
              Get your team in sync no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div>
              <button className="px-4 py-2 cursor-pointer bg-black text-white rounded-xl my-6">
                Learn More
              </button>
            </div>

            <ul className="flex items-center gap-4 md:absolute md:bottom-5">
              {clients.map((client) => {
                return (
                  <li key={client}>
                    <a href={`#${client}`}>
                      <img src={client} alt="partners" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
      </>
    );
}
 
export default Hero;