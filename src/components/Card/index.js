import { Container, Content, Button} from "./styles";
import { Image } from "./styles";
import { Title } from "./styles";

const Card = () => { 
    return(
        <Container>
            <Image src="https://via.placeholder.com/260x300"/>
            <Content>
                <Title>O Espetacular Homem-Aranha 2: A Ameaça de Electro</Title>
                <Button>Detalhes</Button>                
            </Content>
        </Container>
    );
}

export default Card;