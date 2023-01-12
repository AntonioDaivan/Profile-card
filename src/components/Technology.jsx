import "../styles/technology.sass";

export function Technology({ name, text, bg, icon }) {
  return (
    <span style={{ backgroundColor: bg, color: text }}>
      {name} {icon}
    </span>
  );
}
