import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  // Safe window height check for SSR
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh(); // Set on mount
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  const { scrollY } = useScroll();

  // Scroll mapping: 
  // As the user scrolls from 0 to 100vh (the Hero height), 
  // the text precisely fades in and slides up. We stagger the start/end points.

  // Section 1: Context Label
  const y1 = useTransform(scrollY, [0, vh * 0.4], [80, 0]);
  const opacity1 = useTransform(scrollY, [0, vh * 0.3], [0, 1]);

  // Section 2: Education
  const y2 = useTransform(scrollY, [vh * 0.1, vh * 0.5], [80, 0]);
  const opacity2 = useTransform(scrollY, [vh * 0.1, vh * 0.4], [0, 1]);

  // Section 3: Experience
  const y3 = useTransform(scrollY, [vh * 0.2, vh * 0.6], [80, 0]);
  const opacity3 = useTransform(scrollY, [vh * 0.2, vh * 0.5], [0, 1]);

  // Section 4: Focus
  const y4 = useTransform(scrollY, [vh * 0.3, vh * 0.7], [80, 0]);
  const opacity4 = useTransform(scrollY, [vh * 0.3, vh * 0.6], [0, 1]);

  return (
    <section className="h-screen w-full bg-white text-black font-sans px-6 md:px-12 lg:px-16 overflow-hidden flex items-start pt-28 md:pt-32 lg:pt-40 justify-center relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 w-full max-w-[1600px] mx-auto">

        {/* Left Column: Context Label */}
        <motion.div
          className="md:col-span-3 lg:col-span-3 pt-2"
          style={{ y: y1, opacity: opacity1 }}
        >
          <h2 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest">
            Background & Data
          </h2>
        </motion.div>

        {/* Right Column: The Data List */}
        <div className="md:col-span-9 lg:col-span-9 flex flex-col gap-4 md:gap-6">

          {/* 01. EDUCATION */}
          <motion.div style={{ y: y2, opacity: opacity2 }} className="flex flex-col gap-1">
            <h3 className="font-sans text-xs md:text-sm font-bold uppercase tracking-wide opacity-100 mb-1">
              01. Education
            </h3>
            <div className="flex flex-col gap-1">
              <p className="font-sans text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-tight">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="font-sans text-base md:text-lg lg:text-xl font-normal text-black/70 leading-tight tracking-tight">
                Specialized in Web Development, Data Structures & AI <br className="hidden md:block"/>
                (2023 – 2026)
              </p>
            </div>
          </motion.div>

          {/* 02. INTERESTS */}
          <motion.div style={{ y: y3, opacity: opacity3 }} className="flex flex-col gap-1">
            <h3 className="font-sans text-xs md:text-sm font-bold uppercase tracking-wide opacity-100 mb-1">
              02. Interests
            </h3>

            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-tight">
                  Artificial Intelligence & Machine Learning
                </p>
                <p className="font-sans text-base md:text-lg lg:text-xl font-normal text-black/70 leading-tight tracking-tight">
                  Exploring how intelligent systems can automate and enhance real-world processes
                </p>
              </div>

              <div>
                <p className="font-sans text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-tight">
                  Full Stack Development
                </p>
                <p className="font-sans text-base md:text-lg lg:text-xl font-normal text-black/70 leading-tight tracking-tight">
                  Passionate about building scalable and interactive web applications
                </p>
              </div>

              <div>
                <p className="font-sans text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-tight">
                  3D Web & Creative Development
                </p>
                <p className="font-sans text-base md:text-lg lg:text-xl font-normal text-black/70 leading-tight tracking-tight">
                  Creating immersive digital experiences using modern web technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* 03. FOCUS */}
          <motion.div style={{ y: y4, opacity: opacity4 }} className="flex flex-col gap-1">
            <h3 className="font-sans text-xs md:text-sm font-bold uppercase tracking-wide opacity-100 mb-1">
              03. Focus
            </h3>
            <p className="font-sans text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-tight max-w-3xl">
              On a mission to master technology, build intelligent systems, and evolve into a world-class developer driven by logic and innovation.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;