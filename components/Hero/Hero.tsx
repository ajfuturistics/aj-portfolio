import Avatar from "./Avatar";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillMail,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="md:h-[50vh] lg:h-[75vh] flex justify-center items-center">
      <div className="lg:w-[90vw] flex flex-col-reverse items-center justify-center lg:flex-row gap-4 lg:gap-0">
        <div className="w-full md:w-[70%] lg:w-[120%] h-full flex flex-col gap-4 justify-center items-start dark:text-emerald-400">
          <h1 className="text-3xl lg:text-6xl font-semibold grow ">
            Hi, I&apos;m Abhishek, Full Stack Developer
          </h1>
          <p className="lg:text-xl font-light">
            I have 1.6 years of experience as a talented front-end developer but
            minimal background in the backend. I like expanding my knowledge and
            growing personally.
          </p>

          <div className="flex flex-col gap-2">
            <p className="lg:text-xl ">Follow Me: </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://github.com">
                <AiFillGithub size={28} />
              </a>
              <a href="https://twitter.com">
                <AiFillTwitterCircle size={28} />
              </a>
              <a href="https://linkedin.com">
                <AiFillLinkedin size={28} />
              </a>
              <a href="https://instagram.com">
                <AiOutlineInstagram size={28} />
              </a>
              <a href="mailto:abhishekjadhav2310@gmail.com">
                <AiFillMail size={28} />
              </a>
            </div>
          </div>

          <a download href="resume.pdf" className="hover:scale-110">
            Download Resume
          </a>
        </div>

        <Avatar />
      </div>
    </section>
  );
};

export default Hero;
