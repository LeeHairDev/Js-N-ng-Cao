import Header from "../components/header";
import { projectList } from "../data/data";
import projectListKey from "../components/projectList";
const Projectpage = () => {
  return `
    ${Header()}
    Đây là trang project!
    ${projectListKey({projects: projectList})}
    `;
};
export default Projectpage;