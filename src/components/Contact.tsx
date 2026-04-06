export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">Let's get in touch! Email me at <a href="mailto:prpa.dev@gmail.com" className="text-purple-500 hover:underline">prpa.dev@gmail.com</a></p>
      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/draganprpa/" className="px-4 py-2 border rounded hover:bg-purple-500 text-white transition">LinkedIn</a>
        <a href="https://github.com/Dragan-Prpa" className="px-4 py-2 border rounded hover:bg-purple-500  text-white transition">GitHub</a>
      </div>
    </section>
  )
}