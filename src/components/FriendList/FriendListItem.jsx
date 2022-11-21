import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.friends}>
      <li className={style.friends__item}>
        <span className={isOnline ? style.online : style.offline}></span>
        <img className={style.avatar} src={avatar} alt={name} width="48" />
        <p className={style.friends__name}>{name}</p>
      </li>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};
