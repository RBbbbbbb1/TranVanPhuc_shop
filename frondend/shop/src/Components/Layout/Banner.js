import React from "react";

function Banner() {
    return (
        <div className="banner container-fluid">
            <div className="row border-0">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="container ">
                        <h5 className="display-3 fw-bolder mb-0">Gundam shop</h5>
                        <p className="lead fs-2">
                        HDPE thì thôi
                        mua Gundam thì ngon luôn
                        </p>
                    </div>
                </div>
                <img
                    src="/picture/hg-banner_07897d9e521c47619973f6868e3d3945.jpg"
                    className="col-md-6"
                    alt="..."
                    style={{height:"550px", objectFit: "cover"}} 
                />
            </div>
        </div>
    );
}

export default Banner;
