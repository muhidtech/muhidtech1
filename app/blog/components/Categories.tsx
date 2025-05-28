type Post = {
  category: string;
  // other post fields if needed
};

type Props = {
  posts: Post[];
  selected: string;
  onSelect: (category: string) => void;
};

export default function Categories({ posts, selected, onSelect }: Props) {
  // Extract unique categories from posts
  const uniqueCategories = Array.from(new Set(posts.map(post => post.category)));

  // Add 'All' at the beginning
  const categories = ['All', ...uniqueCategories];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          aria-pressed={selected === cat}
          className={`px-4 py-2 rounded-full border transition ${
            selected === cat
              ? 'bg-cyan-500 text-white border-cyan-500'
              : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
