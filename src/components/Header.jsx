import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <h1>🌐 Dünya Bayrak Ansiklopedisi</h1>
        {/* İsmini ve yılını ekleyerek telif hakkı bilgisini güncelle */}
        <div className="copyright">Telif Hakkı © 2023 Adil Alperen Çiftçi</div>
      </header>
    </div>
  );
};

export default Header;
