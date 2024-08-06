import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function DeleteButton({ action, time = 2000 }) {
  const [confirm, setConfirm] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const handlePress = () => {
    if (confirm) {
      clearTimeout(timer);
      setTimer(setTimeout(() => setConfirm(false), time));
      action(() => clearTimeout(timer));
    } else {
      setConfirm(true);
      setTimer(setTimeout(() => setConfirm(false), time));
    }
  };

  return (
    <div
      className="absolute right-2.5 top-1 cursor-pointer"
      onMouseDown={handlePress}
    >
      <span
        className={`material-icons md-dark text text-lg ${confirm ? "text-red-500 hover:text-red-500" : "hover:text-yellow-400 dark:text-slate-300 hover:dark:text-yellow-300"}`}
      >
        delete
      </span>
    </div>
  );
}

DeleteButton.propTypes = {
  action: PropTypes.func.isRequired,
  time: PropTypes.number,
};
