import {
  HomeContainer,
  ContainerInterviews,
  Container,
  ContainerAppStatic,
  Flex,
  Header,
  HeaderBoard,
  DeashbordItems,
  AplicationHeader,
} from "../styles/home";
import { IoMdOptions } from "react-icons/io";
import { TfiPencil } from "react-icons/tfi";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { name } from "../components/utils/name";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { AppStatic } from "../components/AppStatics/AppStatics";
import { Interviews } from "../components/Interviews/Interviews";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import { Applications } from "../components/Applications/Applications";

export function Home() {
  const date = new Date();
  const currentDate = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const { itens, setItens }: any = useContext(MyContext);


  return (
    <HomeContainer>
      <h1>Welcome {name}</h1>
      <span>{currentDate.toString()}</span>
      <Header>
        <p>Application Statistics</p>
        <p>Interviews</p>
      </Header>
      <Container>
        <ContainerAppStatic>
          <Flex>
            <AppStatic count={'ffsd'} title={"Total investido"} />
            <AppStatic count={itens.length} title={"Carteira"} />
            <AppStatic count={itens.length} title={"% de Lucro"} />
          </Flex>
          <HeaderBoard>
            <p>Status Board</p>
            <div>
              <IoMdOptions />
              <TfiPencil />
              <BiShareAlt />
              <AiOutlineSearch />
              <BiTrashAlt />
            </div>
          </HeaderBoard>
          <DeashbordItems>
            <AplicationHeader>
              <ul>
                <li>
                  Ação <MdOutlineKeyboardArrowDown />
                </li>
                <li>
                  Valor <MdOutlineKeyboardArrowDown />
                </li>
                <li>
                  % de renda mensal <MdOutlineKeyboardArrowDown />
                </li>
              </ul>
            </AplicationHeader>
            {itens.map(
              (items: {
                percentage: number;
                value: number;
                company: string;
                id: number;
              }) => {
                return (
                  <Applications
                    key={items.id}
                    Companys={items.company}
                    value={items.value}
                    percentage={items.percentage}
                  ></Applications>
                );
              }
            )}
          </DeashbordItems>
        </ContainerAppStatic>
        <ContainerInterviews>
          <Interviews title="Figma | Product Designer Interview | Chad Lee May 4, 2020 @12:30 pm - 1:00 pm" />
          <Interviews
            count={
              itens.filter(
                (i: { position: string }) => i.position === "Visual Designer"
              ).length
            }
            title={"Visual Designer"}
          />
          <Interviews
            count={
              itens.filter(
                (i: { position: string }) => i.position === "Product Designer"
              ).length
            }
            title={"Product Designer"}
          />
          <Interviews
            count={
              itens.filter(
                (i: { position: string }) =>
                  i.position === "Interactive Designer"
              ).length
            }
            title={"Interactive Designer"}
          />
          <Interviews
            count={
              itens.filter(
                (i: { position: string }) => i.position === "UX / UI Designer"
              ).length
            }
            title={"UX/ UI Designer"}
          />
        </ContainerInterviews>
      </Container>
    </HomeContainer>
  );
}
