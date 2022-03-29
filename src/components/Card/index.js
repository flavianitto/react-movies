import { Container, Content, Button} from "./styles";
import { Image } from "./styles";
import { Title } from "./styles";

const Card = ({ title, imgUrl }) => { 
    return(
        <Container>
            <Image src={`https://image.tmdb.org/t/p/w500${imgUrl}`} />
            <Content>
                <Title>{title}</Title>
                <Button onClick={console.log}>Detalhes</Button>                
            </Content>
        </Container>
    );
}

export default Card;