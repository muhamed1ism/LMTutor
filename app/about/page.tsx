export default function page() {
  return (
    <div className="container mx-auto p-4 text-white mt-16">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="mb-4">
        This application is a comprehensive platform designed to provide users with a seamless experience in learning and managing courses. It leverages a robust tech stack to ensure high performance, scalability, and ease of use.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>MongoDB with Docker:</strong> The database is managed using MongoDB, containerized with Docker to ensure a consistent and isolated environment.</li>
        <li><strong>Next.js:</strong> The frontend is built using Next.js, a powerful React framework that enables server-side rendering and static site generation.</li>
        <li><strong>TailwindCSS:</strong> For styling, TailwindCSS is used to create a responsive and modern user interface with utility-first CSS classes.</li>
        <li><strong>Prisma:</strong> Prisma is used as the ORM (Object-Relational Mapping) tool to interact with the MongoDB database, providing a type-safe and efficient way to manage data.</li>
        <li><strong>Next-Auth:</strong> Authentication is handled using Next-Auth, which provides a flexible and secure way to manage user sessions and authentication flows.</li>
        <li><strong>Axios:</strong> Axios is used for making HTTP requests to the backend API, ensuring smooth communication between the frontend and backend services.</li>
        <li><strong>Toast:</strong> For notifications and alerts, the app uses Toast to provide users with real-time feedback on their actions.</li>
        <li><strong>Cloudinary:</strong> Cloudinary is integrated for managing and storing media assets, such as images and videos, ensuring they are optimized and delivered efficiently.</li>
      </ul>
      <p className="mb-4">
        This combination of technologies ensures that the application is not only powerful and scalable but also user-friendly and visually appealing. Whether you are a beginner looking to learn new skills or an advanced user managing your courses, this platform provides all the tools you need.
      </p>
    </div>
  );
}