import style from "./button.module.scss";

export default function Button({ title, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {title}
    </button>
  );
}
