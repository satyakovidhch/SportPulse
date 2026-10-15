const Men = [
  {
    id: 1,
    name: "Nike Air",
    description: "Men's Open-Hem Fleece Pants",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f3289d69-5eeb-44fc-a3b1-a2e71578085f/M+NK+AIR+BB+OH+PANT.png"
  },
  {
    id: 2,
    name: "Nike Solo Fleece",
    description: "Men's Full-Zip Hoodie.",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/532813bc-8a1c-4546-a3ad-b25dbd46c21c/M+NK+SOLO+BB+FZ+HD.png"
  },
  {
    id: 3,
    name: "Nike Stride",
    description: "Lightweight shorts for casual activities.",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/447b18a0-2d3e-450a-9e8c-a3fad919d043/M+NK+DF+STRIDE+2IN1+7IN+SHORT.png"
  },
  {
    id: 4,
    name: "Air Jordan 5 Retro Halloween",
    description: "Comfortable shoes for everyday use.",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fa7291c3-74c5-4b1a-a5ad-7edff217d6fc/AIR+JORDAN+5+RETRO+OG.png"
  },
  {
    id: 5,
    name: "Nike Club",
    description: "Fashionable accessories to complete your outfit.",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d9cb54a8-cc01-4fb2-ac28-27a62ab0c93f/U+NK+CLUB+CAP+U+CB+SWSH+L.png"
  },
  {
    id: 6,
    name: "Nike Everyday Elevated",
    description: "Ankle Socks (3 Pairs)",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/64d03225-91fe-400f-99c7-59cab3ffd178/U+NK+ED+ELVD+ANK+3P+FUTRA+-144.png"
  },
  {
    id: 7,
    name: "Nike Air Force 1 '07",
    description: "Men's Shoes",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a8e62598-1ccd-4dc3-9c5a-7e15aba14cab/AIR+FORCE+1+%2707.png"
  },
  {
    id: 8,
    name: "Air Jordan 1 Mid SE",
    description: "Men's Shoes",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1f4c787-3674-4d0a-a754-454d1fbff87a/AIR+JORDAN+1+MID+SE.png"
  },
  {
    id: 9,
    name: "Nike Tech",
    description: "Men's Fleece Windrunner Full-Zip Jacket",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2730b65c-d518-40b3-95dd-797988f1b867/M+NK+TCH+FLC+FZ+WR+HOODIE.png"
  },
  {
    id: 10,
    name: "Ja 4 Dark Mode",
    description: "Basketball Shoes",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bc22484-631e-4c9d-acf5-aecbbb0fc676/JA+4.png"
  },
  {
    id: 11,
    name: "Air Jordan 7 Retro Tennis Day",
    description: "Men's Shoes",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9aa14f9e-8633-4899-ab4e-0205c6befaa4/AIR+JORDAN+7+RETRO.png"
  },
  {
    id: 12,
    name: "Nike Air VaporMax Plus",
    description: "Basketball Shoes",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/330596f7-e958-4a2d-8b60-00800341c17a/AIR+VAPORMAX+PLUS.png"
  },
];


function Man(){
    return(
        <div className="container">
            <div className="row my-3">
                {Men.map(item => (
                    <div className="col-md-4 mb-3" key={item.id}>
                        <div className="card ">
                            <img alt="" src={item.image} className="card-img-top"/>
                            <div className="card-body">
                                <h3> {item.name} </h3>
                                <p> {item.description} </p>
                                <button className="btn btn-primary"> Add To Cart </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Man