import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css["item"]}>
      <span className={isOnline ? css["is-online"] : css["is-offline"]}></span>
      <img
        className={css["avatar"]}
        src={avatar}
        alt="User avatar"
        width={48}
      />
      <p className={css["name"]}>{name}</p>
    </li>
  );
}
