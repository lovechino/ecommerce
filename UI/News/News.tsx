import Link from "next/link";

const staticArticles = [
  {
    id: 1,
    alias: "tin-tuc-1",
    title: "Cách chăm sóc da mặt đúng cách tại nhà",
    intro_text:
      "Hướng dẫn từng bước chăm sóc da mặt buổi sáng và tối cho làn da khỏe mạnh.",
    date_post: "2025-04-15",
    count_view: 123,
    gallery: "/images/news1.jpg",
  },
  {
    id: 2,
    alias: "tin-tuc-2",
    title: "Top 5 loại serum tốt nhất hiện nay",
    intro_text:
      "Cập nhật những loại serum được yêu thích bởi chuyên gia da liễu.",
    date_post: "2025-04-20",
    count_view: 321,
    gallery: "/images/news2.jpg",
  },
  {
    id: 3,
    alias: "tin-tuc-3",
    title: "Bí quyết giữ dáng và đẹp da sau tuổi 30",
    intro_text:
      "Tổng hợp các bí quyết đơn giản nhưng hiệu quả cho phụ nữ hiện đại.",
    date_post: "2025-04-18",
    count_view: 212,
    gallery: "/images/news3.jpg",
  },
  {
    id: 4,
    alias: "tin-tuc-4",
    title: "10 sai lầm phổ biến khi chăm sóc da",
    intro_text:
      "Tránh xa những sai lầm này để da bạn luôn căng bóng và khỏe mạnh.",
    date_post: "2025-04-10",
    count_view: 89,
    gallery: "/images/news4.jpg",
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("vi-VN");
};

const NewsPage = () => {
  return (
    <>
      <div className="bg-gray-100 py-4">
        <title>Tin tức</title>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Bài viết nổi bật</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staticArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <Link href={`/tin-tuc/${article.alias}`}>
                  <img
                    src={article.gallery}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-medium">
                    <Link
                      href={`/tin-tuc/${article.alias}`}
                      className="hover:underline"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Ngày đăng: {formatDate(article.date_post)}
                  </p>
                  <p className="text-sm mt-2 text-gray-700">
                    {article.intro_text}
                  </p>
                  <p className="text-xs text-right text-gray-400 mt-2">
                    Lượt xem: {article.count_view}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Bài viết xem nhiều</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticArticles.slice(0, 3).map((article) => (
              <div
                key={article.id}
                className="flex gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
              >
                <Link
                  href={`/tin-tuc/${article.alias}`}
                  className="shrink-0 w-24 h-24"
                >
                  <img
                    src={article.gallery}
                    alt={article.title}
                    className="w-full h-full object-cover rounded"
                  />
                </Link>
                <div>
                  <Link
                    href={`/tin-tuc/${article.alias}`}
                    className="text-base font-medium hover:underline"
                  >
                    {article.title}
                  </Link>
                  <p className="text-sm text-gray-500">
                    {formatDate(article.date_post)}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {article.intro_text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Bài viết mỗi ngày</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {staticArticles.map((article) => (
              <div
                key={article.id}
                className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
              >
                <Link
                  href={`/tin-tuc/${article.alias}`}
                  className="w-28 h-28 shrink-0"
                >
                  <img
                    src={article.gallery}
                    alt={article.title}
                    className="w-full h-full object-cover rounded"
                  />
                </Link>
                <div>
                  <h3 className="text-lg font-medium">
                    <Link
                      href={`/tin-tuc/${article.alias}`}
                      className="hover:underline"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {formatDate(article.date_post)}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {article.intro_text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;
