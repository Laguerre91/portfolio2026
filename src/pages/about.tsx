import AboutSection from "../Components/About/AboutSection";
import aboutImage from "../assets/about-image.jpg";

export default function AboutPage() {
  return (
    <>
      <AboutSection
        imageSrc={aboutImage}
        imageAlt="About Section Background"
        title="Something About Me"
        subtitle="I have a degree in audiovisual production. Passionate about technology. I blend design, experience, and technology in the way I develop software."
      />
      {/* Otras secciones debajo */}
    </>
  );
}
