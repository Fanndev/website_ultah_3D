import { useEffect, useRef } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./Interface/Header";
import { EventDetails } from "./Interface/EvenDetails";
import { Gallery } from "./Interface/Gallery";
import { CommentForm } from "./Interface/Comments/CommentForm";
import { CommentList } from "./Interface/Comments/CommentList";
import { ThankYou } from "./Interface/ThankYou";

export function Sections() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionsRef.current) return;

    const sections = sectionsRef.current.querySelectorAll("section");

    sections.forEach((section) => {
      gsap.fromTo(
        section.children,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionsRef} className="relative z-10">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <Header />
      </section>

      {/* Event Details Section */}
      <section className="min-h-screen flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <EventDetails />
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen flex items-center justify-center">
        <Gallery />
      </section>

      {/* Comments Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="w-full max-w-4xl px-4">
          <CommentForm />
          <CommentList />
        </div>
      </section>

      {/* Thank You Section */}
      <section className="min-h-screen flex items-center justify-center">
        <ThankYou />
      </section>
    </div>
  );
}
