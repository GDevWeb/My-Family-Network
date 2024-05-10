import SectionHighlight from "../Sections/SectionHighlight";
import SectionUsual from "../Sections/SectionUsual";

export default function Home() {
  return (
    <>
      <SectionHighlight sectionTitle={"Meilleur articles"} />
      <SectionUsual sectionTitle={"Derniers Articles"} />
      <SectionUsual sectionTitle={"Articles les plus vus"} />
    </>
  );
}
