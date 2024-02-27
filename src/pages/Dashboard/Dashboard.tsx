import {
  ContainerDash,
  ContentHeader,
  HeaderDash,
  ContentTitlePage,
  ContentInfo,
  BorderLeft,
} from "./style.dashboard";
import Foto from "../../assets/foto-admin.png";
import { Card } from "../../components/Card";

export const Dashboard = () => {
  return (
    <ContainerDash>
      <ContentHeader>
        <HeaderDash>
          <ContentTitlePage>
            <span>Dashboard</span>
          </ContentTitlePage>
          <ContentInfo>
            <BorderLeft />
            <span>Osvaldo S.</span>
            <img src={Foto} alt="Foto do admin" />
          </ContentInfo>
        </HeaderDash>
      </ContentHeader>
      <div>
        <Card />
      </div>
    </ContainerDash>
  );
};
