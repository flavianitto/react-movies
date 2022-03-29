import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, Grid } from "./styles";

const Home = () => {
    
    return (
        <Container>
            <Header title="React Movie" />
            <Grid>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Grid>
        </Container>
    );
}

export default Home;