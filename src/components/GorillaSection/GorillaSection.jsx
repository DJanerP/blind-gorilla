import React from 'react';
import './GorillaSection.mobile.css'; // Estilos móviles (Mobile-First)

const GorillaSection = () => {
  return (
    <section className="gorilla-section">
      <div className="gorilla-logo">
        {/* Fila 1 */}
        <div className="logo-row">
          <span className="letter letter-g">G</span>
          <span className="letter letter-o">O</span>
        </div>
        
        {/* Fila 2 */}
        <div className="logo-row">
          <span className="letter letter-r">R</span>
          <span className="letter letter-il">IL</span>
        </div>
        
        {/* Fila 3 */}
        <div className="logo-row">
          <span className="letter letter-l">L</span>
          <span className="letter letter-a">A</span>
        </div>
      </div>
    </section>
  );
};

export default GorillaSection;