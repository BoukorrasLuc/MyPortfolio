// Scss
import "./SectionOneSousInfo.scss";

const sectionOneSousinfo = ({ texte, texteTwo, texteThree, className }) => {
  return (
    <div className={className}>
      <span>{texte}</span>
      <span>
        {texteTwo}
        {texteThree}
      </span>
    </div>
  );
};

export default sectionOneSousinfo;
