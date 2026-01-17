import AboutSection from "../Components/About/AboutSection";
import aboutImage from "../assets/about-image.jpg";

export default function AboutPage() {
  return (
    <>
      <AboutSection
        imageSrc={aboutImage}
        imageAlt="About Section Background"
        title="Create Immersive Experiences"
        subtitle="Bold ideas, executed with precision."
      />
      {/* Otras secciones debajo */}
    </>
  );
}
