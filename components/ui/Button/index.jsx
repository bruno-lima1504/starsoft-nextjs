import style from "./button.module.scss";

export default function Button({ title }) {
  return <button className={style.button}>{title}</button>;
}
