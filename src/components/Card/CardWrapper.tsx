import { memo } from "react";

type Props = {
  children: React.ReactNode;
  sectionName: string;
};

function CardWrapper({ children, sectionName }: Props) {
  return (
    <section className="w-full flex flex-col gap-8 max-w-7xl mb-6">
      <header>
        <h1 className="pl-4 text-2xl font-bold" aria-label={sectionName}>
          {sectionName}
        </h1>
      </header>
      <div className="flex flex-wrap">{children}</div>
    </section>
  );
}

export default memo(CardWrapper);
