import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.profile_photo} src={image} alt="User avatar" />
        <p className={css.profile_name}>{name}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>

      <ul className={css.stats_list}>
        <li className={css.stats_listitem}>
          <span>Followers</span>
          <span className={css.stats_figures}>{stats.followers}</span>
        </li>
        <li className={css.stats_listitem}>
          <span>Views</span>
          <span className={css.stats_figures}>{stats.views}</span>
        </li>
        <li className={css.stats_listitem}>
          <span>Likes</span>
          <span className={css.stats_figures}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
