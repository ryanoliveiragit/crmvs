import { AppStaticsContainer, Title, Count } from "./styles";

interface AppStaticProps {
    count: number,
    title: string,
}

export function AppStatic({ count, title }:AppStaticProps) {
  return (
    <AppStaticsContainer>
    <Count>{count}</Count>
    <Title>{title}</Title>
    </AppStaticsContainer>
  )
}
