export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button class={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
