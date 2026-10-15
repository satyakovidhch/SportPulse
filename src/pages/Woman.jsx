const women = [
  {
    id: 1,
    name: "Nike Cadence Duo",
    description: "Stylish glasses for a modern look.",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2355c432-d46e-45b1-9edd-964cc7c80853/NIKE+CADENCE+DUO.png"
  },
  {
    id: 2,
    name: "Nike Sportswear Classic",
    description: "Comfortable casual t-shirt for everyday wear.",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c00460c9-5483-4f74-8d0b-760ded8385f7/W+NSW+CLASSIC+SS+TEE.png"
  },
  {
    id: 3,
    name: "Jordan Sport",
    description: "Lightweight shorts for casual activities.",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6371f440-718a-4190-b0a9-a90d32aa39b8/W+J+SPT+DMND+SHORT+4+IN.png"
  },
  {
    id: 4,
    name: "Nike Zoom Vomero 5",
    description: "Comfortable shoes for everyday use.",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31f540a2-8fcd-4f64-9b9a-7417a3754beb/W+NIKE+ZOOM+VOMERO+5.png"
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
];

function Woman(){
    return(
        <div className="container">
            <div className="row my-3">
                {women.map(item => (
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
export default Woman