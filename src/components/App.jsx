import Profile from './Profile/Profile';
import Section from './Section/Section';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import { GlobalStyles } from './GlobalStyles/GlobalStyles.styled';

import users from './Profile/user.json';
import statistics from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Section title="1 - Профиль социальной сети">
          <Profile
            username={users.username}
            tag={users.tag}
            location={users.location}
            avatar={users.avatar}
            stats={users.stats}
          />
        </Section>
        <Section title="2- Секция статистики">
          <Statistics title={'Upload stats'} stats={statistics} />
          <Statistics stats={statistics} />
        </Section>
        <Section title="3 - Список друзей">
          <FriendList friends={friends} />
        </Section>
        <Section title="4 - История транзакций">
          <TransactionHistory items={transactions} />
        </Section>
      </Container>
    </>
  );
}

export default App;
