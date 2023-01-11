import './style.css'
import Navigo from 'navigo';
// lấy dữ liệu từ bên file contact export  ra 
 import { arrContact } from "./page/contact";  // Đây là kiểu lấy dữ liệu của export thường
import Contact from "./page/contact"; // Đây là kiểu lấy dữ liệu của export default 
import Homepage from "./page/home";
import Aboutpage from "./page/about";
import Categorypage from "./page/category";
import Postpage from "./page/post";
import PostDetailpage from "./page/post-detail";


const render = (container,content)=>{
    container.innerHTML = content();
}

let app = document.querySelector('#app');
app.innerHTML = Contact();

const [start, ,end] = arrContact;

console.log(start, end);

// Nhảy trang không bị load lại 
const router = new Navigo("/",{linksSelector: "a"});

router.on({
  "/": () => render(app, Homepage),
  "/Contact": () => render(app, Contact),
  "/About": () => render(app, Aboutpage),
  "/Category": () => render(app, Categorypage),
  "/Post": () => render(app, Postpage),
  "/PostDetail": () => render(app, PostDetailpage),
});

router.resolve();

