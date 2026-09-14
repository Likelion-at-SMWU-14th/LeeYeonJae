import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { COMMENT_DATA } from "../constant/comment";
import DetailComment from "../components/DetailComment";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const getDetail = (id) => {
    axios
      .get(`${baseURL}/entries/${id}`)
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = () => {
    if (!confirm("삭제하시겠습니까?")) return;

    setLoading(true);

    axios
      .delete(`${baseURL}/entries/${id}/`)
      .then(() => {
        alert("게시글 삭제 완료!");
        console.log("게시글 삭제가 완료되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        alert("게시글 삭제 실패.");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  if (loading) {
    return <Message>게시글을 삭제하는 중입니다 . . . 🐢</Message>;
  }

  return (
    <DetailPageWrapper>
      <DetailComment detail={detail} />
      <ButtonWrapper>
        <Button text="수정하기" onBtnClick={() => navigate(`/edit/${id}`)} />
        <Button text="삭제하기" onBtnClick={deleteComment} />
      </ButtonWrapper>
    </DetailPageWrapper>
  );
};

export default DetailPage;

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 4.2rem 3.88rem;
  background-color: var(--bg-light);
  gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const Message = styled.p`
  padding: 2rem 3.5rem;
  color: var(--text-brown);
  font-size: 1.25rem;
  font-weight: 600;
`;
