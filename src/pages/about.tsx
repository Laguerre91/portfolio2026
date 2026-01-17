import AboutSection from "../Components/About/AboutSection";

export default function AboutPage() {
  return (
    <>
      <AboutSection
        videoSrc="/videos/about-video.mp4"
        poster="/videos/about-poster.jpg"
        title="Create Immersive Experiences"
        subtitle="Bold ideas, executed with precision."
      />
      {/* Otras secciones debajo */}
    </>
  );
}
