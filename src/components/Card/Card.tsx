import { ContainerCard, ContentIcon, InfoCard } from "./style";
import Icon  from '../../assets/icon-vallet.png'

export const Card = () => {
  return (
    <ContainerCard>
      <ContentIcon>
        <img src={Icon} alt="valor da consulta" />
      </ContentIcon>
      <InfoCard>
        <span>1° Consulta</span>
        <span>R$ 450,00</span>
      </InfoCard>
    </ContainerCard>
  );
};
