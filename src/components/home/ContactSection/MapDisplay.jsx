"use client"

const MapDisplay = ({ mapSrc, className }) => (
  <div className={className}> {/* Apply passed className to this new root div */}
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <div className="text-start">
        <h2 className="text-2xl font-bold text-white mb-4">Aquí nos puedes encontrar</h2>
        <p className="text-slate-400 text-base mx-auto">
          Visítanos en nuestra ubicación física o contáctanos para coordinar una reunión
        </p>
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <div className="bg-slate-800 rounded-lg overflow-hidden h-96 relative border border-slate-700">
        <iframe
          src={mapSrc}
          title="Google Maps Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 filter brightness-75"
        ></iframe>
      </div>
    </div>
  </div>
);

export default MapDisplay;
