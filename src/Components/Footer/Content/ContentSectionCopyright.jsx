import getCurrentYear from "../../../functions/hookGetCurrentYear";

export default function ContentSectionCopyright() {
  return (
    <div id="copyright-texts">
      <h4>©️{getCurrentYear()} - My Network Family - Tous Droits Réservés</h4>
      <h4>Auteur : Dammaretz Gaëtan - alias GDevWeb - dev frontend</h4>
    </div>
  );
}
