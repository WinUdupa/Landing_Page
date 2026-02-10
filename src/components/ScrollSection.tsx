import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/ScrollSection.css";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Our work is built around patience. We offer a carefully chosen basket of stocks and identify rare short-term opportunities when they appear, while we stay with you through every phase of your investing life. Your wealth and assets are reviewed each year with clarity and honesty. All for a simple fee and no commissions — your money stays with you.";

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const wordsEl = gsap.utils.toArray(".word");

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${words.length * 70}`,
      scrub: true,
      pin: true,

      onUpdate: (self) => {
        const index = Math.floor(self.progress * wordsEl.length);

        wordsEl.forEach((word, i) => {
          word.classList.remove("word-active");
          if (i === index) {
            word.classList.add("word-active");
          }
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="scroll-section">
      <div className="content">
        <p className="scroll-text">
          {words.map((word, i) => (
            <span key={i} className="word">
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}