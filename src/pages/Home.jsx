function Home(){
    return(
        <div>
            <div>
                <h3 className="bg-dark text-light text-center p-3"> SportPulse Store </h3>
                    <div className="card text-bg-dark" style={{width:"90%", margin:"40px auto",}}>
                    <img style={{height:"300px", objectFit:"cover",}}
                    src="https://static.vecteezy.com/system/resources/previews/001/330/139/original/realistic-soccer-or-football-in-net-with-free-vector.jpg" className="card-img" alt="..."/>
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <div className="rounded-3 bg-dark opacity-75 text-light p-5 text-center" style={{width:"90%",}}> 
                             <h5 className="card-title"> Welcome To SportsPulse </h5>
                            <p className="card-text"> Where we have products made just for you </p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="container text-center">
                    <h2 className="my-4 text-success"> Featured Products </h2>
                    <div className="row mb-3">

                        <div className="col-md-3">
                            <img alt="h" src="https://th.bing.com/th/id/R.f0372fc52984f64c5083c36c7f1ab87d?rik=CNEROgoDFu5y6g&riu=http%3a%2f%2fwww.meetidea.com%2fimages%2fthumbs%2f0000767_air-jordan-4-retro-og-white-cement.jpeg&ehk=3KjM0hexVntu8JHJvfUKlzddPH%2fyea9MFptonV9aokw%3d&risl=&pid=ImgRaw&r=0" className="img-fluid"/>
                            <p> Nike Air Jordan 4 Retro White Cement </p>
                            <p> this shoes are made for lasting long</p>
                            <p> and basketball 🏀🏀 </p>
                        </div>
                        
                        <div className="col-md-3">
                            <img alt="a" src="https://tse2.mm.bing.net/th/id/OIP.0e5TzUF86HD-XzEPNt53GAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" className="img-fluid"/>
                            <p> Adidas X Speedflow</p>
                            <p> Made for speed, precision, and control on the field </p>
                            <p> used for Soccer ⚽⚽</p>
                        </div>

                        <div className="col-md-3">
                            <img alt="e" src="https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c21660e3-0a25-4772-83cc-939091e5b75f/NIKE+MIND+002.png" className="img-fluid"/>
                            <p> Nike Mind 002 </p>
                            <p> These shoes are made for control and grip on the court </p>
                            <p> used for tennis 🎾🎾 </p>
                        </div>

                        <div className="col-md-3">
                            <img alt="t" src="https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/545f3f2b-9660-4bce-ad37-d372d7817053/ZOOMX+STREAKFLY+2+SE.png" className="img-fluid"/>
                            <p> Nike Streakfly 2 SE </p>
                            <p> These shoes are made for speed and grip on the track </p>
                            <p> used for running 🏃🏃 </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home