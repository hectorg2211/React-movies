import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  transition: all 0.2s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumbnail 0.5s;

  :hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 20px -1px rgba(0, 0, 0, 0.75);
  }

  @keyframes animateThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
