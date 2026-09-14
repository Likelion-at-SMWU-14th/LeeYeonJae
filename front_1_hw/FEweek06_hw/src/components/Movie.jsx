import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import GenreButton from "./GenreButton";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState("전체");
  const [search, setSearch] = useState("");

  const movieList = movies
    .filter(
      (movie) => selectedGenres === "전체" || movie.genre === selectedGenres,
    )
    .filter((movie) => {
      const keyword = search.toLowerCase();

      return (
        movie.title.toLowerCase().includes(keyword) ||
        movie.genre.toLowerCase().includes(keyword) ||
        movie.description.toLowerCase().includes(keyword)
      );
    });

  const genreList = [
    "전체",
    "로맨스",
    "드라마",
    "범죄",
    "스릴러",
    "SF",
    "공포",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  return (
    <Container>
      <Title>무비차트</Title>

      <FilterContainer>
        {/* 장르별 필터링 기능 */}
        <GenreButton
          genreList={genreList}
          selectedGenre={selectedGenres}
          setSelectedGenre={setSelectedGenres}
        />

        {/* 검색 기능 */}
        <SearchInput
          type="text"
          placeholder="검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FilterContainer>

      {movieList.length === 0 ? (
        <NoResult>검색 결과가 없습니다.</NoResult>
      ) : (
        <MovieGrid>
          {movieList.map((movie) => (
            <MovieCard key={movie.id}>
              <Poster src={movie.poster} alt={movie.title} />

              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <Rating>⭐️ {movie.rating}</Rating>
                <Genre>{movie.genre}</Genre>
                <Description>{movie.description}</Description>
              </MovieInfo>
            </MovieCard>
          ))}
        </MovieGrid>
      )}
    </Container>
  );
};

export default Movie;

const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 40px;
  background-color: #ffffff;
  color: #111;
`;

const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

const MovieCard = styled.div`
  overflow: hidden;
  border-radius: 16px;
  background-color: #1f1f1f;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
`;

const Poster = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
`;

const MovieInfo = styled.div`
  padding: 16px;
`;

const MovieTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

const Rating = styled.p`
  margin-bottom: 8px;
  color: #ffd166;
  font-size: 15px;
`;

const Genre = styled.p`
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: #ff7a2f;
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

const Description = styled.p`
  color: #cccccc;
  font-size: 14px;
  line-height: 1.5;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 8px 4px;
  font-size: 16px;
  font-weight: 600;
  background: transparent;
  border: none;
  color: #ff7a2f;
  border-bottom: 2px solid #ff7a2f;

  &::placeholder {
    color: #909090;
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`;

const NoResult = styled.p`
  margin-top: 80px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;
