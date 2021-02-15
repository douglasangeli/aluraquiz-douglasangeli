import { Container } from './styles';

interface QuizBackgroundProps {
  backgroundImage: string;
}

const QuizBackground: React.FC<QuizBackgroundProps> = ({
  backgroundImage,
}) => (
  <Container backgroundImage={backgroundImage}></Container>
);

export default QuizBackground;
