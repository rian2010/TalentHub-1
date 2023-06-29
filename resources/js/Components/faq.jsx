import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle toggle of FAQ item
  const handleToggle = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffsetTop = document.getElementById('scroll-animation').offsetTop;

      if (scrollPosition > elementOffsetTop - windowHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <motion.div 
        id="scroll-animation"
      initial={{ x: "100%", opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 2 }}
        className="container px-4 mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-8 text-center">
            Provide some additional information with this FAQ Accordion.
          </h2>
          <div className="flex flex-wrap -m-8">
            <div className="w-full p-8">
              <div className="flex flex-wrap -m-1.5">
                {faqData.map((item, index) => (
                  <div className="w-full p-1.5" key={index}>
                    <a
                      className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200"
                      onClick={() => handleToggle(index)}
                    >
                      <div className="flex flex-wrap items-center justify-between -m-2">
                        <div className="w-auto p-2">
                          <h3 className="font-semibold tracking-tight">
                            {item.question}
                          </h3>
                        </div>
                        <div className="w-auto p-2">
                          <svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335"
                              stroke="#171A1F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <CSSTransition
                        in={expandedItems.includes(index)}
                        timeout={100}
                        classNames={{
                          enter: "fade-enter",
                          enterActive: "fade-enter-active",
                          exit: "fade-exit",
                          exitActive: "fade-exit-active",
                        }}
                        unmountOnExit
                      >
                        <p
                          className="mt-6 tracking-tight"
                          style={{
                            opacity: expandedItems.includes(index) ? 1 : 0,
                            transition: "opacity 300ms",
                          }}
                        >
                          {item.answer}
                        </p>
                      </CSSTransition>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
  );
}

const faqData = [
  {
    question: "How to register internship?",
    answer:
      "Please log in first with the Polybatam learning account, select the internship vacancy you want to apply for, fill in the required data, and wait for confirmation.",
  },
  {
    question: "How to log in to Polibatam TalentHub?",
    answer:
      "Students can log in using a learning account. For the industry, you can register first in the Register section, then wait for confirmation.",
  },
  {
    question: "How to upload data to Polibatam TalentHub?",
    answer:
      "Go to the Profile page, and from the Competence section, upload the required data.",
  },
];
