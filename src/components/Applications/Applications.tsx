import { ContainerApplications, ApplicationsContent } from "./styles";

interface ApplicationProps {
  Companys: string;
  value: number;
  percentage: number;
}

export function Applications({
  Companys,
  value,
  percentage,
}: ApplicationProps) {

  return (
    <ContainerApplications>
      <ApplicationsContent>
        <ul>
            <li><input type="checkbox" name="" id="" />{Companys}</li>
            <li>{value}</li>
            <li>{percentage}</li>
        </ul>
      </ApplicationsContent>
    </ContainerApplications>
  );
}
