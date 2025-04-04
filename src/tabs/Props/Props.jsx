import BlogCard from '../../components/Props/BlogCard/BlogCard';
import Container from '../../components/Container/Container';
import CryptoHistory from '../../components/Props/CryptoHistory/CryptoHistory';
import ForbesList from '../../components/Props/ForbesList/ForbesList';
import Heading from '../../components/Heading/Heading';
import Section from '../../components/Section/Section';
import Statistics from '../../components/Props/Statistics/Statistics';
import article from '../../data/article.json';
import stats from '../../data/stats.json';
import transactions from '../../data/transactions.json';
import forbeslist from '../../data/forbeslist.json';

import question from '../../data/game.json';
import Game from '../../components/Quiz/Game/Game';

const Props = () => {
  return (
    <Section>
      <Container>
        <Heading text="Blog Card" tag="h1" bottom variant="success" />
        <BlogCard {...article} />
        <Heading text="Statistics" bottom mTop variant="info" />
        <Statistics stats={stats} text="Main Statistics" />
        <Statistics stats={stats} />
        <Heading text="Crypto History" bottom mTop variant="error" />
        <CryptoHistory transactions={transactions} />
        <Heading text="Forbes List" bottom mTop variant="info" />
        <ForbesList forbeslist={forbeslist} />
        <Heading text="Game" bottom mTop variant="info" />
        <Game {...question} />
      </Container>
    </Section>
  );
};

export default Props;
