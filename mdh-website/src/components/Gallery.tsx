import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          <Image className="mb-8 rounded-lg shadow-soft" src="https://via.placeholder.com/500x300" alt="Portfolio item" width={500} height={300} />
          <Image className="mb-8 rounded-lg shadow-soft" src="https://via.placeholder.com/500x400" alt="Portfolio item" width={500} height={400} />
          <Image className="mb-8 rounded-lg shadow-soft" src="https://via.placeholder.com/500x500" alt="Portfolio item" width={500} height={500} />
          <Image className="mb-8 rounded-lg shadow-soft" src="https://via.placeholder.com/500x350" alt="Portfolio item" width={500} height={350} />
          <Image className="mb-8 rounded-lg shadow-soft" src="https://via.placeholder.com/500x450" alt="Portfolio item" width={500} height={450} />
          <Image className="mb-8 rounded-lg shadow-soft" src="https://via.placeholder.com/500x250" alt="Portfolio item" width={500} height={250} />
        </div>
      </div>
    </section>
  );
}
