// Import of the file with styles
import s from "./UserImage.module.css";

// Component creation
const UserImage = () => (
  <img
    src="https://codefinity-content-media.s3.eu-west-1.amazonaws.com/code-1/react/styling/auditor.png"
    alt="User"
    className={s.image}
    width={300}
  />
);

// Component export
export default UserImage;
