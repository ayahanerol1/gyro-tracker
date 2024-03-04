import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const companies = await prisma.company.findMany();

  const createListItem = (title, checked) => {
    var iconClassName =
      "w-3.5 h-3.5 me-2 flex-shrink-0 text-green-500 dark:text-green-400";

    if (!checked) {
      iconClassName =
        "w-3.5 h-3.5 me-2 flex-shrink-0 text-gray-500 dark:text-gray-400";
    }

    return (
      <li className="flex items-center">
        <svg
          className={iconClassName}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <p className="font-bold">{title}</p>
      </li>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Şirketler
      </h2>

      <ul className="max-w-md text-gray-500 list-inside dark:text-gray-400">
        {companies.map((e) => {
          return createListItem(e.Name, false);
        })}
      </ul>
    </main>
  );
}
