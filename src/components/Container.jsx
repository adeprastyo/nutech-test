export default function Container({ title, children }) {
  return (
    <div className="container mx-auto text-center">
      <h1 className="mt-10 font-bold text-3xl">{title}</h1>
      <div className="w-full flex flex-wrap p-5 gap-10 justify-center">
        {children}
      </div>
    </div>
  );
}
