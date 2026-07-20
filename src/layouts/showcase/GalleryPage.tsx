import { useState } from "react";
import Breadcrumb from "@components/Library/Breadcrumb/Breadcrumb";
import Carousel from "@components/Library/Carousel/Carousel";
import CarouselItem from "@components/Library/Carousel/CarouselItem";
import Card from "@components/Library/Cards/Card";
import CardHeader from "@components/Library/Cards/CardHeader";
import CardTitle from "@components/Library/Cards/CardTitle";
import CardDescription from "@components/Library/Cards/CardDescription";
import Pagination from "@components/Library/Pagination/Pagination";
import PaginationContent from "@components/Library/Pagination/PaginationContent";
import PaginationPrevious from "@components/Library/Pagination/PaginationPrevious";
import PaginationNext from "@components/Library/Pagination/PaginationNext";
import Accordion from "@components/Library/Accordion";

const galleryBreadcrumb = [
  { id: "home", title: "Home", link: "#" },
  { id: "library", title: "Library", link: "#" },
  { id: "gallery", title: "Gallery", link: "#" },
];

const featured = [
  { id: "feature-1", label: "Spring Campaign" },
  { id: "feature-2", label: "Product Launch" },
  { id: "feature-3", label: "Brand Refresh" },
];

const projects = Array.from({ length: 12 }, (_, index) => ({
  id: `project-${index + 1}`,
  title: `Project ${index + 1}`,
  description: "A short case study description for this piece of work.",
}));

const faqItems = [
  { name: "How do I license a component?", content: "Every component ships under the MIT license — copy, paste, and edit freely." },
  { name: "Can I customize the design tokens?", content: "Yes, colors, spacing, and radii are all defined as Tailwind utilities you can override." },
  { name: "Is AsterMotion open source?", content: "Yes, the full source is available and welcomes contributions." },
];

const PAGE_SIZE = 3;

const GalleryPage = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const visibleProjects = projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-4">
        <Breadcrumb items={galleryBreadcrumb} />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium">Featured work</h3>
          <p className="text-sm text-gray-500">A rotating look at recent projects.</p>
        </div>
        <div className="h-56">
          <Carousel>
            {featured.map((item) => (
              <CarouselItem key={item.id} id={item.id} item={item.label} />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-medium text-gray-700">All projects</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleProjects.map((project) => (
            <Card key={project.id} size="sm" variant="bordered">
              <CardHeader className="pb-[var(--card-py)]">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="flex justify-center pt-2">
          <Pagination activePage={page} totalPages={totalPages} onPageChange={setPage}>
            <PaginationPrevious />
            <PaginationContent />
            <PaginationNext />
          </Pagination>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-700">FAQ</h4>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};

export default GalleryPage;
