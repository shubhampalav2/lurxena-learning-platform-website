import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'

export const CatalogPage = () => (
  <main className="catalog-page">
    <p className="catalog-kicker">LEARN SOMETHING NEW</p>
    <h1>Explore our courses</h1>
    <p className="catalog-lead">Choose a path and build practical skills at your own pace.</p>
    <div className="catalog-cards">
      {courses.map((course) => <Link className="catalog-card" key={course.slug} to={'/catalog/' + course.slug}>
        <span className="catalog-card-icon" aria-hidden="true">↗</span>
        <span className="catalog-card-category">{course.category}</span>
        <strong>{course.title}</strong>
        <span className="catalog-card-link">Explore course →</span>
      </Link>)}
    </div>
  </main>
)

export const CoursePage = () => {
  const { courseSlug } = useParams()
  const course = courses.find((item) => item.slug === courseSlug)

  if (!course) {
    return <main className="catalog-page"><h1>Course not found</h1><Link className="not-found-home" to="/catalog">Browse all courses</Link></main>
  }

  return (
    <main className="catalog-page course-detail">
      <Link className="course-back-link" to="/catalog">← All courses</Link>
      <p className="catalog-kicker">{course.category.toUpperCase()}</p>
      <h1>{course.title}</h1>
      <p className="catalog-lead">Course details will be available when the course catalog API is connected.</p>
      <div className="course-detail-panel">Explore the catalog to find your next learning path.</div>
    </main>
  )
}
