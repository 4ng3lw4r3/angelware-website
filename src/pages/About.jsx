import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex justify-center pt-40 pb-40 px-5">
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div className="flex flex-col items-center justify-center text-center mt-12 gap-16">
          <div className="widget">
            <motion.p
              className="text-base leading-10 lg:leading-10 lg:text-xl xl:text-xxl"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={textVariants}
            >
              I live sound and was awarded a degree in Audio Engineering and
              Production at Catalyst in Funkhaus, Berlin.
              <br />
              <br />
              My other obsession is Computer Science. I am coding websites for
              lovely people, and studying Artificial Intelligence.
              <br />
              <br />
              I was born to love. I find joy in expressing dance and song. I
              like to be in spa, beach, snow, nature and mountains. Like to
              taste negroni, kimchi and champagne, and smell terroni and ocean.
              <br />
              <br />
              I believe in a Solar Punk futuristic human setting. I wish our
              civilization will be free from greedy entities and not leave Earth
              in flames.
              <br />
              <br />
              I was lucky enough to be introduced to building modular
              synthesizers by my friend. It is quite a part of my life too, and
              hopefully, I will create my electronic instrument named Angelware.
              <br />
              <br />
              Thank you for visiting, and have the most beautiful day, Angel.
              <br />
              <br />♡
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
