import axios from "axios";
import { useState, useEffect  } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, Grid } from "./styles";

const Home = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/movie/550?api_key=2e7a062a860e2626f7fc47b9449ffde4")
            .then(response => {
                console.log(response);
                setMovies(response.data.results);
            });
    }, []);

    return (
        <Container>
            <Header title="React Movie" />
            <Grid>
                { movies && movies.map((movie) => 
                    <Card 
                        title={movie.title} 
                        key={movie.id} 
                        image={movie.poster_path}
                    />) 
                }
            </Grid>
                { !movies && <h1>Não há filmes</h1> }
        </Container>
    );
};

export default Home;