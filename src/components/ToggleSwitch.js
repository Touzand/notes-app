import "./ToggleSwitch.css";
import {useStickyState} from '../hooks/useStickyState';

function ToggleSwitch({ onChange,name }) {
  const [isToggled, setIsToggled] = useStickyState(false,name);
  const onToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <label className="toggle-switch">
      <input
      type="checkbox"
      name={name}
        checked={isToggled}
      onChange={(e) => {
      onToggle()
          onChange({
            target: {
              name: e.target.name,
              value: e.target.checked,
            },
          });
        }}
      />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;
