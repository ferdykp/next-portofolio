export default function SurfacePanel({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      {...props}
      className={className}
    >
      {children}
    </div>
  );
}
