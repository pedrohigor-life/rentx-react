import { Container } from "../Header/styles";
import { ContentTitle } from "./styles";

interface CreateCategoryModalProps {
  open?: () => void | undefined;
}

export function Title(props: CreateCategoryModalProps) {
  return (
    <Container>
      <ContentTitle>
        <h1>Categorias de carros</h1>;
        <button type="button" onClick={props.open}>
          Nova categoria
        </button>
      </ContentTitle>
    </Container>
  );
}
