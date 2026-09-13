import * as S from "../styles/Melon.Styled";
import { music } from "../data/musicData";
import MusicItem from "./MusicItem";

function MusicChart() {
  return (
    <S.ChartContainer>
      <S.ChartHeader>
        <S.CheckBoxContainer>
          <S.CheckBox type="checkbox" />
        </S.CheckBoxContainer>

        <S.HeaderText>순위</S.HeaderText>
        <div />
        <S.HeaderText>곡정보</S.HeaderText>
        <S.HeaderText>앨범</S.HeaderText>
        <S.HeaderText>좋아요</S.HeaderText>
        <S.HeaderText>듣기</S.HeaderText>
        <S.HeaderText>담기</S.HeaderText>
        <S.HeaderText>다운</S.HeaderText>
        <S.HeaderText>뮤비</S.HeaderText>
      </S.ChartHeader>

      {music.map((item) => (
        <MusicItem
          key={item.id}
          rank={item.rank}
          image={item.image}
          title={item.title}
          artist={item.artist}
          album={item.album}
          likes={item.likes}
        />
      ))}
    </S.ChartContainer>
  );
}

export default MusicChart;
