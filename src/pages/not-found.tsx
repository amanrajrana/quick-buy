import { Link } from "react-router-dom";
import { Button } from "../components/UI/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-gray-600 mb-12">Mahashay, ye kis line me aa gaye aap.</p>

        <Link to="/">
          <Button>Chala Jaa Bhai!</Button>
        </Link>
      </div>
    </div>
  );
}
