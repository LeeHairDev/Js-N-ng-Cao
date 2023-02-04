import './style.css'
// lấy dữ liệu từ bên file contact export  ra 
 // import { arrContact } from "./page/contact-page";  // Đây là kiểu lấy dữ liệu của export thường
import Contact from "./page/contact-page"; // Đây là kiểu lấy dữ liệu của export default 
import Homepage from "./page/home-page";
import Aboutpage from "./page/about-page";
import Categorypage from "./page/category-page";
import Postpage from "./page/post-page";
import PostDetailpage from "./page/post-detail-page";
import Projectpage from "./page/project-page";

import { router } from "./libs";

const render = (container,content)=>{
    container.innerHTML = content();
}

let app = document.querySelector('#app');
app.innerHTML = Contact();


// Nhảy trang không bị load lại 


router.on({
  "/": () => render(app, Homepage),
  "/Contact": () => render(app, Contact),
  "/About": () => render(app, Aboutpage),
  "/Category": () => render(app, Categorypage),
  "/Post": () => render(app, Postpage),
  "/PostDetail": () => render(app, PostDetailpage),
  "/Project": () => render(app, Projectpage),
});

router.resolve();

