import styled from "styled-components";

const GenreButton = ({ genreList, selectedGenre, setSelectedGenre }) => {
  return (
    <ButtonContainer>
      {genreList.map((genre) => (
        <Button
          key={genre}
          onClick={() => setSelectedGenre(genre)}
          $selected={selectedGenre === genre}
        >
          {genre}
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default GenreButton;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 999px;
  background-color: ${(props) => (props.$selected ? "#ff7a2f" : "#ffffff")};
  color: ${(props) => (props.$selected ? "#ffffff" : "#ff7a2f")};
  border: 2px solid #ff7a2f;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #ff7a2f;
    color: #ffffff;
  }
`;
