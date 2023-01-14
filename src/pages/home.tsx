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
import { useContext } from "react";
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
            <AppStatic count={0} title={"Contract Roles"} />
            <AppStatic count={12} title={"Full-Time Roles"} />
            <AppStatic count={itens.length} title={"Total Applications"} />
          </Flex>
          <HeaderBoard>
            <p>Application Statistics</p>
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
                  Company <MdOutlineKeyboardArrowDown />
                </li>
                <li>
                  Position <MdOutlineKeyboardArrowDown />
                </li>
                <li>
                  Duration <MdOutlineKeyboardArrowDown />
                </li>
                <li>
                  Job ID# <MdOutlineKeyboardArrowDown />
                </li>
                <li>
                  Status <MdOutlineKeyboardArrowDown />
                </li>
              </ul>
            </AplicationHeader>
            {itens.map(
              (items: {
                jobID: number;
                status: string;
                duration: string;
                position: string;
                company: string;
                id: number;
              }) => {
                return (
                  <Applications
                    key={items.id}
                    Companys={items.company}
                    Position={items.position}
                    Duration={items.duration}
                    JobID={items.jobID}
                    Status={items.status}
                  ></Applications>
                );
              }
            )}
          </DeashbordItems>
        </ContainerAppStatic>
        <ContainerInterviews>
          <Interviews title="Figma | Product Designer Interview | Chad Lee May 4, 2020 @12:30 pm - 1:00 pm" />
          <Interviews count={6} title={"Visual Designer"} />
          <Interviews count={4} title={"Product Designer"} />
          <Interviews count={6} title={"Interactive Designer"} />
          <Interviews count={2} title={"UX/ UI Designer"} />
        </ContainerInterviews>
      </Container>
    </HomeContainer>
  );
}
