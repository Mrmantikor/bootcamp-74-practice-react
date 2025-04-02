import BlogCard from "./components/BlogCard/BlogCard";
import Container from "./components/Container/Container";
import CryptoHistory from "./components/CryptoHistory/CryptoHistory";
import ForbesList from "./components/ForbesList/ForbesList";
import Heading from "./components/Heading/Heading";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import article from "./data/article.json";
import stats from "./data/stats.json";
import transactions from "./data/transactions.json";
import forbeslist from "./data/forbeslist.json";
import Options from "./components/Options/Options";

const options = ["one", "two", "three", "four", "five"];

function App() {
  return (
    <>
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
          <Options options={options} />
        </Container>
      </Section>
    </>
  );
}

export default App;
