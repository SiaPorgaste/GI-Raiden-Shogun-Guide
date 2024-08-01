// Import of the file with styles
import s from "./Section.module.css";

// Component creation
const Section = (props) => <div className={s.container}>{props.children}</div>;

// Component export
export default Section;
