// Import of all components
import Section from "../Section/Section";
import UserImage from "../UserImage/UserImage";
// Import the UserInfo component below
import UserInfo from "../UserInfo/UserInfo";

// Creation of the whole app
const App = () => (
  <Section>
    <UserImage />
    <UserInfo />
  </Section>
);

// Component export
export default App;
