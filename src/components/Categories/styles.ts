import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--shape);
    padding: 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
  }
`;
