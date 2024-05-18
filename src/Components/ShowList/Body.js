import { ToggleDiv } from "../ToggleDiv";

export default function Body({ subtitle, description }) {
  return (
    <div className="flex-1">
      {subtitle ? (
        <ToggleDiv title={subtitle}>
          <p className="text-justify">{description}</p>
        </ToggleDiv>
      ) : (
        <p className="text-justify">{description}</p>
      )}
    </div>
  );
}
