import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";

const Header = () => {
  return (
    <>
      <header className="border-b shadow">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between px-6 py-2">
          <h1 className="cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text font-semibold text-transparent lg:text-2xl">
            <Link href={"/"}>Counter-App</Link>
          </h1>

          <nav className="flex items-center gap-4">
            <Link
              className="underline-offset-4 hover:underline"
              href={"/"}
            >
              Basic
            </Link>
            <Link
              className="underline-offset-4 hover:underline"
              href={"/advanced"}
            >
              Advanced
            </Link>
            <Link
              className="underline-offset-4 hover:underline"
              href={"/expert"}
            >
              Expert
            </Link>
            <ThemeToggleButton />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
