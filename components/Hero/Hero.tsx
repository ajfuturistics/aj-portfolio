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
              <a
                className=" transition-all duration-150 hover:scale-110 "
                href="mailto:abhishekjadhav2310@gmail.com"
              >
                <AiFillMail size={28} />
              </a>
              <a
                className=" transition-all duration-150 hover:scale-110 "
                href="https://github.com/ajfuturistics"
              >
                <AiFillGithub size={28} />
              </a>
              <a
                className=" transition-all duration-150 hover:scale-110 "
                href="https://www.linkedin.com/in/abhishek-jadhav-94553a20a"
              >
                <AiFillLinkedin size={28} />
              </a>
              <a
                className=" transition-all duration-150 hover:scale-110 "
                href="https://twitter.com/mr_aj2310"
              >
                <AiFillTwitterCircle size={28} />
              </a>
              <a
                className=" transition-all duration-150 hover:scale-110 "
                href="https://www.instagram.com/mr_aj2310"
              >
                <AiOutlineInstagram size={28} />
              </a>
            </div>
          </div>

          <a
            download
            href="resume.pdf"
            className=" transition-all duration-150 hover:scale-110 "
          >
            Download Resume
          </a>
        </div>

        <Avatar />
      </div>
    </section>
  );
};

export default Hero;
