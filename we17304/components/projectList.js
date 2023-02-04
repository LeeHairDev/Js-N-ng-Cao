import { projectList } from "../data/data"
const projectListKey = ({projects}) => {
    // console.log(projects);
  return `
    ${ projects.map(item =>{
        return `
             <div>
                    <h4>ProjectId: ${item.id}</h4>
                    <h4>ProjectName: ${item.name}</h4>

             </div>   
        `;
    }).join("")
}
  `
}

export default projectListKey