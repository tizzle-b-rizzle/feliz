"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar.component";
import NavItem from "@/components/NavItem/NavItem.component";
import RestOFPage from "@/components/RestOfPage/RestOfPage.component";
import { EntirePageContainer } from "./stylesheet";
import {
  Button,
  CodeInput,
  FlexColumnContainer,
  MessageWrapper,
  WelcomeContainer,
} from "./MainPage.elements";
import { setShowMessage } from "@/redux/homeSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const [code, setCode] = useState("initial");
  const [showErrorMessage, setErrorMessage] = useState(false);
  const showMessage = useSelector((state) => state.home.showMessage);
  const CheckIfCodeCorrect = () => {
    if (code.toString() === "2711") {
      dispatch(setShowMessage(true));
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };
  const JustShowMessage = () => {
    dispatch(setShowMessage(true));
    setErrorMessage(false);
  };

  // for when message not shown, show envelope, when shown show an open envelope

  return (
    <>
      <EntirePageContainer>
        <NavBar>
          <Link href="/minesweeper">
            <NavItem>Minesweeper</NavItem>
          </Link>

          <Link href="/sudoku">
            <NavItem>Sudoku</NavItem>
          </Link>

          <Link href="/queens">
            <NavItem>Queens</NavItem>
          </Link>

          <Link href="/tango">
            <NavItem>Tango</NavItem>
          </Link>
        </NavBar>
        <RestOFPage>
          <FlexColumnContainer>
            <WelcomeContainer>
              <p>Feliz aniversário!</p>
              <p>
                Bem-vinda ao teu site, que tem uma mensagem para ti. Mas para
                ler a mensagem, vai ter que fazer os jogos para ganhar o código
                de 4 dígitos
              </p>
              <p>Boa sorte e divirta-te!</p>
              <Button onClick={CheckIfCodeCorrect}>Comfirmar Código</Button>
              <br />
              <Button onClick={JustShowMessage}>
                Só mostra a mensagem, gringo!
              </Button>
              <br />
              <CodeInput
                maxLength={4}
                type={"number"}
                onChange={(event) => {
                  setCode(event.target.value);
                }}
              ></CodeInput>
              {showErrorMessage && <p>Sorry, wrong code!</p>}
            </WelcomeContainer>
            {showMessage && (
              <MessageWrapper show={showMessage.toString()}>
                <p>
                  FELIZ ANIVERSÁRIO!!!
                  <br />
                  <br />
                  Tu tem 29 anos agora. 29 para trás é 92, e 9 menos 2 é 7, que
                  é um número da sorte, e espero que tu tenha apenas sorte,
                  saúde, e felicidade para hoje, e para o resto da tua vida! E
                  hoje é páscoa, então vou orar ainda mais para ti: que Deus
                  continue dando saúde a todos vocês e mantendo todos vocês
                  seguros. Também espero que tu ganhe bastante chocolate de
                  páscoa, cerca de 20kg. 15kg se tu quer ser saudável
                  <br />
                  <br />
                  Tu merece descansar depois de todas as coisas que tu faz dia a
                  dia (incluindo resolvendo todos aqueles mistérios!). Talvez tu
                  pode comprar um vestido? Um muito lindo e azul? Fique a
                  vontade usar isso como um jeito de perder qualquer culpa que
                  tu (por motivo algum) pode ter de comprar o vestido acima
                  mencionado, que talvez não existe, quem sabe?
                  <br />
                  <br />
                  Espero que você goste dos jogos aqui: eu me diverti tanto
                  jogando os jogod de LinkedIn contigo nas ligações. Isso me dá
                  saudades de quando a gente jogou Minesweeper e Sudoku juntos
                  aí, e é por isso que também escolhi eles. Espero que podemos
                  jogar eles juntos novamente em breve na vida realL agora que
                  tenho meu próprio lugar, será mais fácil planejar isso.
                  <br />
                  <br />
                  Mas por enquanto, o abraço terá que ser virtual
                  <br />
                  <br />
                  Tenha um dia fantástico, Lin!
                  <br />
                  <br />
                  Com amor,
                  <br />
                  <br />
                  Ty
                </p>
              </MessageWrapper>
            )}
          </FlexColumnContainer>
        </RestOFPage>
      </EntirePageContainer>
    </>
  );
}
