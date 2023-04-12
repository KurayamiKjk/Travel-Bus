import React from "react";

const Footer = () => {
  return (
    <div className="box-footer">
      <div className="row">
        <div>
          <div className="description-block border-right">
            <h5 className="description-header">
              &copy; {new Date().getFullYear()} Nhóm 12
            </h5>
            <h5>
              Nhật Thuyên & Phi Hùng
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
