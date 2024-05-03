import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <div className={css.friend_profile}>
        <img
          className={css.friend_avatar}
          src={avatar}
          alt="Avatar"
          width="48"
        />
        <p className={css.friend_name}>{name}</p>
        <p className={isOnline ? css.online : css.offline}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
}
