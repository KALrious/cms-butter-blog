const BoxWithTitle = ({ children, title }) => (
  <div>
    <div className="bg-white z-10 shadow-custom p-8 relative overflow-hidden mb-8 rounded-2xl">
      <h5 className="mb-8 font-semibold relative z-10">{title}</h5>
      {children}
    </div>
  </div>
);

export default BoxWithTitle;
