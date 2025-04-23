import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import Loader from '../../components/Loader/Loader';
import ExchangeForm from '../../components/Exchange/ExchangeForm';
import Section from '../../components/Section/Section';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from '../../redux/currency/selectors';
import ExchangeInfo from '../../components/Exchange/ExchangeInfo/ExchangeInfo';

const Exchange = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const exchangeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!isError && !exchangeInfo && (
          <Heading
            text={`What currencies do you want to exchange?🙂`}
            mTop
            variant="info"
          />
        )}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {isError && (
          <Heading
            text={`Something went wrong! ${isError}`}
            mTop
            variant="error"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Exchange;
