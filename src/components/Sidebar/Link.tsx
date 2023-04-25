type Props = {
  title: string;
};

function Link(props: Props) {
  return (
    <a
      className="text-[14px] font-medium hover:text-white duration-300"
      href="#"
    >
      {props.title}
    </a>
  );
}

export default Link;
