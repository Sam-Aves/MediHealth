// src/components/BackgroundPattern.jsx
const BackgroundPattern = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
  </div>
);

export default BackgroundPattern;
