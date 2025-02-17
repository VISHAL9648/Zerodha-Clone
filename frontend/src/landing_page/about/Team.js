import React from "react";


function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className=" text-center ">People</h1>

            </div>
            <div className="row p-3  text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className="col-6  text-center">

                    <img src="media/Founder.jpg" style={{ borderRadius: "100%", width: "50%", height: "60%" }} />
                    <h4 className="mt-5">Vishal Sharma</h4>
                    <h6>Founder, CEO</h6>

                </div>
                <div className="col-6 p-3">
                    <p>
                        Vishal sharma oneself  and founded of suhashini private limited in 2025 to overcome the hurdles he faced during his decade long stint as business man . To day , suhashini private limited company is the most biggest company in the world
                    </p>
                    <p>
                        He is a member of the world largest company Advisory Committee and the markets Data Advisory Committee
                    </p>


                </div>

            </div>

            <div className="row p-3  text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className="col-4  text-center">

                    <img src="media/puggi.jpg" style={{ borderRadius: "100%", width: "50%", height: "60%" }} />
                    <h4 className="mt-5">Eng- Suhashini Sharma</h4>
                    <h6>Co-Founder</h6>

                </div>
                <div className="col-4  text-center">

                    <img src="media/Founder.jpg" style={{ borderRadius: "100%", width: "50%", height: "60%" }} />
                    <h4 className="mt-5">Vishal Sharma</h4>
                    <h6>Founder, CEO</h6>

                </div>
                <div className="col-4  text-center">

                    <img src="media/Founder.jpg" style={{ borderRadius: "100%", width: "50%", height: "60%" }} />
                    <h4 className="mt-5">Vishal Sharma</h4>
                    <h6>Founder, CEO</h6>

                </div>

            </div>


        </div>
    );
}

export default Team;