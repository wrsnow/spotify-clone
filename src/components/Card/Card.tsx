type Props = {
  title: string;
  img: string;
  description: string;
};

function Card(props: Partial<Props>) {
  return (
    <a
      href="#"
      className="bg-zinc-800 hover:bg-zinc-700 w-[calc(50%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(25%-1.5rem)] xl:w-[calc(20%-1.5rem)] m-3 aspect-[4/4] rounded-md relative duration-200 p-4 flex flex-col gap-1 border border-zinc-800"
    >
      <img
        className="rounded-md aspect-square mb-4"
        src={props.img}
        alt={"Album " + props.title}
      />
      <h3 className="font-bold text-[1rem] line-clamp-1" title={props.title}>
        {props.title}
      </h3>
      <span className="opacity-50 text-[0.875rem] line-clamp-2">
        {props.description}
      </span>
    </a>
  );
}

export default Card;
