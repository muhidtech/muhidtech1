type Props = {
  search: string;
  setSearch: (val: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search blog posts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 mb-4 border border-gray-700"
    />
  );
}
