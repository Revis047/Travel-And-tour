import { blogPosts, popularTopics } from "../Data/infoData";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IcoCalendar = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="12" height="12" className="text-gray-400">
    <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192z" />
  </svg>
);

const IcoComment = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="12" height="12" className="text-gray-400">
    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.5 55 14.7 84.8 14.7c106 0 192-85.5 192-191.5S358 16 252 16S60 101.5 60 207.5c0 46.6 17.4 89.4 46.1 122.7c13.4 15.4 17.1 36.8 9.8 55.8l-7.4 19.3c-2.8 7.3 3.3 15 11.1 13.5l24-4.7zm-9.1 44.9L72.3 444c-44.3 8.7-82.5-32.3-68.6-75.1l7.4-19.3c3.4-8.9 1.7-18.8-3.9-25.6C2.7 288.7-16 248.2-16 204.7C-16 94.7 78.4 0 192 0s208 94.7 208 204.8S306 409.5 192 409.5c-31.3 0-61.2-5.8-88.3-16.3c-2.8-1-5.9-.6-8.2 1z" />
  </svg>
);

const IcoEye = () => (
  <svg viewBox="0 0 576 512" fill="currentColor" width="12" height="12" className="text-gray-400">
    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
  </svg>
);

const IcoChevronRight = () => (
  <svg viewBox="0 0 320 512" fill="currentColor" width="11" height="11">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);

// ─── Post Meta row ────────────────────────────────────────────────────────────

const PostMeta = ({ date, comments, views }: { date: string; comments: number; views: number }) => (
  <div className="flex items-center gap-3 text-gray-400 text-[12px] mt-1.5">
    <span className="flex items-center gap-1"><IcoCalendar />{date}</span>
    <span className="flex items-center gap-1"><IcoComment />{comments}</span>
    <span className="flex items-center gap-1"><IcoEye />{views}</span>
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function InfoAndTopics() {
  return (
    <section className="w-full font-['Outfit',sans-serif]">

      {/* ══════════════════════════════════════════════
          1. TRAVEL INSIGHT  ·  bg-[#f0f2f0] grey
      ══════════════════════════════════════════════ */}
      <div className="bg-[#f0f2f0]">
        <div className="max-w-[1200px] mx-auto px-8 py-20">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <p className="text-[#5cb85c] text-[11px] font-bold tracking-[4px] uppercase mb-2">
                USEFUL INFORMATION
              </p>
              <h2 className="text-gray-900 font-bold text-[36px] leading-tight">
                Moliva Travel Insight
              </h2>
            </div>
            <div className="text-right mt-2">
              <span className="text-gray-900 font-extrabold text-[26px]">+500</span>
              <span className="text-gray-500 text-[13px] ml-2">Useful articles about Moliva</span>
            </div>
          </div>

          {/* ── Blog grid — 3 columns, 3 rows, every post has image ── */}
          <div className="grid grid-cols-3 gap-x-10 gap-y-8">
            {blogPosts.map((post) => (
              <a key={post.id} href={post.href} className="flex gap-4 group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[110px] h-[85px] rounded-lg object-cover shrink-0"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-[14px] leading-snug group-hover:text-[#5cb85c] transition-colors line-clamp-2">
                    {post.title}
                  </p>
                  <PostMeta date={post.date} comments={post.comments} views={post.views} />
                </div>
              </a>
            ))}
          </div>

          {/* View all posts */}
          <div className="flex justify-center mt-10">
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[#5cb85c] hover:text-[#4cae4c] font-semibold text-[14px] transition-colors"
            >
              View all posts <IcoChevronRight />
            </a>
          </div>

        </div>
      </div>{/* end grey */}

      {/* ══════════════════════════════════════════════
          2. POPULAR TOPICS  ·  bg-white
      ══════════════════════════════════════════════ */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-20">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <p className="text-[#5cb85c] text-[11px] font-bold tracking-[4px] uppercase mb-2">
                MOST SEARCHED
              </p>
              <h2 className="text-gray-900 font-bold text-[36px] leading-tight">
                Popular Topics
              </h2>
            </div>
            <div className="text-right mt-2">
              <span className="text-gray-900 font-extrabold text-[26px]">+1.6K</span>
              <span className="text-gray-500 text-[13px] ml-2">Topics of interest in Moliva</span>
            </div>
          </div>

          {/* Tag cloud — wrapping flex */}
          <div className="flex flex-wrap gap-3">
            {popularTopics.map((topic) => (
              <a
                key={topic.label}
                href={topic.href}
                className="inline-block border border-gray-200 rounded-lg px-4 py-2 text-gray-600 text-[13px] font-medium hover:border-[#5cb85c] hover:text-[#5cb85c] hover:bg-green-50 transition-colors"
              >
                {topic.label}
              </a>
            ))}
          </div>

        </div>
      </div>{/* end white */}

    </section>
  );
}