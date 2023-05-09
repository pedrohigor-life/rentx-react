import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <div className="container-logo">
          <h3>Rentx</h3>
        </div>
        <button type="button">Alugar</button>
      </Content>
    </Container>
  );
}
