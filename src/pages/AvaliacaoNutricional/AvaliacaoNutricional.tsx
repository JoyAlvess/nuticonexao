import { useState } from "react";

import {
  BackgroundImg,
  Container,
  Background,
  ContentTitle,
  WrapperInputs,
  ContainerInputs,
  ContentInputs,
  ContentButton,
  ContentRadios,
} from "./style.avaliacaonutricional";
import {
  Label,
  Input,
  InputRadio,
  InputRadioLabel,
} from "../../components/Input";
import { Button } from "../../components/Button";
import { Notification } from "../../components/Notification";
import IconeSucess from "../../assets/sucesso.png";
import IconeAtencion from "../../assets/atencion.png";

export const AvaliacaoNutricional = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [genero, setGenero] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [notificatioSucess, setNotificatioSucess] = useState(false);
  const [notificatioAtencion, setNotificatioAtencion] = useState(false);

  const handlerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
    console.log("Data:", data);
    console.log("genero:", genero);
    console.log("altura:", altura);
    console.log("peso:", peso);
    console.log("objetivo:", objetivo);

    if (
      name == "" ||
      email == "" ||
      genero == "" ||
      peso == "" ||
      objetivo == ""
    ) {
      setNotificatioAtencion(true);
      setNotificatioSucess(false);
      setName("");
      setEmail("");
      setData("");
      setGenero("");
      setAltura("");
      setPeso("");
      setObjetivo("");
    } else {
      setNotificatioSucess(true);
      setNotificatioAtencion(false);
    }

    setTimeout(() => {
      setNotificatioSucess(false);
      setNotificatioAtencion(false);
    }, 5000);
  };

  return (
    <>
      {notificatioSucess && (
        <Notification
          imgIcon={IconeSucess}
          message="Informações enviada com sucesso!"
          alt="Informações enviada com sucesso!"
          backgroundColor="#048380"

        />
      )}
      {notificatioAtencion && (
        <Notification
          imgIcon={IconeAtencion}
          message="Preencha todos os campos do formulário"
          alt="Preencha todos os campos do formulário"
          backgroundColor="#ffd700"
        />
      )}
      <BackgroundImg>
        <Container>
          <Background>
            <ContentTitle>
              <span>Olá, tudo bem?</span>
              <span>Insira seus dados.</span>
            </ContentTitle>
            <WrapperInputs onSubmit={handlerSubmit}>
              <ContainerInputs>
                <ContentInputs className="contentInputsClass">
                  <Label>Nome completo</Label>
                  <Input
                    type="text"
                    placeholder="Jorisvaldo da Silva Filho"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </ContentInputs>

                <ContentInputs>
                  <Label>E-mail</Label>
                  <Input
                    type="email"
                    placeholder="jorisvaldo-silva@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </ContentInputs>
              </ContainerInputs>

              <ContainerInputs>
                <ContentInputs className="contentInputsClass">
                  <Label>Data de nascimento</Label>
                  <Input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </ContentInputs>

                <ContentInputs>
                  <div>
                    <Label>Gênero</Label>
                    <ContentRadios>
                      <InputRadio
                        type="radio"
                        id="masculino"
                        name="radio-genero"
                        value="masculino"
                        checked={genero === "masculino"}
                        onChange={(e) => setGenero(e.target.value)}
                      />
                      <InputRadioLabel htmlFor="masculino" className="genero">
                        Masculino
                      </InputRadioLabel>

                      <InputRadio
                        type="radio"
                        id="feminino"
                        name="radio-genero"
                        value="feminino"
                        checked={genero === "feminino"}
                        onChange={(e) => setGenero(e.target.value)}
                      />
                      <InputRadioLabel htmlFor="feminino" className="genero">
                        Feminino
                      </InputRadioLabel>
                    </ContentRadios>
                  </div>
                </ContentInputs>
              </ContainerInputs>

              <ContainerInputs>
                <ContentInputs className="contentInputsClass">
                  <Label>Altura</Label>
                  <Input
                    type="number"
                    placeholder="1.78"
                    value={altura}
                    onChange={(e) => {
                      setAltura(e.target.value);
                    }}
                  />
                </ContentInputs>
                <ContentInputs>
                  <Label>Peso</Label>
                  <Input
                    type="number"
                    placeholder="101.8"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                  />
                </ContentInputs>
              </ContainerInputs>

              <ContainerInputs>
                <ContentInputs>
                  <Label>Qual é o seu principal objetivo:</Label>
                  <ContentRadios>
                    <InputRadio
                      type="radio"
                      id="perdadepeso"
                      name="radio-objetivo"
                      value="perdadepeso"
                      checked={objetivo === "perdadepeso"}
                      onChange={(e) => setObjetivo(e.target.value)}
                    />
                    <InputRadioLabel htmlFor="perdadepeso" className="objetivo">
                      Perda de peso
                    </InputRadioLabel>

                    <InputRadio
                      type="radio"
                      id="ganhomuscular"
                      name="radio-objetivo"
                      value="ganhomuscular"
                      checked={objetivo === "ganhomuscular"}
                      onChange={(e) => setObjetivo(e.target.value)}
                    />
                    <InputRadioLabel
                      htmlFor="ganhomuscular"
                      className="objetivo"
                    >
                      Ganho muscular
                    </InputRadioLabel>

                    <InputRadio
                      type="radio"
                      id="outros"
                      name="radio-objetivo"
                      value="outros"
                      checked={objetivo === "outros"}
                      onChange={(e) => setObjetivo(e.target.value)}
                    />
                    <InputRadioLabel htmlFor="outros" className="objetivo">
                      Outros
                    </InputRadioLabel>
                  </ContentRadios>
                </ContentInputs>
              </ContainerInputs>

              <ContainerInputs>
                <ContentInputs style={{ marginTop: "0.8rem" }}>
                  {/* <Label>Qual é o seu principal objetivo:</Label> */}
                  <ContentRadios>
                    <InputRadio
                      type="radio"
                      id="ganhodeforca"
                      name="radio-objetivo"
                      value="ganhodeforca"
                      checked={objetivo === "ganhodeforca"}
                      onChange={(e) => setObjetivo(e.target.value)}
                    />
                    <InputRadioLabel
                      htmlFor="ganhodeforca"
                      className="objetivo"
                    >
                      Ganho de força
                    </InputRadioLabel>

                    <InputRadio
                      type="radio"
                      id="desempenhoatletico"
                      name="radio-objetivo"
                      value="desempenhoatletico"
                      checked={objetivo === "desempenhoatletico"}
                      onChange={(e) => setObjetivo(e.target.value)}
                    />
                    <InputRadioLabel
                      htmlFor="desempenhoatletico"
                      className="objetivo"
                    >
                      Desempenho atlético
                    </InputRadioLabel>
                  </ContentRadios>
                </ContentInputs>
              </ContainerInputs>
              <ContentButton>
                <Button type="submit">Enviar</Button>
              </ContentButton>
            </WrapperInputs>
          </Background>
        </Container>
      </BackgroundImg>
    </>
  );
};
