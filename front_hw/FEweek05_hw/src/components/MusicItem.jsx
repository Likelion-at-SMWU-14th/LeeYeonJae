import * as S from "../styles/Melon.Styled";
import heartIcon from "../assets/icon/heart-icon.svg";
import playIcon from "../assets/icon/play-icon.svg";
import plusIcon from "../assets/icon/plus-icon.svg";
import downloadIcon from "../assets/icon/download-icon.svg";
import videoIcon from "../assets/icon/video-icon.svg";

function MusicItem({ rank, image, title, artist, album, likes }) {
  return (
    <S.MusicItem>
      <S.CheckBoxContainer>
        <S.CheckBox type="checkbox" />
      </S.CheckBoxContainer>

      {/* 순위 */}
      <S.Rank>{rank}</S.Rank>

      {/* 앨범이미지 */}
      <S.AlbumImage src={image} alt={title} />

      {/* 곡정보 */}
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Artist>{artist}</S.Artist>
      </S.Info>

      {/* 앨범 */}
      <S.AlbumName>{album}</S.AlbumName>

      {/* 좋아요 */}
      <S.LikeContainer>
        <S.HeartIcon src={heartIcon} alt="좋아요" />
        <S.LikeCount>{likes}</S.LikeCount>
      </S.LikeContainer>

      <S.IconButton>
        <S.Icon src={playIcon} alt="듣기" />
      </S.IconButton>

      <S.IconButton>
        <S.Icon src={plusIcon} alt="담기" />
      </S.IconButton>

      <S.IconButton>
        <S.Icon src={downloadIcon} alt="다운" />
      </S.IconButton>

      <S.IconButton>
        <S.Icon src={videoIcon} alt="뮤비" />
      </S.IconButton>
    </S.MusicItem>
  );
}

export default MusicItem;
