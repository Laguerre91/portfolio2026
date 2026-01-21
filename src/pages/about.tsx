import AboutSection from "../Components/About/AboutSection";
import ExperienceSection from "../Components/About/ExperienceSection";
import aboutImage from "./../assets/about-image.jpg";

export default function AboutPage() {
        console.log("🚀 ~ AboutPage ~ aboutImage:", aboutImage)
  return (
    <>
      <AboutSection
        imageSrc={aboutImage}
        imageAlt="A photo of me"
        title="Something About Me"
        subtitle="I have a degree in audiovisual production. Passionate about technology. I blend design, experience, and technology in the way I develop software."
      />
      <ExperienceSection />
    </>
  );
}
