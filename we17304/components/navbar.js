import { menuList } from '../data/data'
const navbar = (menu) => {
  return `${menuList.map(menu =>{
    return `
      <li><a href="${menu.path}">${menu.name}</a></li>
    `;
  }).join("")
}
      `;
}

export default navbar

// Gõ nafce + enter để tạo hàm nhanh