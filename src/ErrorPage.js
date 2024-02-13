import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-screen h-screen flex flex-col p-4 justify-center align-center text-center">
      <h1>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
