import { ContainerApplications, ApplicationsContent } from "./styles";

interface ApplicationProps {
  Companys: string;
  Position: string;
  Duration: string;
  JobID: number;
  Status: string;
}

export function Applications({
  Companys,
  Position,
  Duration,
  JobID,
  Status,
}: ApplicationProps) {

  return (
    <ContainerApplications>
      <ApplicationsContent>
        <ul>
            <li><input type="checkbox" name="" id="" />{Companys}</li>
            <li>{Position}</li>
            <li>{Duration}</li>
            <li>{JobID}</li>
            <li>{Status}</li>
        </ul>
      </ApplicationsContent>
    </ContainerApplications>
  );
}
