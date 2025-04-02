export default function pokemonlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid text-center text-[28px] font-bold">
      Pokemon List{children}
    </div>
  );
}
