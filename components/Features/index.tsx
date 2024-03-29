import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-12 md:py-16 lg:py-18">
        <div className="container">
          <SectionTitle
            title="Diferenciais UnilCurso"
            paragraph="Oferecemos cursos de alta qualidade, aprendizado flexível, certificações reconhecidas e suporte personalizado. Descubra uma experiência educacional única, constantemente atualizada e conectada a uma vibrante comunidade de aprendizes."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
