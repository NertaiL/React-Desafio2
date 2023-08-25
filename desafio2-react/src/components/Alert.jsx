const Alert = ({ color, children }) => (
  <div className={`alert alert-${color}`} role="alert">
    {children}
  </div>
);

export default Alert;