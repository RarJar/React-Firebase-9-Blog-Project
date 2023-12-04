import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-7">
        {["1", "2", "3"].map(() => (
          <div key="index">
            <BlogCard />
          </div>
        ))}
      </div>
    </div>
  );
}
