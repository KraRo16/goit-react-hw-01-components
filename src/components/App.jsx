import { Profile } from './Profile/Profile';
import user from '../Data/user.json';
import { Statistics } from './Statistics/Statistics';
import stat from '../Data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../Data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stat} />
      {/* <Statistics stats={stat} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
