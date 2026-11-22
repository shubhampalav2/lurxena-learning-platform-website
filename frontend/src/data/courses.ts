export type Course = {
  title: string
  slug: string
  category: string
}

// Temporary catalog data; replace this array with the courses API response when available.
export const courses: Course[] = [
  { title: 'Web Development', slug: 'web-development', category: 'Development' },
  { title: 'C#', slug: 'c-sharp', category: 'Programming languages' },
  { title: 'Java', slug: 'java', category: 'Programming languages' },
  { title: 'Spring Boot', slug: 'spring-boot', category: 'Development' },
  { title: 'Python', slug: 'python', category: 'Programming languages' },
  { title: 'Data Science', slug: 'data-science', category: 'Data' },
  { title: 'Artificial Intelligence', slug: 'artificial-intelligence', category: 'Technology' },
  { title: 'UI/UX Design', slug: 'ui-ux-design', category: 'Design' },
]
