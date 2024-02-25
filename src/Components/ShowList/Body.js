import { ToggleDiv } from "../ToggleDiv";

export default function Body({ subtitle, description }) {
  return (
    <div className="flex-1">
      {subtitle ? (
        <ToggleDiv title={subtitle}>
          <p>{description}</p>
        </ToggleDiv>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
}
