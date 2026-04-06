export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 border rounded-lg border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project 1</h3>
          <p className="text-gray-700 dark:text-gray-300">Description of project 1 goes here.</p>
        </div>
        <div className="p-6 border rounded-lg border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project 2</h3>
          <p className="text-gray-700 dark:text-gray-300">Description of project 2 goes here.</p>
        </div>
      </div>
    </section>
  )
}