// import { useEffect, useMemo } from 'react';

// import { Article } from '@/types/cms';

// const Article_PER_PAGE = 12;

// export default function useArticles(allArticles: Article[]) {
//   const page = useRecoilValue(pageState);
//   const query = useRecoilValue(queryState);
//   const [categories, setCategories] = useRecoilState(categoriesState);

//   const allArticlesFiltered = useMemo(
//     () =>
//       allArticles.filter((Article) => {
//         if (!Article.published) {
//           return false;
//         }

//         if (query && !search(Article.title, query)) {
//           return false;
//         }

//         if (categories.selected.length) {
//           const isCategoryMatch = categories.selected.every((cat) => Article.categories.includes(cat));
//           if (!isCategoryMatch) {
//             return false;
//           }
//         }

//         return true;
//       }),
//     [allArticles, categories.selected, query]
//   );
//   allArticlesFiltered.sort((ArticleA, ArticleB) => (ArticleA.date > ArticleB.date ? -1 : 1));

//   const totalPages = Math.ceil(allArticlesFiltered.length / Article_PER_PAGE);
//   const offset = (page ? +page - 1 : 0) * Article_PER_PAGE;
//   const ArticlesForCurrentPage = allArticlesFiltered.slice(offset, offset + Article_PER_PAGE);

//   useEffect(() => {
//     setCategories((prevCategories: any) => ({
//       ...prevCategories,
//       active: toUniqueArray(allArticlesFiltered.map((Article) => Article.categories).flat()),
//     }));
//   }, [allArticlesFiltered, setCategories]);

//   return {
//     Articles: ArticlesForCurrentPage,
//     totalPages,
//   };
// }
