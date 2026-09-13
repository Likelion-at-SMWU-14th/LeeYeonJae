import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const WritePage = () => {
  const navigate = useNavigate();
  
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState(false);

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const getComment = () => {
    axios
      .get(`${baseURL}/entries/${id}/`)
      .then((res) => {
        console.log(res);
        setAuthor(res.data.author);
        setComment(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const postComment = () => {
    axios
      .post(`${baseURL}/entries/`, {
        author: author,
        comment: comment,
      })
      .then((res) => {
        alert("게시글 작성 완료!");
        console.log("게시글 작성이 완료되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        alert("게시글 작성 실패.");
        console.log(err);
      });
  };

  const putComment = () => {
    axios
      .put(`${baseURL}/entries/${id}/`, {
        author: author,
        comment: comment,
      })
      .then((res) => {
        alert("게시글 수정 완료!");
        console.log("게시글 수정이 완료되었습니다.");
        navigate(`/detail/${id}`);
      })
      .catch((err) => {
        alert("게시글 수정 실패.");
        console.log(err);
      });
  };

  useEffect(() => {
    if (isEdit) {
      getComment();
    }
  }, [id]);

  if (isEdit && loading) {
    return <Message>게시글을 불러오는 중입니다 . . . 🐢</Message>;
  }

  if (isEdit && error) {
    return (
      <Message>
        게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요 ! ! 💥
      </Message>
    );
  }

  return (
    <WritePageWrapper>
      <CommentForm
        author={author}
        comment={comment}
        setAuthor={setAuthor}
        setComment={setComment}
      />
      <ButtonWrapper>
        <Button
          text={isEdit ? "수정하기" : "작성하기"}
          onBtnClick={isEdit ? putComment : postComment}
        />
        <Button text="취소" onBtnClick={() => navigate(-1)} />
      </ButtonWrapper>
    </WritePageWrapper>
  );
};

export default WritePage;

const WritePageWrapper = styled.div`
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
