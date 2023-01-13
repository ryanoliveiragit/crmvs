import { InterviewsStaticsContainer, Title, Count } from "./styles";

interface AppStaticProps {
    count?: number,
    title: string,
}

export function Interviews({ count, title }:AppStaticProps) {
  return (
    <InterviewsStaticsContainer>
    <Count>{count}</Count>
    <Title>{title}</Title>
    </InterviewsStaticsContainer>
  )
}
